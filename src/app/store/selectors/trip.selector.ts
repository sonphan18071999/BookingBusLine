import { createSelector } from "@ngrx/store";
import { AppState } from "../app-state";
import { Trip } from "../../models/trip.model";

export const tripSelected = (state: AppState) => state.tripSelected;

export const currentTripSelected = createSelector(
    tripSelected,
    (state: Trip) => state
);