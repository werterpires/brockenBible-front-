import { Component, Input } from '@angular/core';
import { Verse } from './types';
import { CommonModule } from '@angular/common';
import { VersesService } from './verses.service';
import { VersesOnVersionsComponent } from '../verses-on-versions/verses-on-versions.component';
import { PropositionsComponent } from '../propositions/propositions.component';
import { PropositionsOnVersesComponent } from '../propositions-on-verses/propositions-on-verses.component';
import { OriginalsOnVersesComponent } from '../originals-on-verses/originals-on-verses.component';

@Component({
  selector: 'app-verses',
  standalone: true,
  imports: [
    CommonModule,
    VersesOnVersionsComponent,
    PropositionsOnVersesComponent,
    OriginalsOnVersesComponent,
  ],
  templateUrl: './verses.component.html',
  styleUrl: './verses.component.css',
})
export class VersesComponent {
  @Input() verses: Verse[] = [];
  selectedVerse: Verse | undefined;

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
          console.log('propositionsOnVerse', propositionsOnVerse);
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
        console.log('originalsOnVerse', originalsOnVerse);
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
