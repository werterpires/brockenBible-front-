import { Component, ErrorHandler } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertsComponent } from './shared/components/alerts/alerts.component';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertsComponent],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'brokenBibleFront';
}
