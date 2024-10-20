import { Component, Input } from '@angular/core';
import { OriginalOnVerse } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-originals-on-verses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './originals-on-verses.component.html',
  styleUrl: './originals-on-verses.component.css',
})
export class OriginalsOnVersesComponent {
  @Input() originalsOnVerse: OriginalOnVerse[] = [];
  selectedOriginalOnVerse: OriginalOnVerse | undefined;

  constructor() {}

  selectOriginalOnVerse(originalOnVerse: OriginalOnVerse) {
    this.selectedOriginalOnVerse = originalOnVerse;
  }
}
