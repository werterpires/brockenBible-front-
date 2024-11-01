import { Original } from '../originals/types';
import { RootOnEtymologicalGroup } from '../roots-on-etymological-groups/types';

export interface Root {
  rootId: number;
  rootWord: string;
  rootMeaning: string;
  originals?: Original[];
  rootOnEtymologicalGroups?: RootOnEtymologicalGroup[];
}
