import { Component } from '@angular/core';
import { SeatMapComponent } from '../../components/seat-map/seat-map.component';
import { SelectedTripCardInfoComponent } from '../../components/selected-trip-card-info/selected-trip-card-info.component';
import { PaymentFillInFormComponent } from '../../components/payment-fill-in-form/payment-fill-in-form.component';

@Component({
  selector: 'app-selected-trip',
  standalone: true,
  imports: [SeatMapComponent, SelectedTripCardInfoComponent, PaymentFillInFormComponent],
  templateUrl: './selected-trip.component.html',
  styleUrl: './selected-trip.component.scss'
})
export class SelectedTripComponent {

}
