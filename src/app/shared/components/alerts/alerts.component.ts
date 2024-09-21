import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Alert } from './types';
import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
})
export class AlertsComponent {
  alert: Alert = {
    type: 'info',
    title: 'O arroz está quente',
    description: [
      'Uma informação muito importante',
      'Outra informação muito importante',
    ],
    show: false,
  };

  constructor(private readonly alertsService: AlertsService) {
    this.alertsService.show$.subscribe((alert) => {
      this.alert = alert;
    });
  }

  hide() {
    this.alertsService.hide();
  }
}
