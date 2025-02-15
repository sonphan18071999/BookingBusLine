import {PassengerDetails} from "./passenger-details";
import {TripInformation} from "./trip-information";

export interface BusTicket {
  trip: TripInformation;
  passengers: PassengerDetails[];
}
