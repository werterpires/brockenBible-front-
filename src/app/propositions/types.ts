import { ThemeOnProposition } from '../themes-on-propositions/types';
import { Verse } from '../verses/types';

export interface Proposition {
  PropositionId: number;
  verseId: number;
  propositionText: string;
  verse?: Verse;
  themesOnPropositions?: ThemeOnProposition[];
}
