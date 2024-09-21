import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from './types';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  showSubsject: Subject<Alert> = new Subject<Alert>();
  show$ = this.showSubsject.asObservable();

  initialAlert: Alert = {
    type: 'info',
    title: 'O arroz está quente',
    description: [
      'Uma informação muito importante',
      'Outra informação muito importante',
    ],
    show: false,
  };

  counter: number = 0;

  show(alert: Alert) {
    this.showSubsject.next(alert);
  }

  hide() {
    this.showSubsject.next(this.initialAlert);
  }
}
