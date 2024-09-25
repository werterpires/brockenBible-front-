import { Component, Input } from '@angular/core';
import { Verse } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verses.component.html',
  styleUrl: './verses.component.css',
})
export class VersesComponent {
  @Input() verses: Verse[] = [];
}
