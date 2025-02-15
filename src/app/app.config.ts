import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideStore} from '@ngrx/store';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {customInterceptor} from './interceptors/custom.interceptor';
import {errorHandlingInterceptor} from './interceptors/error-handling-interceptor.interceptor';
import {ticketReducer} from "./store/ticket.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    provideStore({ticket: ticketReducer}),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideHttpClient(withInterceptors([customInterceptor, errorHandlingInterceptor])),
  ],
};
