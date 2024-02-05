import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTypeComponent } from '../trip-type/trip-type.component';
import { OriginComponent } from '../origin/origin.component';
import { DestinationComponent } from '../destination/destination.component';
import { DepartureDateComponent } from '../departure-date/departure-date.component';
import { ReturnDateComponent } from '../return-date/return-date.component';
import { TicketCountComponent } from '../ticket-count/ticket-count.component';
import { TripType } from '../../../enums/trip-type';
import { Subject, takeUntil } from 'rxjs';
import { TripService } from '../../../services/trips.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [CommonModule, MatCardModule, TripTypeComponent, OriginComponent, DestinationComponent, DepartureDateComponent, ReturnDateComponent, TicketCountComponent],
  templateUrl: './booking-bar.component.html',
  styleUrl: './booking-bar.component.scss'
})
export class BookingBarComponent implements OnInit{

  unsubcribe$: Subject<boolean> = new Subject()
  tripType: TripType = TripType.ONE_WAY; 

  constructor(protected tripService: TripService){}

  ngOnInit(): void {
    this.tripService.currentTrip.pipe(takeUntil(this.unsubcribe$)).subscribe((tripType: TripType)=>{
      this.tripType = tripType;
    })

  }

  ngOnDestroy(): void {
    this.unsubcribe$.next(true);
    this.unsubcribe$.complete();
  }

  isOneWay():boolean{
    return this.tripType === TripType.ONE_WAY ? true: false;
  }
  
}
