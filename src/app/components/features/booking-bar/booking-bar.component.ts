import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTypeComponent } from '../trip-type/trip-type.component';
import { OriginComponent } from '../origin/origin.component';
import { DestinationComponent } from '../destination/destination.component';
import { DepartureDateComponent } from '../departure-date/departure-date.component';
import { ReturnDateComponent } from '../return-date/return-date.component';
import { TicketCountComponent } from '../ticket-count/ticket-count.component';
import { Store } from '@ngrx/store';
import { selectTicketsCount } from '../../../store/selectors/tickets-booking.selector';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [MatCardModule, TripTypeComponent, OriginComponent, DestinationComponent, DepartureDateComponent, ReturnDateComponent, TicketCountComponent],
  templateUrl: './booking-bar.component.html',
  styleUrl: './booking-bar.component.scss'
})
export class BookingBarComponent implements OnInit{
  tickets$ = this.store.select(selectTicketsCount);

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.tickets$.subscribe(data=>{
      console.log(data)
    })
  }

  
}
