import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TripTimeDurationComponent } from '../trip-information/trip-time-duration/trip-time-duration.component';

@Component({
  selector: 'app-trips-selcted-card',
  standalone: true,
  imports: [MatCardModule, TripTimeDurationComponent],
  templateUrl: './trips-selcted-card.component.html',
  styleUrl: './trips-selcted-card.component.scss'
})
export class TripsSelctedCardComponent {

}
