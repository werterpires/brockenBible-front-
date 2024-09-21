import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  showSubsject: Subject<boolean> = new Subject<boolean>();
  show$ = this.showSubsject.asObservable();

  show() {
    this.showSubsject.next(true);

    setTimeout(() => {
      this.hide();
    }, 10000);
  }

  hide() {
    this.showSubsject.next(false);
  }
}
