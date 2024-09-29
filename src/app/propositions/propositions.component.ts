import { Component, Input } from '@angular/core';
import { Proposition } from './types';
import { CommonModule } from '@angular/common';
import { ThemesOnPropositionsComponent } from '../themes-on-propositions/themes-on-propositions.component';
import { PropositionsService } from './propositions.service';

@Component({
  selector: 'app-propositions',
  standalone: true,
  imports: [CommonModule, ThemesOnPropositionsComponent],
  templateUrl: './propositions.component.html',
  styleUrl: './propositions.component.css',
})
export class PropositionsComponent {
  @Input() propositions: Proposition[] = [];
  selectedProposition: Proposition | undefined;

  constructor(private readonly propositionsService: PropositionsService) {}
}
