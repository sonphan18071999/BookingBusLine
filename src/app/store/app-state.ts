import { Trip } from "../models/trip.model";
import { TicketsState } from "./reducers/update-tickets.reducer";

export interface AppState {
    tickets: TicketsState;
    tripSelected: Trip
}