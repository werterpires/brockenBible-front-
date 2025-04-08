import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Paginator } from '../shared/types';
import { CreateVerseOnVersion, VerseOnVersion } from './types';

@Injectable({
  providedIn: 'root',
})
export class versesOnVersionsService {
  constructor(private readonly httpClient: HttpClient) {}

  createVerseOnVersion(
    createVerseOnVersionData: CreateVerseOnVersion
  ): Observable<VerseOnVersion> {
    return this.httpClient
      .post<VerseOnVersion>(
        'http://localhost:3000/verses-on-versions',
        createVerseOnVersionData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }
}
