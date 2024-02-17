import { Action, createReducer, on } from '@ngrx/store';
import * as TicketsPageActions from '../actions/tickets-booking.actions';
import { BusTicket } from '../../models/bus-ticket.model';
import { TripType } from '../../enums/trip-type';

export interface TicketsState {
    tickets: BusTicket
}

export const initialTicketsState: TicketsState = {
    tickets: 
        {
            id: '0',
            passengerName: 'passenger',
            departureCity: '',
            destinationCity: '',
            ticketPrice: '1',
            seatNumber: '1',
            tripType: TripType.ONE_WAY
        }
};

export const updateTicketsReducer = createReducer(
    initialTicketsState,
    on(TicketsPageActions.updateTicketsInformation, (state) => ({ ...state, tickets: state.tickets }))
);