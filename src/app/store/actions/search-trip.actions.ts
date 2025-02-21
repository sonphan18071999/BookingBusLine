import {createAction, props} from '@ngrx/store';
import {SearchTrip} from "../../models/bus-ticket.model";

export const updateSearchTrip = createAction(
  '[Search Trip] Update',
  props<{ ticket: SearchTrip }>()
);
