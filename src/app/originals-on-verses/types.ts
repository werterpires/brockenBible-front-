import { Original } from '../originals/types';
import { Verse } from '../verses/types';

export interface OriginalOnVerse {
  originalId: number;
  verseId: number;
  wordPosition: number;
  apparatus: string;
  verse?: Verse;
  original?: Original;
}
