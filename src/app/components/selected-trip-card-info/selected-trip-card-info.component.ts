import { Component } from '@angular/core';
import { SeatMapComponent } from '../seat-map/seat-map.component';

@Component({
  selector: 'app-selected-trip-card-info',
  standalone: true,
  imports: [SeatMapComponent],
  templateUrl: './selected-trip-card-info.component.html',
  styleUrl: './selected-trip-card-info.component.scss'
})
export class SelectedTripCardInfoComponent {

}
