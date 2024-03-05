import { Pipe, PipeTransform } from '@angular/core';
import { BusRoute } from '../../models/routes.model';

@Pipe({
  name: 'calculateRouteDuration',
  standalone: true
})
export class CalculateRouteDurationPipe implements PipeTransform {

  transform(busRoute: BusRoute, ...args: unknown[]): string {
    return (+busRoute.arrivalTime - +busRoute.departureTime).toString();
  }
}
