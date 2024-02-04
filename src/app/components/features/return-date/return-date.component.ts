import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { TripType } from '../../../enums/trip-type';
import { selectCurrentTickets } from '../../../store/selectors/tickets-booking.selector';

@Component({
  selector: 'app-return-date',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './return-date.component.html',
  styleUrl: './return-date.component.scss'
})
export class ReturnDateComponent implements OnInit {
  currentTickets$ = this.store.select(selectCurrentTickets);
  isOneWayTrip: TripType = TripType.ONE_WAY;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.currentTickets$.subscribe(tickets => {
      this.isOneWayTrip = tickets[0].tripType;
      console.log('is oneway trip',this.isOneWayTrip)
    })
  }
}
