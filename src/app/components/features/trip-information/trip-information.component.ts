import {CommonModule, DOCUMENT} from '@angular/common';
import {Component, Inject, OnDestroy, OnInit, signal, ViewEncapsulation, computed} from '@angular/core';
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
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-trip-information',
  standalone: true,
  imports: [CommonModule, MatCardModule, TripTimeDurationComponent, MatButtonModule, GetAvailableSeatPipe, GetMinSeatPricePipe, SeatMapComponent],
  templateUrl: './trip-information.component.html',
  styleUrl: './trip-information.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TripInformationComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  public busRoutes = signal<BusRoute[]>(busRoutesMock);
  public buses = signal<Bus[]>(busMock);
  public idSeatMapActive: string = '';

  // Use computed signal for trips to avoid unnecessary recalculations
  public trips = computed(() => {
    const routes = this.busRoutes();
    const buses = this.buses();
    
    // Create a map for O(1) bus lookup
    const busMap = new Map(buses.map(bus => [bus.id, bus]));
    
    return routes.map(route => {
      const bus = busMap.get(route.busId);
      if (!bus) return null;
      
      const {seats, id, ...busWithoutSeats} = bus;
      return {
        ...route,
        ...busWithoutSeats
      } as Trip;
    }).filter((trip): trip is Trip => trip !== null);
  });

  constructor(
    protected router: Router, 
    protected store: Store, 
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // No need to call buildTrips() anymore as it's handled by the computed signal
  }

  public openSeatMap(tripId: string): void {
    this.idSeatMapActive = tripId;
    this.scrollSeatMapIntoView(tripId);
  }

  public scrollSeatMapIntoView(id: string): void {
    requestAnimationFrame(() => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
