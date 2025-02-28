import { Chapter } from '../chapters/types';
import { OriginalOnVerse } from '../originals-on-verses/types';
import { PropositionOnVerse } from '../propositions-on-verses/types';
import { Proposition } from '../propositions/types';
import { VerseOnVersion } from '../verses-on-versions/types';

export interface CreateVerse {
  chapterId: number;
  verseNumber: number;
  verseTranslation: string;
}

export interface Verse extends CreateVerse {
  verseId: number;
  chapter?: Chapter;
  verseOnVersions?: VerseOnVersion[];
  propositionsOnVerse?: PropositionOnVerse[];
  originalsOnVerse?: OriginalOnVerse[];
}

export interface Version {
  versionId: number;
  versionName: string;
  versionAbbr: string;
  versesOnVersion?: VerseOnVersion[];
}
