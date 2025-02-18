import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TicketState} from "../reducers/bus-ticket.reducer";

export const appStateSelectors = createFeatureSelector<TicketState>('busTicket');

export const busTicketSelector = createSelector(
  appStateSelectors,
  (state) => state.ticket
);
