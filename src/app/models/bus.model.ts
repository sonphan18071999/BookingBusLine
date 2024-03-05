import { BusType } from "../enums/bus-types";
import { Seat } from "./seat.model";

export interface Bus {
    id: string;
    seats: { [floor: string]: Seat[] };
    type: BusType;
    licensePlate: string;
}
