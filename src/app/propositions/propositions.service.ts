import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ThemeOnProposition } from '../themes-on-propositions/types';

@Injectable({
  providedIn: 'root',
})
export class PropositionsService {
  constructor(private readonly httpClient: HttpClient) {}
}
