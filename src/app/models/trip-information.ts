import {TripType} from "../enums/trip-type";

export interface TripInformation {
  id: string;
  departureCity: string;
  destinationCity: string;
  departureTime: string;
  arrivalTime: string;
  ticketPrice: number;
  tripType: TripType;
}
