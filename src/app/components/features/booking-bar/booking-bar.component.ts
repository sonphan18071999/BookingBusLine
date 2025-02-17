import {Component, inject, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {TripTypeComponent} from '../trip-type/trip-type.component';
import {OriginComponent} from '../origin/origin.component';
import {DestinationComponent} from '../destination/destination.component';
import {DepartureDateComponent} from '../departure-date/departure-date.component';
import {ReturnDateComponent} from '../return-date/return-date.component';
import {TicketCountComponent} from '../ticket-count/ticket-count.component';
import {TripType} from '../../../enums/trip-type';
import {Subject} from 'rxjs';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BusTicketBuilderService} from "../../../services/bus-ticket.service";

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TripTypeComponent,
    OriginComponent,
    DestinationComponent,
    DepartureDateComponent,
    ReturnDateComponent,
    TicketCountComponent,
    MatButtonModule,
    NgOptimizedImage,
  ],
  templateUrl: './booking-bar.component.html',
  styleUrl: './booking-bar.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0, // Start with opacity 0 (invisible)
        })
      ),
      transition('void <=> *', animate('500ms ease-in-out')), // Fade in and out
    ]),
  ],

})
export class BookingBarComponent implements OnInit {
  public unsubscribe$: Subject<boolean> = new Subject();
  public isRoundTrip: boolean = false;
  private busTicketBuilderService = inject(BusTicketBuilderService);

  public constructor(
    protected router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  public goToSearchPage(): void {
    this.router.navigate(['search-result']);
  }

  public onButtonClick() {
  }

  public handleOriginChange(val: string): void {
    this.busTicketBuilderService.setOrigin(val);
  }

  public handleTripTypeChange(type: TripType): void {
    this.busTicketBuilderService.setTripType(type);
    // this.tripType = this.busTicketBuilderService.tripType()
    console.log("tupe", type)
    this.isRoundTrip = type === TripType.ROUND_TRIP;
  }

  public handleDestinationChange(val: string): void {
    this.busTicketBuilderService.setDestination(val);
  }

  public handleDepartureDateChange(date: string): void {
    this.busTicketBuilderService.setDepartureDate(date)
  }
}
