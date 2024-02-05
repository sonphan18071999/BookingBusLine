import { createSelector } from "@ngrx/store";
import { TicketsState } from "../reducers/update-tickets.reducer";
import { AppState } from "../app-state";

export const selectTickets = (state: AppState) => state.tickets;

export const selectCurrentTicket = createSelector(
    selectTickets,
    (state: TicketsState) => state.tickets
);