import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from "../reducers/bus-ticket.reducer";

export const appStateSelectors = createFeatureSelector<AppState>('busTicket');

export const busTicketSelector = createSelector(
  appStateSelectors,
  (state) => state.ticket
);
