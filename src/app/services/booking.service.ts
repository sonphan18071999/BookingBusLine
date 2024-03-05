import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusTicket } from '../models/bus-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  tickets: Observable<BusTicket[]> = of([]);
  // selectedTrips = 
  constructor() { }

}
