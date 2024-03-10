import { createReducer, on } from "@ngrx/store";
import { BusType } from "../../enums/bus-types";
import { Trip } from "../../models/trip.model";
import * as TripActions from '../actions/trip.action';


export const initialTripState: Trip = {
    id: "",
    busId: "",
    departureTime: "",
    arrivalTime: "",
    departureLocation: "",
    arrivalDestination: "",
    seats: {},
    type: BusType.NORMAL,
    licensePlate: ""
};

export const tripReducer = createReducer(
    initialTripState,
    on(TripActions.saveTripInformation, (state, { currentTrip }) => {
        return { ...state, ...currentTrip }
    })
);