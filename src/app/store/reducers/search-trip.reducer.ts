import {createReducer, on} from '@ngrx/store';
import {SearchTrip} from "../../models/bus-ticket.model";
import {TripType} from "../../enums/trip-type";
import {updateSearchTrip} from "../actions/search-trip.actions";

export interface SearchTripState {
  ticket: SearchTrip;
}

export const initialSearchTripState: SearchTripState = {
  ticket: {
    tripType: TripType.ONE_WAY
  } as SearchTrip,
};

export const searchTripReducer = createReducer(
  initialSearchTripState,
  on(updateSearchTrip, (state, {ticket}) => ({
    ...state,
    ticket: ticket
  })),
);
