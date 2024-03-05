import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTimeDurationComponent } from './trip-time-duration/trip-time-duration.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { BusRoute } from '../../../models/routes.model';
import { busRoutesMock } from '../../../shared/mocks/bus-routes.mock';
import { GetAvailableSeatPipe } from '../../../cores/pipes/get-available-seat.pipe';
import { GetMinSeatPricePipe } from '../../../cores/pipes/get-min-seat-price.pipe';

@Component({
  selector: 'app-trip-information',
  standalone: true,
  imports: [CommonModule, MatCardModule, TripTimeDurationComponent, MatButtonModule, GetAvailableSeatPipe, GetMinSeatPricePipe],
  templateUrl: './trip-information.component.html',
  styleUrl: './trip-information.component.scss'
})
export class TripInformationComponent {
  trips = signal<BusRoute[]>(busRoutesMock);
  constructor(protected router: Router) { }
  selectTrip(tripId: string = "mx4ux"): void {
    this.router.navigate([`/selected-trip/${tripId}`])
  }
}
