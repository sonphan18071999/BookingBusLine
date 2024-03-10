import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore, provideState } from '@ngrx/store';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loginReducer } from './store/reducers/login.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { updateTicketsReducer } from './store/reducers/update-tickets.reducer';
import { tripReducer } from './store/reducers/trip.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync('noop'),
  provideStore(),
  provideState({ name: 'user', reducer: loginReducer }),
  provideState({ name: 'tickets', reducer: updateTicketsReducer }),
  provideState({ name: 'tripSelected', reducer: tripReducer }),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
