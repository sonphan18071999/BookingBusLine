import { Component, Input, signal } from '@angular/core';
import { ConvertUnixToDateGMTPipe } from '../../../../cores/pipes/convert-unix-to-date-gmt.pipe';

@Component({
  selector: 'app-trip-time-duration',
  standalone: true,
  imports: [ConvertUnixToDateGMTPipe],
  templateUrl: './trip-time-duration.component.html',
  styleUrl: './trip-time-duration.component.scss'
})
export class TripTimeDurationComponent {
  @Input() arrivalTime?  = ''
  @Input() departureTime = ''
}
