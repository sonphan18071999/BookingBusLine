import { Component } from '@angular/core';
import { SeatMapComponent } from '../seat-map/seat-map.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-selected-trip-card-info',
  standalone: true,
  imports: [SeatMapComponent, MatCardModule],
  templateUrl: './selected-trip-card-info.component.html',
  styleUrl: './selected-trip-card-info.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class SelectedTripCardInfoComponent {

}
