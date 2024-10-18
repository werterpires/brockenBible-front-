import { Root } from '../roots/types';

export interface Original {
  originalId: number;
  originalName: string;
  originalMeaning: string;
  rootId: number;
  root?: Root;
}
