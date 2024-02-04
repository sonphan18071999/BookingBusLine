import { createSelector } from "@ngrx/store";
import { TicketsState } from "../reducers/update-tickets.reducer";
import { AppState } from "../app-state";

export const selectTripType = (state: AppState) => state.tickets;

export const selectCurrentTripType = createSelector(
    selectTripType,
    (state: TicketsState) => state.tickets[0].tripType
);