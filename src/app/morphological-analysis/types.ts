import { ValueOnMorphologicalAnalysis } from '../values-on-morphological-analysis/types';

export interface MorphologicalAnalysis {
  morphAnalysisId: number;
  analysisName: string;
  valuesOnMorphologicalAnalysis?: ValueOnMorphologicalAnalysis[];
}
