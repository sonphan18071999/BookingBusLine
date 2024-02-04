import { BusTicket } from './bus-ticket.model';

export interface State {
  readonly tickets: Array<BusTicket>;
}