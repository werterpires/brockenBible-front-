import { Component, Input } from '@angular/core';
import { Proposition } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propositions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propositions.component.html',
  styleUrl: './propositions.component.css',
})
export class PropositionsComponent {
  @Input() propositions: Proposition[] = [];
}
