import {BusTicket} from "../models/bus-ticket.model";
import {createReducer, on} from "@ngrx/store";
import * as TicketActions from './actions/tickets.actions';
import {TripType} from "../enums/trip-type";

export interface TicketState {
  ticket: BusTicket;
  error: any;
}

export const initialState: TicketState = {
  ticket: {
    trip: {
      tripType: TripType.ONE_WAY
    }
  } as BusTicket,
  error: null
};

export const ticketReducer = createReducer(
  initialState,
  on(TicketActions.updateTicket, (state, {ticket}) => ({
    ...state,
    state: ticket
  })))
