import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ValueOnMorphologicalAnalysis } from '../values-on-morphological-analysis/types';

@Injectable({
  providedIn: 'root',
})
export class MorphologicalAnalysisOnOriginalsService {
  constructor(private readonly httpClient: HttpClient) {}

  getValuesOnMorphAnalysisByMorphAnalysisId(
    morphAnalysisId: number
  ): Observable<ValueOnMorphologicalAnalysis[]> {
    return this.httpClient
      .get<ValueOnMorphologicalAnalysis[]>(
        `http://localhost:3000/values-on-morphological-analysis/morphological-analysis/${morphAnalysisId}/words_property_name`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
