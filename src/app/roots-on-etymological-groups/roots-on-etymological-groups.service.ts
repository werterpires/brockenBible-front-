import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RootOnEtymologicalGroup } from './types';

@Injectable({
  providedIn: 'root',
})
export class RootsOnEtymmologicalGroupsService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllRootOnEtymologicalGroupsByRootId(
    rootId: number
  ): Observable<RootOnEtymologicalGroup[]> {
    return this.httpClient
      .get<RootOnEtymologicalGroup[]>(
        `http://localhost:3000/roots-on-etymological-groups/root/${rootId}/etym_group_name`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
