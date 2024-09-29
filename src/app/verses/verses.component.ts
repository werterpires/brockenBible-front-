import { Component, Input } from '@angular/core';
import { Verse } from './types';
import { CommonModule } from '@angular/common';
import { VersesService } from './verses.service';
import { VersesOnVersionsComponent } from '../verses-on-versions/verses-on-versions.component';
import { PropositionsComponent } from '../propositions/propositions.component';

@Component({
  selector: 'app-verses',
  standalone: true,
  imports: [CommonModule, VersesOnVersionsComponent, PropositionsComponent],
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

    this.versesService.getPropositionsByVerseId(verse.verseId).subscribe({
      next: (propositions) => {
        verse.propositions = propositions;
        this.selectedVerse = verse;
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
