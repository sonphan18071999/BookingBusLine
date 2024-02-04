import { Injectable } from '@angular/core';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { TripType } from '../enums/trip-type';
import { selectCurrentTickets } from '../store/selectors/tickets-booking.selector';
import { selectCurrentTripType } from '../store/selectors/trip-type.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(protected store: Store<AppState>) { }
    
  getTripType(): Observable<TripType>{
      return this.store.select(selectCurrentTripType);
  }
  
}
