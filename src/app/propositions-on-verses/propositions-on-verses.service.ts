import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ThemeOnProposition } from '../themes-on-propositions/types';
import { CreateProposition } from './types';
import { Proposition } from '../propositions/types';

@Injectable({
  providedIn: 'root',
})
export class PropositionsOnVersesService {
  constructor(private readonly httpClient: HttpClient) {}

  createProposition(
    createPropositionData: CreateProposition
  ): Observable<Proposition> {
    return this.httpClient
      .post<Proposition>(
        'http://localhost:3000/propositions',
        createPropositionData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }

  getAllThemesOnPropositionsByPropositionId(
    propositionId: number
  ): Observable<ThemeOnProposition[]> {
    return this.httpClient
      .get<ThemeOnProposition[]>(
        `http://localhost:3000/themes-on-propositions/proposition/${propositionId}/theme_text`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
