import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  minMax(min: number, max: number) {
    return (control) => {
      if (control.value > max || control.value < min) {
        return {
          minMax: true
        };
      }
    };
  }
}
