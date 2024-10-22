import { WordsProperty } from '../words-properties/types';

export interface PossiblePropertyValue {
  possibleValueId: number;
  wordsPropertyId: number;
  value: string;
  wordsProperty?: WordsProperty;
}
