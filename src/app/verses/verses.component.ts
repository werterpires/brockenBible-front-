import { Component, Input } from '@angular/core';
import { Verse } from './types';
import { CommonModule } from '@angular/common';
import { VersesService } from './verses.service';
import { VersesOnVersionsComponent } from '../verses-on-versions/verses-on-versions.component';

@Component({
  selector: 'app-verses',
  standalone: true,
  imports: [CommonModule, VersesOnVersionsComponent],
  templateUrl: './verses.component.html',
  styleUrl: './verses.component.css',
})
export class VersesComponent {
  @Input() verses: Verse[] = [];
  selectedVerse: Verse | undefined;

  constructor(private readonly versesService: VersesService) {}

  selectVerse(verse: Verse) {
    this.selectedVerse = verse;

    this.versesService
      .getVersesOnVersionsByVerseId(verse.verseId)
      .subscribe((versesOnVersions) => {
        verse.verseOnVersions = versesOnVersions;
        this.selectedVerse = verse;
      });
  }
}
