import { Injectable } from '@angular/core';
import { UpdateBook, CreateBook, Book } from './types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Paginator } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly httpClient: HttpClient) {}

  createBook(createBookData: CreateBook): Observable<Book> {
    console.log(createBookData);
    return this.httpClient
      .post<Book>('http://localhost:3000/books', createBookData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }

  updateBook(updateBookData: UpdateBook): Observable<Book> {
    return this.httpClient
      .put<Book>(
        `http://localhost:3000/books/${updateBookData.bookId}`,
        updateBookData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }

  getBooks(paginator: Paginator): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>(
        `http://localhost:3000/books/${paginator.offset}/${paginator.limit}/${paginator.orderBy}/${paginator.direction}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  obterLivro(bookId: number): Observable<Book> {
    return this.httpClient
      .get<Book>(`http://localhost:3000/books/${bookId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }

  deleteBook(bookId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`http://localhost:3000/books/${bookId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }

  getChaptersByBookId(bookId: number): Observable<any> {
    return this.httpClient
      .get<any>(`http://localhost:3000/chapters/book/${bookId}/chapter_number`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
