import {Injectable} from '@angular/core';
import {AppState} from '../store/app-state';
import {Store} from '@ngrx/store';
import {BusTicket} from "../models/bus-ticket.model";
import {updateTicket} from "../store/actions/tickets.actions";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  // public currentTicket$: Observable<BusTicket>;

  constructor(public store: Store<AppState>) {
  }

  public updateTicketInformation(newTicket: BusTicket): void {
    this.store.dispatch(updateTicket({ticket: newTicket}));
  }
}
