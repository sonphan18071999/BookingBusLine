import { Injectable } from '@angular/core';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { TripType } from '../enums/trip-type';
import { selectCurrentTicket } from '../store/selectors/tickets-booking.selector';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BusTicket } from '../models/bus-ticket.model';
import { updateTicketsInformation } from '../store/actions/tickets-booking.actions';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  currentTrip = new BehaviorSubject<TripType>(TripType.ONE_WAY);

  currentTicket$: Observable<BusTicket> = new Subject<BusTicket>();

  constructor(protected store: Store<AppState>) {
    this.currentTicket$ = this.store.select(selectCurrentTicket);
  }

  updateTripType(tripType: TripType): void{
    this.currentTicket$.subscribe(data=>{
      let newTicket = { ...data };
      newTicket.tripType = tripType;
      this.store.dispatch(updateTicketsInformation(newTicket));
      this.currentTrip.next(newTicket.tripType);
    })
  }
}
