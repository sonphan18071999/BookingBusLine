import {CommonModule, DOCUMENT} from '@angular/common';
import {Component, Inject, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {TripTimeDurationComponent} from './trip-time-duration/trip-time-duration.component';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {BusRoute} from '../../../models/routes.model';
import {busRoutesMock} from '../../../shared/mocks/bus-routes.mock';
import {GetAvailableSeatPipe} from '../../../cores/pipes/get-available-seat.pipe';
import {GetMinSeatPricePipe} from '../../../cores/pipes/get-min-seat-price.pipe';
import {busMock} from '../../../shared/mocks/bus-mock.data';
import {Bus} from '../../../models/bus.model';
import {Trip} from '../../../models/trip.model';
import {Store} from '@ngrx/store';
import {SeatMapComponent} from "../../seat-map/seat-map.component";

@Component({
  selector: 'app-trip-information',
  standalone: true,
  imports: [CommonModule, MatCardModule, TripTimeDurationComponent, MatButtonModule, GetAvailableSeatPipe, GetMinSeatPricePipe, SeatMapComponent],
  templateUrl: './trip-information.component.html',
  styleUrl: './trip-information.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TripInformationComponent implements OnInit {
  public busRoutes = signal<BusRoute[]>(busRoutesMock);
  public buses = signal<Bus[]>(busMock);
  public trips = signal<Trip[]>([]);
  public idSeatMapActive: string = ''

  constructor(protected router: Router, protected store: Store, @Inject(DOCUMENT) private document: Document) {
  }


  ngOnInit(): void {
    this.buildTrips();
  }

  buildTrips(): void {
    let trips = [] as Trip[];

    this.busRoutes().forEach((route: BusRoute, ind: number) => {
      let tripInformation = {} as Trip;
      let busFound = this.buses().filter(bus => bus.id === route.busId)[0]

      if (busFound) {
        const {seats, id, ...busWithoutSeats} = busFound;
        tripInformation = {
          ...route, ...(busWithoutSeats)
        };
        trips[ind] = tripInformation
      }
    })

    this.trips.set(trips);
  }

  public openSeatMap(tripId: string): void {
    this.idSeatMapActive = tripId;
    this.scrollSeatMapIntoView(tripId);
  }

  public scrollSeatMapIntoView(id: string): void {
    setTimeout(() => {
      document.querySelector(`#${id}`)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 100)
  }


}
