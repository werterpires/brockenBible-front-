import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Chapter } from './types';
import { ChaptersService } from './chapters.service';
import { Paginator } from '../shared/types';
import { VersesComponent } from '../verses/verses.component';

@Component({
  selector: 'app-chapters',
  standalone: true,
  imports: [CommonModule, VersesComponent],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.css',
})
export class ChaptersComponent {
  @Input() chapters: Chapter[] = [];
  selectedChapter: Chapter | undefined;

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
}
