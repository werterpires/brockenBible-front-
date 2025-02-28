import { Component, ErrorHandler } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertsComponent } from './shared/components/alerts/alerts.component';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { BaseComponent } from './shared/components/base/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertsComponent, BaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'brokenBibleFront';
}
