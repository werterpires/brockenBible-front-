import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { VerseOnVersion } from '../verses-on-versions/types';
import { PropositionOnVerse } from '../propositions-on-verses/types';
import { OriginalOnVerse } from '../originals-on-verses/types';
import { CreateVerse, Verse } from './types';

@Injectable({
  providedIn: 'root',
})
export class VersesService {
  constructor(private readonly httpClient: HttpClient) {}

  createVerse(createVerseData: CreateVerse): Observable<Verse> {
    return this.httpClient
      .post<Verse>('http://localhost:3000/verses', createVerseData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }

  getVersesOnVersionsByVerseId(verseId: number): Observable<VerseOnVersion[]> {
    return this.httpClient
      .get<VerseOnVersion[]>(
        `http://localhost:3000/verses-on-versions/verse/${verseId}/verse_text`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  getPropositionsOnVersesByVerseId(
    verseId: number
  ): Observable<PropositionOnVerse[]> {
    return this.httpClient
      .get<PropositionOnVerse[]>(
        `http://localhost:3000/propositions-on-verses/verse/${verseId}/proposition_text`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  getOriginalsOnVerseByVerseId(verseId: number): Observable<OriginalOnVerse[]> {
    return this.httpClient
      .get<OriginalOnVerse[]>(
        `http://localhost:3000/originals-on-verses/verse/${verseId}/word_position`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
