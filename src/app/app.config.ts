import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
};
