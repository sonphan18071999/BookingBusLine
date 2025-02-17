import {createAction, props} from '@ngrx/store';
import {BusTicket} from "../../models/bus-ticket.model";

export const updateBusTicket = createAction(
  '[Bus Ticket] Update',
  props<{ ticket: BusTicket }>()
);
