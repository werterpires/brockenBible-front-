import { Component, Input } from '@angular/core';
import { ThemeOnProposition } from './types';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import * as validators from '../shared/components/custom-input/validators';
import { FormsModule } from '@angular/forms';
import { Theme } from '../themes/types';
import { SelectOption } from '../shared/components/custom-input/types';

@Component({
  selector: 'app-themes-on-propositions',
  standalone: true,
  imports: [
    CommonModule,
    CustomFormComponent,
    CustomInputComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './themes-on-propositions.component.html',
  styleUrl: './themes-on-propositions.component.css',
})
export class ThemesOnPropositionsComponent {
  addThemeOnPropositionData: any;
  addThemetoProposition() {
    throw new Error('Method not implemented.');
  }
  @Input() themesOnPropositions: ThemeOnProposition[] = [];
  validators = validators;
  creating = false;
  allThemes: Theme[] = [];
  themesOptions: SelectOption[] = [];

  constructor() {}
}
