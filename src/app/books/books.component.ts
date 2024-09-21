import { Component } from '@angular/core';
import { UpdateBook, CreateBook, Livro } from './types';
import { Paginator } from '../shared/types';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  providers: [BooksService],
})
export class booksComponent {
  books: Livro[] = [];
  createBookData: CreateBook = {
    bookAbbr: '',
    bookCompleteName: '',
    bookReducedName: '',
    testament: 'Novo',
  };
  selectedBook: Livro | undefined;
  paginator: Paginator = {
    limit: 10,
    offset: 0,
    orderBy: 'book_position',
    direction: 'asc',
  };

  constructor(private readonly booksService: BooksService) {}

  ngOnInit() {
    this.obterbooks();
  }

  obterbooks() {
    this.booksService.obterbooks(this.paginator).subscribe({
      next: (books) => {
        this.books = books;

        console.log(books);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deletarLivro(idLivro: number) {
    this.booksService.deletarLivro(idLivro).subscribe({
      next: () => {
        this.obterbooks();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  obterLivro(idLivro: number) {
    this.booksService.obterLivro(idLivro).subscribe({
      next: (livro) => {
        console.log(livro);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  criarLivro() {
    this.booksService.createBook(this.createBookData).subscribe({
      next: (livro) => {
        console.log(livro);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  atualizarLivro() {
    if (!this.selectedBook) return;
    const dadosAtualizarLivro: UpdateBook = {
      bookId: this.selectedBook.bookId,
      bookAbbr: this.selectedBook.bookAbbr,
      bookCompleteName: this.selectedBook.bookCompleteName,
      bookReducedName: this.selectedBook.bookReducedName,
      testament: this.selectedBook.testament,
    };
    this.booksService.updateBook(dadosAtualizarLivro).subscribe({
      next: (livro) => {
        console.log(livro);
        this.selectedBook = undefined;
        const index = this.books.findIndex(
          (livro) => livro.bookId === dadosAtualizarLivro.bookId
        );
        this.books[index] = livro;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
