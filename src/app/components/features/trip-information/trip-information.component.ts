import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, effect, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTimeDurationComponent } from './trip-time-duration/trip-time-duration.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { BusRoute } from '../../../models/routes.model';
import { busRoutesMock } from '../../../shared/mocks/bus-routes.mock';
import { GetAvailableSeatPipe } from '../../../cores/pipes/get-available-seat.pipe';
import { GetMinSeatPricePipe } from '../../../cores/pipes/get-min-seat-price.pipe';
import { busMock } from '../../../shared/mocks/bus-mock.data';
import { Bus } from '../../../models/bus.model';
import { Trip } from '../../../models/trip.model';
import { Store } from '@ngrx/store';
import { saveTripInformation } from '../../../store/actions/trip.action';

@Component({
  selector: 'app-trip-information',
  standalone: true,
  imports: [CommonModule, MatCardModule, TripTimeDurationComponent, MatButtonModule, GetAvailableSeatPipe, GetMinSeatPricePipe],
  templateUrl: './trip-information.component.html',
  styleUrl: './trip-information.component.scss'
})
export class TripInformationComponent implements OnInit {
  busRoutes = signal<BusRoute[]>(busRoutesMock);
  buses = signal<Bus[]>(busMock);
  trips = signal<Trip[]>([]);

  constructor(protected router: Router, protected store: Store) { }

  ngOnInit(): void {
    this.buildTrips();
  }

  selectTrip(tripId: string = "mx4ux"): void {
    let selectedTrip = this.trips().filter((trip) => trip.id === tripId)[0];
    this.store.dispatch(saveTripInformation({ currentTrip: selectedTrip }));
    this.router.navigate([`/selected-trip/${tripId}`])
  }

  buildTrips(): void {
    let trips = [] as Trip[];

    this.busRoutes().forEach((route, ind) => {
      let tripInformation = {} as Trip;
      let busFound = this.buses().filter(bus => bus.id === route.busId)[0]

      if (busFound) {
        const { seats, id, ...busWithoutSeats } = busFound;
        let removedSeatsDefault = busWithoutSeats;

        tripInformation = {
          ...route, ...removedSeatsDefault
        };
        trips[ind] = tripInformation
      }
    })

    this.trips.set(trips);
  }
}
