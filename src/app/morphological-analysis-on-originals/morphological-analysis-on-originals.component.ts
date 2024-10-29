import { Component, Input } from '@angular/core';
import { MorphologicalAnalysisOnOriginal } from './types';
import { CommonModule } from '@angular/common';
import { MorphologicalAnalysisOnOriginalsService } from './morphological-analysis-on-originals.service';
import { ValuesOnMorphologicalAnalysisComponent } from '../values-on-morphological-analysis/values-on-morphological-analysis.component';

@Component({
  selector: 'app-morphological-analysis-on-originals',
  standalone: true,
  imports: [CommonModule, ValuesOnMorphologicalAnalysisComponent],
  templateUrl: './morphological-analysis-on-originals.component.html',
  styleUrl: './morphological-analysis-on-originals.component.css',
})
export class MorphologicalAnalysisOnOriginalsComponent {
  @Input() morphologicalAnalysisOnOriginals: MorphologicalAnalysisOnOriginal[] =
    [];

  selectedMorphologicalAnalysisOnOriginal:
    | MorphologicalAnalysisOnOriginal
    | undefined;

  constructor(
    private readonly morphologicalAnalysisOnOriginalsService: MorphologicalAnalysisOnOriginalsService
  ) {}

  selectMorphologicalAnalysisOnOriginal(
    morphologicalAnalysisOnOriginal: MorphologicalAnalysisOnOriginal
  ) {
    this.selectedMorphologicalAnalysisOnOriginal =
      morphologicalAnalysisOnOriginal;

    this.morphologicalAnalysisOnOriginalsService
      .getValuesOnMorphAnalysisByMorphAnalysisId(
        morphologicalAnalysisOnOriginal.morphAnalysisId
      )
      .subscribe({
        next: (valuesOnMorphologicalAnalysis) => {
          console.log(
            'valuesOnMorphologicalAnalysis',
            valuesOnMorphologicalAnalysis
          );
          if (!morphologicalAnalysisOnOriginal.morphologicalAnalysis) {
            morphologicalAnalysisOnOriginal.morphologicalAnalysis = {
              morphAnalysisId: morphologicalAnalysisOnOriginal.morphAnalysisId,
              analysisName: '',
            };
          }

          morphologicalAnalysisOnOriginal.morphologicalAnalysis.valuesOnMorphologicalAnalysis =
            valuesOnMorphologicalAnalysis;
          this.selectedMorphologicalAnalysisOnOriginal =
            morphologicalAnalysisOnOriginal;

          console.log(
            'morphologicalAnalysisOnOriginal',
            morphologicalAnalysisOnOriginal
          );
        },
        error: (error) => {
          throw error;
        },
      });
  }
}
