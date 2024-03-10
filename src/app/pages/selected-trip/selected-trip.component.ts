import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeatMapComponent } from '../../components/seat-map/seat-map.component';
import { SelectedTripCardInfoComponent } from '../../components/selected-trip-card-info/selected-trip-card-info.component';
import { PaymentFillInFormComponent } from '../../components/payment-fill-in-form/payment-fill-in-form.component';
import { AppState } from '../../store/app-state';
import { Store } from '@ngrx/store';
import { currentTripSelected } from '../../store/selectors/trip.selector';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-selected-trip',
  standalone: true,
  imports: [SeatMapComponent, SelectedTripCardInfoComponent, PaymentFillInFormComponent],
  templateUrl: './selected-trip.component.html',
  styleUrl: './selected-trip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedTripComponent implements OnInit {
  currentTrip: any;

  constructor(protected store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(currentTripSelected)
      .pipe(take(1))
      .subscribe(trip => {
        this.currentTrip = trip;
      });
  }
}
