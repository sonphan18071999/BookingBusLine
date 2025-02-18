import {createReducer, on} from '@ngrx/store';
import {BusTicket} from "../../models/bus-ticket.model";
import {TripType} from "../../enums/trip-type";
import {updateBusTicket} from "../actions/bus-ticket.actions";

export interface TicketState {
  ticket: BusTicket;
}

export const initialTicketState: TicketState = {
  ticket: {
    tripType: TripType.ONE_WAY
  } as BusTicket,
};

export const busTicketReducer = createReducer(
  initialTicketState,
  on(updateBusTicket, (state, {ticket}) => ({
    ...state,
    ticket: ticket
  })),
);
