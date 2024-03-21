import { createAction, props } from "@ngrx/store";
import { Trip } from "../../models/trip.model";
import { Seat } from "../../models/seat.model";

export const saveTripInformation = createAction(
  '[Trip information] Retrive',
  props<{ currentTrip: Trip }>()
);

export const saveSeatsCurrentTrip = createAction(
  '[Seat information] Save Seat',
  props<{ tripId: string, seats: { [floor: string]: Seat[] };
}>()
);
