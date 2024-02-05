import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { TripType } from '../../../enums/trip-type';
import { Subject, takeUntil } from 'rxjs';
import { TripService } from '../../../services/trips.service';

@Component({
  selector: 'app-return-date',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './return-date.component.html',
  styleUrl: './return-date.component.scss'
})
export class ReturnDateComponent implements OnInit, OnDestroy {
  unsubcribe$: Subject<boolean> = new Subject()
  tripType: TripType = TripType.ONE_WAY; 

  constructor(protected tripService: TripService) { }

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
