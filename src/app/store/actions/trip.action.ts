import { createAction, props } from "@ngrx/store";
import { Trip } from "../../models/trip.model";

export const saveTripInformation = createAction(
  '[Trip information] Retrive',
  props<{ tripInfo: Trip }>()
);