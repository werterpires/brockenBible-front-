import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateThemeDto, Theme } from './types';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  constructor(private readonly httpClient: HttpClient) {}

  createTheme(createThemeData: CreateThemeDto): Observable<Theme> {
    return this.httpClient
      .post<Theme>('http://localhost:3000/themes', createThemeData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }

  getThemes(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>('http://localhost:3000/themes').pipe(
      catchError((error: HttpErrorResponse) => {
        throw error;
      })
    );
  }

  deleteTheme(themeId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`http://localhost:3000/themes/${themeId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throw error;
        })
      );
  }
}
