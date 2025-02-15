import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {TripTypeComponent} from '../trip-type/trip-type.component';
import {OriginComponent} from '../origin/origin.component';
import {DestinationComponent} from '../destination/destination.component';
import {DepartureDateComponent} from '../departure-date/departure-date.component';
import {ReturnDateComponent} from '../return-date/return-date.component';
import {TicketCountComponent} from '../ticket-count/ticket-count.component';
import {TripType} from '../../../enums/trip-type';
import {Subject} from 'rxjs';
import {TripService} from '../../../services/trips.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app-state";

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
  encapsulation: ViewEncapsulation.None,
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
  public tripType: TripType = TripType.ONE_WAY;
  // public busTicket = selectCurrentTicket();
  protected readonly TripType = TripType;

  public constructor(
    protected tripService: TripService,
    protected router: Router,
    public store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    // this.store.select(selectTicket)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((ticket: BusTicket) => {
    //     this.tripType = ticket.trip?.tripType;
    //     console.log("trip type change", ticket)
    //   });
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
}
