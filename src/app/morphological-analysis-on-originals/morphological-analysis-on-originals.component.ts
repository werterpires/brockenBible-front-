import { Component, Input } from '@angular/core';
import { MorphologicalAnalysisOnOriginal } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-morphological-analysis-on-originals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './morphological-analysis-on-originals.component.html',
  styleUrl: './morphological-analysis-on-originals.component.css',
})
export class MorphologicalAnalysisOnOriginalsComponent {
  @Input() morphologicalAnalysisOnOriginals: MorphologicalAnalysisOnOriginal[] =
    [];
}
