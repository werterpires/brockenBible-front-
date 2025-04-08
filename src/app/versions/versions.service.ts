import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateVersion } from './types';
import { catchError, Observable } from 'rxjs';
import { Version } from '../verses/types';
import { Paginator } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class VersionsService {
  constructor(private readonly httpClient: HttpClient) {}

  createVersion(createVersionData: CreateVersion): Observable<Version> {
    return this.httpClient
      .post<Version>('http://localhost:3000/versions', createVersionData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }

  getVersions(paginator: Paginator): Observable<Version[]> {
    return this.httpClient
      .get<Version[]>(`http://localhost:3000/versions/${paginator.orderBy}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }
}
