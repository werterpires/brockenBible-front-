import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { VerseOnVersion } from '../verses-on-versions/types';

@Injectable({
  providedIn: 'root',
})
export class VersesService {
  constructor(private readonly httpClient: HttpClient) {}

  getVersesOnVersionsByVerseId(verseId: number): Observable<VerseOnVersion[]> {
    return this.httpClient
      .get<VerseOnVersion[]>(
        `http://localhost:3000/verses-on-versions/verse/${verseId}/version_abbr`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
