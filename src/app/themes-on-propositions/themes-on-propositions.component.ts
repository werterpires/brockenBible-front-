import { Component, Input } from '@angular/core';
import { ThemeOnProposition } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themes-on-propositions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './themes-on-propositions.component.html',
  styleUrl: './themes-on-propositions.component.css',
})
export class ThemesOnPropositionsComponent {
  @Input() themesOnPropositions: ThemeOnProposition[] = [];
}
