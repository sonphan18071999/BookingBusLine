import { Component, Input, signal } from '@angular/core';
import { ConvertUnixToDateGMTPipe } from '../../../../cores/pipes/convert-unix-to-date-gmt.pipe';
import { BusRoute } from '../../../../models/routes.model';
import { CalculateRouteDurationPipe } from '../../../../cores/pipes/calculate-route-duration.pipe';

@Component({
  selector: 'app-trip-time-duration',
  standalone: true,
  imports: [ConvertUnixToDateGMTPipe, CalculateRouteDurationPipe],
  templateUrl: './trip-time-duration.component.html',
  styleUrl: './trip-time-duration.component.scss'
})
export class TripTimeDurationComponent {
  @Input() busRoute: BusRoute = {} as BusRoute;
}
