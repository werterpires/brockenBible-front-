import { Proposition } from '../propositions/types';
import { Theme } from '../themes/types';

export interface ThemeOnProposition {
  themeId: number;
  PropositionId: number;

  theme?: Theme;
  proposition?: Proposition;
}
