import { Chapter } from '../chapters/types';
import { PropositionOnVerse } from '../propositions-on-verses/types';
import { Proposition } from '../propositions/types';
import { VerseOnVersion } from '../verses-on-versions/types';

export interface Verse {
  verseId: number;
  chapterId: number;
  verseNumber: number;
  verseTranslation: string;
  chapter?: Chapter;
  verseOnVersions?: VerseOnVersion[];
  propositionsOnVerse?: PropositionOnVerse[];
}

export interface Version {
  versionId: number;
  versionName: string;
  versionAbbr: string;
  versesOnVersion?: VerseOnVersion[];
}
