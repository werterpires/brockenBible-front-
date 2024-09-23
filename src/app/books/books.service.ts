import { Injectable } from '@angular/core';
import { UpdateBook, CreateBook, Livro } from './types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Paginator } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly httpClient: HttpClient) {}

  createBook(createBookData: CreateBook): Observable<Livro> {
    return this.httpClient
      .post<Livro>('http://localhost:3000/books', createBookData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }

  updateBook(updateBookData: UpdateBook): Observable<Livro> {
    return this.httpClient
      .put<Livro>(
        `http://localhost:3000/books/${updateBookData.bookId}`,
        updateBookData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }

  getBooks(paginator: Paginator): Observable<Livro[]> {
    return this.httpClient
      .get<Livro[]>(
        `http://localhost:3000/books/${paginator.offset}/${paginator.limit}/${paginator.orderBy}/${paginator.direction}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  obterLivro(bookId: number): Observable<Livro> {
    return this.httpClient
      .get<Livro>(`http://localhost:3000/books/${bookId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }

  deletarLivro(bookId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`http://localhost:3000/books/${bookId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new HttpErrorResponse(error.error.message));
        })
      );
  }
}
