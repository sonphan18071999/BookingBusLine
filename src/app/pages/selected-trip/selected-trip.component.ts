import { Component } from '@angular/core';
import { SeatMapComponent } from '../../components/seat-map/seat-map.component';
import { SelectedTripCardInfoComponent } from '../../components/selected-trip-card-info/selected-trip-card-info.component';

@Component({
  selector: 'app-selected-trip',
  standalone: true,
  imports: [SeatMapComponent, SelectedTripCardInfoComponent],
  templateUrl: './selected-trip.component.html',
  styleUrl: './selected-trip.component.scss'
})
export class SelectedTripComponent {

}
