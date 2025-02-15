import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {TripType} from '../../../enums/trip-type';
import {AppState} from '../../../store/app-state';
import {Store} from '@ngrx/store';
import {TripService} from '../../../services/trips.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './trip-type.component.html',
  styleUrl: './trip-type.component.scss'
})
export class TripTypeComponent implements OnInit, OnDestroy {
  public tripType: TripType = TripType.ONE_WAY;
  private unsubscribe$ = new Subject<void>();

  constructor(protected store: Store<AppState>,
              protected tripService: TripService) {
  }

  ngOnInit(): void {
  }

  public onTripTypeChange(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value as TripType;
    // const currentTicket$ = this.store.select(selectTicket);
    //
    // currentTicket$.subscribe(busTicket => {
    //   if (!busTicket) return;
    //
    //   const newTicket = {
    //     ...busTicket,
    //     trip: {
    //       ...busTicket.trip,
    //       tripType: selectedValue,
    //     }
    //   };
    //   this.store.dispatch(updateTicket({ticket: newTicket}));
    // });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
