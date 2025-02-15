import {createAction, props} from "@ngrx/store";
import {BusTicket} from "../../models/bus-ticket.model";

export const updateTicket = createAction('[Tickets] Update ticket', props<{ ticket: BusTicket }>());
