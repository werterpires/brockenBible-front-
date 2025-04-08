import { Verse, Version } from '../verses/types';

export interface CreateVerseOnVersion {
  verseId: number;
  versionId: number;
  verseText: string;
}

export interface VerseOnVersion extends CreateVerseOnVersion {
  verseOnVersionId: number;
  version?: Version;
  verse?: Verse;
  textNumber?: number;
}
