import { Verse } from '../verses/types';

export interface Proposition {
  PropositionId: number;
  verseId: number;
  proposition: string;
  verse?: Verse;
}
