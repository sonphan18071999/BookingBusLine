import { TripType } from "../enums/trip-type";

export interface BusTicket {
    id: string;
    passengerName: string;
    departureCity?: string;
    destinationCity?: string;
    departureTime?: string;
    arrivalTime?: string;
    ticketPrice?: string;
    seatNumber?: string;
    tripType: TripType; 
}
