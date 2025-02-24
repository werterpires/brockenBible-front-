import { Component } from '@angular/core';
import { UpdateBook, CreateBook, Book } from './types';
import { Paginator } from '../shared/types';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChaptersComponent } from '../chapters/chapters.component';
import { CustomFormComponent } from '../shared/components/custom-form/custom-form.component';
import { FormsModule } from '@angular/forms';
import * as utils from './books.utils';
import * as validators from '../shared/components/custom-input/validators';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    ChaptersComponent,
    CustomFormComponent,
    FormsModule,
    CustomInputComponent,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  providers: [BooksService],
})
export class booksComponent {
  books: Book[] = [];
  createBookData = utils.createBookData;
  selectedBook: Book | undefined;
  paginator: Paginator = {
    limit: 10,
    offset: 0,
    orderBy: 'book_position',
    direction: 'asc',
  };
  validators = validators;

  creating = false;

  constructor(private readonly booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getBooks(this.paginator).subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (error) => {
        throw error;
      },
    });
  }

  selectBook(book: Book) {
    this.selectedBook = book;

    this.booksService.getChaptersByBookId(book.bookId).subscribe({
      next: (chapters) => {
        book.chapters = chapters;
        this.selectedBook = book;
      },
      error: (error) => {
        throw error;
      },
    });
  }

  deleteBook(bookId: number) {
    this.booksService.deleteBook(bookId).subscribe({
      next: () => {
        this.getBooks();
      },
      error: (error) => {
        throw error;
      },
    });
  }

  getBook(bookId: number) {
    this.booksService.obterLivro(bookId).subscribe({
      next: (livro) => {},
      error: (error) => {},
    });
  }

  createBook() {
    this.createBookData.bookPosition = Number(this.createBookData.bookPosition);
    this.booksService.createBook(this.createBookData).subscribe({
      next: (livro) => {
        this.books.push(livro);
        this.creating = false;
        this.createBookData = utils.createBookData;
      },
      error: (error) => {
        throw error;
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
      bookPosition: this.selectedBook.bookPosition,
    };
    this.booksService.updateBook(dadosAtualizarLivro).subscribe({
      next: (livro) => {
        this.selectedBook = undefined;
        const index = this.books.findIndex(
          (livro) => livro.bookId === dadosAtualizarLivro.bookId
        );
        this.books[index] = livro;
      },
      error: (error) => {},
    });
  }
}
