import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { AlertsService } from '../components/alerts/alerts.service';
import { Alert } from '../components/alerts/types';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService extends ErrorHandler {
  alert: Alert = {
    type: 'error',
    title: 'Ocorreu um erro',
    description: ['Erro inesperado'],
    show: true,
  };

  constructor(private readonly alertsService: AlertsService) {
    super();
  }

  showError(title: string, message: string[]): void {
    this.alert = { ...this.alert, title, description: message };
    this.alertsService.show(this.alert);
  }

  override handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        this.showError('Erro de conexão', [
          'Não foi poss vel conectar ao servidor',
        ]);
        return;
      }

      if (error.error.error.message && error.error.error.message[0] === '#') {
        this.showError('Ocorreu um erro', [
          error.error.error.message.split('#')[1],
        ]);
        return;
      } else {
        console.error('Erro de Joaquim:', error);

        this.showError('Ocorreu um erro', ['ocorreu um erro inesperado']);
      }
    } else {
      console.error('Erro de Joaquim:', error);
      this.showError('Ocorreu um erro', ['ocorreu um erro inesperado']);
    }
  }
}
