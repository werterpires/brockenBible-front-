import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValueOnMorphologicalAnalysis } from './types';

@Component({
  selector: 'app-values-on-morphological-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './values-on-morphological-analysis.component.html',
  styleUrl: './values-on-morphological-analysis.component.css',
})
export class ValuesOnMorphologicalAnalysisComponent {
  @Input() valuesOnMorphologicalAnalysis: ValueOnMorphologicalAnalysis[] = [];
}
