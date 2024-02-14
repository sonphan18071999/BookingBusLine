import { Component, signal } from '@angular/core';
import { ConvertUnixToDateGMTPipe } from '../../../../cores/pipes/convert-unix-to-date-gmt.pipe';

@Component({
  selector: 'app-trip-time-duration',
  standalone: true,
  imports: [ConvertUnixToDateGMTPipe],
  templateUrl: './trip-time-duration.component.html',
  styleUrl: './trip-time-duration.component.scss'
})
export class TripTimeDurationComponent {
  departureTime = signal<EpochTimeStamp>(1707914168);
  arrivaleTime = signal<EpochTimeStamp>(1707889022);  
  
}
