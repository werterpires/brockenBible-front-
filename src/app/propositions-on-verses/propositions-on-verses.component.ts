import { Component, Input } from '@angular/core';
import { CreateProposition, PropositionOnVerse } from './types';
import { PropositionsOnVersesService } from './propositions-on-verses.service';
import { CommonModule } from '@angular/common';
import { ThemesOnPropositionsComponent } from '../themes-on-propositions/themes-on-propositions.component';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import * as validators from '../shared/components/custom-input/validators';
import * as utils from './propositions-on-verses.utils';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propositions-on-verses',
  standalone: true,
  imports: [
    CommonModule,
    ThemesOnPropositionsComponent,
    CustomFormComponent,
    CustomInputComponent,
    FormsModule,
  ],
  templateUrl: './propositions-on-verses.component.html',
  styleUrl: './propositions-on-verses.component.css',
})
export class PropositionsOnVersesComponent {
  @Input() verseId: number = 0;
  createPropositionData: CreateProposition = { ...utils.propositionData };

  @Input() propositionsOnVerses: PropositionOnVerse[] = [];
  selectedPropositionOnVerse: PropositionOnVerse | undefined;
  creating = false;

  validators = validators;

  constructor(
    private readonly propositionsOnVersesService: PropositionsOnVersesService
  ) {}

  createProposition() {
    this.createPropositionData.versesId.push(this.verseId);
    this.propositionsOnVersesService
      .createProposition(this.createPropositionData)
      .subscribe({
        next: (proposition) => {
          this.propositionsOnVerses.push({
            verseId: this.verseId,
            propositionId: proposition.propositionId,
            proposition: {
              propositionId: proposition.propositionId,
              propositionText: this.createPropositionData.propositionText,
              verseId: this.verseId,
            },
          });

          this.creating = false;
          console.log('propositions: ', this.propositionsOnVerses);
          this.createPropositionData = { ...utils.propositionData };
        },
        error: (error) => {
          throw error;
        },
      });
  }

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
              propositionId: propositionOnVerse.propositionId,
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
