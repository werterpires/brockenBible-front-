import { WordsProperty } from '../words-properties/types';

export interface PossiblePropertyValue {
  possibleValueId: number;
  wordsPropertyId: number;
  implication: string;
  value: string;
  wordsProperty?: WordsProperty;
}
