import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTypeComponent } from '../trip-type/trip-type.component';
import { OriginComponent } from '../origin/origin.component';
import { DestinationComponent } from '../destination/destination.component';
import { DepartureDateComponent } from '../departure-date/departure-date.component';
import { ReturnDateComponent } from '../return-date/return-date.component';
import { TicketCountComponent } from '../ticket-count/ticket-count.component';
import { Store } from '@ngrx/store';
import { selectCurrentTickets } from '../../../store/selectors/tickets-booking.selector';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [MatCardModule, TripTypeComponent, OriginComponent, DestinationComponent, DepartureDateComponent, ReturnDateComponent, TicketCountComponent],
  templateUrl: './booking-bar.component.html',
  styleUrl: './booking-bar.component.scss'
})
export class BookingBarComponent implements OnInit{

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
  }

  
}
