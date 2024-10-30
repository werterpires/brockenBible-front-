import { EtymologicalGroup } from '../etymological-groups/types';
import { Root } from '../roots/types';

export interface RootOnEtymologicalGroup {
  etymGroupId: number;
  rootId: number;
  etymGroup?: EtymologicalGroup;
  root?: Root;
}
