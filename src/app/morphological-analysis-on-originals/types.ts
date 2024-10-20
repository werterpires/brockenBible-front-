import { MorphologicalAnalysis } from '../morphological-analysis/types';
import { Original } from '../originals/types';

export interface MorphologicalAnalysisOnOriginal {
  morphAnalysisId: number;
  originalId: number;
  original?: Original;
  morphologicalAnalysis?: MorphologicalAnalysis;
}
