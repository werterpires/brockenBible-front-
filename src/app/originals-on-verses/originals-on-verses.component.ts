import { Component, Input } from '@angular/core';
import { OriginalOnVerse } from './types';
import { CommonModule } from '@angular/common';
import { OriginalsOnVersesService } from './originals-on-verses.service';
import { MorphologicalAnalysisOnOriginalsComponent } from '../morphological-analysis-on-originals/morphological-analysis-on-originals.component';

@Component({
  selector: 'app-originals-on-verses',
  standalone: true,
  imports: [CommonModule, MorphologicalAnalysisOnOriginalsComponent],
  templateUrl: './originals-on-verses.component.html',
  styleUrl: './originals-on-verses.component.css',
})
export class OriginalsOnVersesComponent {
  @Input() originalsOnVerse: OriginalOnVerse[] = [];
  selectedOriginalOnVerse: OriginalOnVerse | undefined;

  constructor(
    private readonly originalsOnVersesService: OriginalsOnVersesService
  ) {}

  selectOriginalOnVerse(originalOnVerse: OriginalOnVerse) {
    this.selectedOriginalOnVerse = originalOnVerse;
    this.originalsOnVersesService
      .getAllMorphologicalAnalysisOnOriginalsByOriginalId(
        originalOnVerse.originalId
      )
      .subscribe({
        next: (morphAnalysisOnVerse) => {
          console.log(morphAnalysisOnVerse);
          if (!originalOnVerse.original) {
            originalOnVerse.original = {
              originalId: originalOnVerse.originalId,
              originalName: '',
              originalMeaning: '',
              rootId: 0,
              root: { rootId: 0, rootWord: '', rootMeaning: '' },
            };
          }

          originalOnVerse.original.morphologicalAnalysisOnOriginals =
            morphAnalysisOnVerse;
          this.selectedOriginalOnVerse = originalOnVerse;
        },
      });
  }
}
