import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SearchTripState} from "../reducers/search-trip.reducer";

export const appStateSelectors = createFeatureSelector<SearchTripState>('searchTrip');

export const busTicketSelector = createSelector(
  appStateSelectors,
  (state) => state.ticket
);
