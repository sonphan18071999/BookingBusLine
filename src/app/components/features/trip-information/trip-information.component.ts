import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTimeDurationComponent } from './trip-time-duration/trip-time-duration.component';
import { tripsMock } from '../../../shared/mocks/trips.mock';
import { BusTicket } from '../../../models/bus-ticket.model';

@Component({
  selector: 'app-trip-information',
  standalone: true,
  imports: [CommonModule ,MatCardModule, TripTimeDurationComponent],
  templateUrl: './trip-information.component.html',
  styleUrl: './trip-information.component.scss'
})
export class TripInformationComponent {
  trips = signal<BusTicket[]>(tripsMock);

}
