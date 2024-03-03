import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTimeDurationComponent } from './trip-time-duration/trip-time-duration.component';
import {MatButtonModule} from '@angular/material/button';
import { tripsMock } from '../../../shared/mocks/trips.mock';
import { BusTicket } from '../../../models/bus-ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-information',
  standalone: true,
  imports: [CommonModule ,MatCardModule, TripTimeDurationComponent, MatButtonModule],
  templateUrl: './trip-information.component.html',
  styleUrl: './trip-information.component.scss'
})
export class TripInformationComponent {
  trips = signal<BusTicket[]>(tripsMock);
  constructor(protected router: Router){}
  selectTrip(tripId: string = "mx4ux" ): void{
    this.router.navigate([`/selected-trip/${tripId}`])
  }
}
