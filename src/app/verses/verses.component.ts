import { Component, Input } from '@angular/core';
import { CreateVerse, Verse } from './types';
import { CommonModule } from '@angular/common';
import { VersesService } from './verses.service';
import { VersesOnVersionsComponent } from '../verses-on-versions/verses-on-versions.component';
import { PropositionsComponent } from '../propositions/propositions.component';
import { PropositionsOnVersesComponent } from '../propositions-on-verses/propositions-on-verses.component';
import { OriginalsOnVersesComponent } from '../originals-on-verses/originals-on-verses.component';
import * as utils from './verses.utils';
import * as validators from '../shared/components/custom-input/validators';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verses',
  standalone: true,
  imports: [
    CommonModule,
    VersesOnVersionsComponent,
    PropositionsOnVersesComponent,
    OriginalsOnVersesComponent,
    CustomFormComponent,
    CustomInputComponent,
    FormsModule,
  ],
  templateUrl: './verses.component.html',
  styleUrl: './verses.component.css',
})
export class VersesComponent {
  @Input() verses: Verse[] = [];
  @Input() chapterId!: number;
  selectedVerse: Verse | undefined;
  createVerseData: CreateVerse = { ...utils.createVerseData };
  creating = false;
  validators = validators;

  constructor(private readonly versesService: VersesService) {}

  selectVerse(verse: Verse) {
    this.selectedVerse = verse;

    this.versesService.getVersesOnVersionsByVerseId(verse.verseId).subscribe({
      next: (versesOnVersions) => {
        verse.verseOnVersions = versesOnVersions;
        this.selectedVerse = verse;
      },
      error: (error) => {
        throw error;
      },
    });

    this.versesService
      .getPropositionsOnVersesByVerseId(verse.verseId)
      .subscribe({
        next: (propositionsOnVerse) => {
          verse.propositionsOnVerse = propositionsOnVerse;
          this.selectedVerse = verse;
        },
        error: (error) => {
          throw error;
        },
      });

    this.versesService.getOriginalsOnVerseByVerseId(verse.verseId).subscribe({
      next: (originalsOnVerse) => {
        verse.originalsOnVerse = originalsOnVerse;
        this.selectedVerse = verse;
      },
      error: (error) => {
        throw error;
      },
    });
  }

  createVerse() {
    this.createVerseData.chapterId = this.chapterId;
    this.createVerseData.verseNumber = Number(this.createVerseData.verseNumber);

    this.versesService.createVerse(this.createVerseData).subscribe({
      next: (verse) => {
        const index = this.verses.findIndex(
          (v) => v.verseNumber > verse.verseNumber
        );

        if (index === -1) {
          this.verses.push(verse);
        } else {
          this.verses.splice(index, 0, verse);
        }

        this.creating = false;
        this.createVerseData = { ...utils.createVerseData };
      },
    });
  }
}
