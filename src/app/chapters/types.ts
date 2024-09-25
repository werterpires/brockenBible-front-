import { Book } from '../books/types';
import { Verse } from '../verses/types';

export interface Chapter {
  chapterId: number;
  chapterNumber: number;
  chapterSummary: string;
  bookId: number;
  book?: Book;
  verses: Verse[];
}
