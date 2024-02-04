import { createAction, props } from "@ngrx/store";
import { BusTicket } from "../../models/bus-ticket.model";

export const updateTicketsInformation = createAction(
    '[Booking Page] Update Ticket',
    props<BusTicket>()
  );