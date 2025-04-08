import { Component, Input } from '@angular/core';
import { PropositionOnVerse } from './types';
import { PropositionsOnVersesService } from './propositions-on-verses.service';
import { CommonModule } from '@angular/common';
import { ThemesOnPropositionsComponent } from '../themes-on-propositions/themes-on-propositions.component';

@Component({
  selector: 'app-propositions-on-verses',
  standalone: true,
  imports: [CommonModule, ThemesOnPropositionsComponent],
  templateUrl: './propositions-on-verses.component.html',
  styleUrl: './propositions-on-verses.component.css',
})
export class PropositionsOnVersesComponent {
  @Input() propositionsOnVerses: PropositionOnVerse[] = [];
  selectedPropositionOnVerse: PropositionOnVerse | undefined;

  constructor(
    private readonly propositionsOnVersesService: PropositionsOnVersesService
  ) {}

  selectPropositionOnVerse(propositionOnVerse: PropositionOnVerse) {
    this.selectedPropositionOnVerse = propositionOnVerse;

    this.propositionsOnVersesService
      .getAllThemesOnPropositionsByPropositionId(
        propositionOnVerse.propositionId
      )
      .subscribe({
        next: (themesOnPropositions) => {
          if (!propositionOnVerse.proposition) {
            propositionOnVerse.proposition = {
              PropositionId: propositionOnVerse.propositionId,
              propositionText: '',
              verseId: propositionOnVerse.verseId,
            };
          }
          propositionOnVerse.proposition.themesOnPropositions =
            themesOnPropositions;
          this.selectedPropositionOnVerse = propositionOnVerse;
        },
        error: (error) => {
          throw error;
        },
      });
  }
}
