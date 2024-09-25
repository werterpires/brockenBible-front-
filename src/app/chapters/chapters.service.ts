import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Paginator } from '../shared/types';
import { Verse } from '../verses/types';

@Injectable({
  providedIn: 'root',
})
export class ChaptersService {
  constructor(private readonly httpClient: HttpClient) {}

  getVersesByChapterId(chapterId: number): Observable<Verse[]> {
    return this.httpClient
      .get<Verse[]>(
        `http://localhost:3000/verses/chapter/${chapterId}/verse_number`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
