import {createReducer, on} from '@ngrx/store';
import {BusTicket} from "../../models/bus-ticket.model";
import {TripType} from "../../enums/trip-type";
import {updateBusTicket} from "../actions/bus-ticket.actions";

export interface AppState {
  ticket: BusTicket;
}

export const initialState: AppState = {
  ticket: {
    trip: {
      tripType: TripType.ONE_WAY
    }
  } as BusTicket,
};

export const busTicketReducer = createReducer(
  initialState,
  on(updateBusTicket, (state, {ticket}) => ({
    ...state,
    ticket: ticket
  })),
);
