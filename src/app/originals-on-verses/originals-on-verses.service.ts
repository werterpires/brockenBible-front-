import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ThemeOnProposition } from '../themes-on-propositions/types';
import { MorphologicalAnalysisOnOriginal } from '../morphological-analysis-on-originals/types';

@Injectable({
  providedIn: 'root',
})
export class OriginalsOnVersesService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllMorphologicalAnalysisOnOriginalsByOriginalId(
    originalId: number
  ): Observable<MorphologicalAnalysisOnOriginal[]> {
    return this.httpClient
      .get<MorphologicalAnalysisOnOriginal[]>(
        `http://localhost:3000/morphological-analysis-on-originals/original/${originalId}/analysis_name`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
