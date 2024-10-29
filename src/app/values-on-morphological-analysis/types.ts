import { MorphologicalAnalysis } from '../morphological-analysis/types';
import { PossiblePropertyValue } from '../possible-properties-values/types';

export interface ValueOnMorphologicalAnalysis {
  morphAnalysisId: number;
  possibleValueId: string;
  possiblePropertyValue?: PossiblePropertyValue;
  morphologicalAnalysis?: MorphologicalAnalysis;
}
