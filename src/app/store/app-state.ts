import {Trip} from "../models/trip.model";
import {BusTicket} from "../models/bus-ticket.model";

export interface AppState {
  ticket: BusTicket;
  tripSelected?: Trip
}
