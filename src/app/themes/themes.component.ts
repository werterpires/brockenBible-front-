import { Component } from '@angular/core';
import { CreateThemeDto, Theme } from './types';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import * as validators from '../shared/components/custom-input/validators';
import * as utils from './themes.utils';
import { ThemesService } from './themes.service';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [
    CommonModule,
    CustomFormComponent,
    CustomInputComponent,
    FormsModule,
  ],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css',
})
export class ThemesComponent {
  themes: Theme[] = [];
  creating = false;
  createThemeData = { ...utils.createThemeData };
  validators = validators;

  constructor(private readonly themesService: ThemesService) {}

  deleteTheme(themeId: number) {}
  createTheme() {
    this.themesService.createTheme(this.createThemeData).subscribe({
      next: (theme) => {
        this.themes.push(theme);
        this.creating = false;
        this.createThemeData = { ...utils.createThemeData };
      },
    });
  }
}
