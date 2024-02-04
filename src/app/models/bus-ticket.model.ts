import { TripType } from "../enums/trip-type";

export interface BusTicket {
    id: string;
    passengerName: string;
    departureCity?: string;
    destinationCity?: string;
    departureTime?: Date;
    arrivalTime?: Date;
    ticketPrice?: number;
    seatNumber?: string;
    tripType: TripType;
}
