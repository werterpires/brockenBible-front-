import { Verse, Version } from '../verses/types';

export interface VerseOnVersion {
  verseOnVersionId: number;
  verseId: number;
  versionId: number;
  verseText: string;
  version?: Version;
  verse?: Verse;
}
