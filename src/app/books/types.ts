import { Chapter } from '../chapters/types';

export type Testament = 'Antigo' | 'Novo';
export interface CreateBook {
  bookAbbr: string;
  bookCompleteName: string;
  bookReducedName: string;
  testament: Testament;
  bookPosition: number;
  chapters?: Chapter[];
}

export interface UpdateBook extends CreateBook {
  bookId: number;
}

export interface Book extends UpdateBook {}
