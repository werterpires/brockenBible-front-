import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Chapter, CreateChapter } from './types';
import { ChaptersService } from './chapters.service';
import { Paginator } from '../shared/types';
import { VersesComponent } from '../verses/verses.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { FormsModule } from '@angular/forms';
import * as validators from '../shared/components/custom-input/validators';
import * as utils from './chapters.utils';

@Component({
  selector: 'app-chapters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    VersesComponent,
    CustomFormComponent,
    CustomInputComponent,
  ],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.css',
})
export class ChaptersComponent {
  @Input() chapters: Chapter[] = [];
  @Input() bookId!: number;
  selectedChapter: Chapter | undefined;
  createChapterData: CreateChapter = { ...utils.createChapterData };
  validators = validators;
  creating = false;

  constructor(private readonly chaptersService: ChaptersService) {}

  selectChapter(chapter: Chapter) {
    this.selectedChapter = chapter;

    this.chaptersService.getVersesByChapterId(chapter.chapterId).subscribe({
      next: (verses) => {
        chapter.verses = verses;
        this.selectedChapter = chapter;
      },
      error: (error) => {
        throw error;
      },
    });
  }

  createChapter() {
    this.createChapterData.chapterNumber = Number(
      this.createChapterData.chapterNumber
    );

    this.createChapterData.bookId = this.bookId;
    this.chaptersService.createChapter(this.createChapterData).subscribe({
      next: (chapter) => {
        const index = this.chapters.findIndex(
          (ch) => ch.chapterNumber > chapter.chapterNumber
        );

        if (index === -1) {
          this.chapters.push(chapter);
        } else {
          this.chapters.splice(index, 0, chapter);
        }

        this.creating = false;
        this.createChapterData = { ...utils.createChapterData };
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
