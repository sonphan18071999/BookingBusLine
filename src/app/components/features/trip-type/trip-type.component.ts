import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { TripType } from '../../../enums/trip-type';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { TripService } from '../../../services/trips.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './trip-type.component.html',
  styleUrl: './trip-type.component.scss'
})
export class TripTypeComponent implements OnInit, OnDestroy {
  tripType: TripType = TripType.ONE_WAY;
  private unsubscribe$ = new Subject<void>();

  constructor(protected store: Store<AppState>,
    protected tripService: TripService) { }
  
  ngOnInit(): void {
  }

  onTripTypeChange(event: any): void {
    this.tripType = event.value;
    this.tripService.updateTripType(event.value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
