import { Seat } from "./seat.model";

export interface BusRoute {
    id: string;
    busId: string;
    departureTime: string;
    arrivalTime: string;
    departureLocation: string;
    arrivalDestination: string;
    seats: { [floor: string]: Seat[] }
}