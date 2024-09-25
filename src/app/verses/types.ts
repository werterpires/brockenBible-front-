import { Chapter } from '../chapters/types';

export interface Verse {
  verseId: number;
  chapterId: number;
  verseNumber: number;
  chapter?: Chapter;
  verseOnVersions?: VerseOnVersion[];
}

export interface VerseOnVersion {
  verseOnVersionId: number;
  verseId: number;
  versionId: number;
  verseText: string;
  version?: Version;
  verse?: Verse;
}

export interface Version {
  versionId: number;
  versionName: string;
  versionAbbr: string;
  versesOnVersion?: VerseOnVersion[];
}
