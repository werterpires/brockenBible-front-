export type Testament = 'Antigo' | 'Novo';
export interface CreateBook {
  bookAbbr: string;
  bookCompleteName: string;
  bookReducedName: string;
  testament: Testament;
}

export interface UpdateBook extends CreateBook {
  bookId: number;
}

export interface Livro extends UpdateBook {}
