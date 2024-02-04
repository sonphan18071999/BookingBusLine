import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { TripType } from '../../../enums/trip-type';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { updateTicketsInformation } from '../../../store/actions/tickets-booking.actions';
import { BusTicket } from '../../../models/bus-ticket.model';
import { TripsService } from '../../../services/trips.service';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './trip-type.component.html',
  styleUrl: './trip-type.component.scss'
})
export class TripTypeComponent {
  isOneWayTrip: TripType = TripType.ONE_WAY;
  constructor(protected store: Store<AppState>,
    protected tripsService: TripsService) { }

  onTripTypeChange(event: any): void {
    //missing action to update TripType into tickets
    
    this.tripsService.getTripType().subscribe(data => {
      console.log("current trip type", data)
    });
  }
}
