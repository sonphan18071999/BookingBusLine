import { Pipe, PipeTransform } from '@angular/core';
import { Seat } from '../../models/seat.model';

@Pipe({
  name: 'getAvailableSeat',
  standalone: true
})
export class GetAvailableSeatPipe implements PipeTransform {

  transform(seats: { [floor: string]: Seat[]; }, ...args: unknown[]): unknown {
    let count = 0
    Object.values(seats).flat().forEach((seat) => {
      if (!seat.isOccupied) {
        count++;
      }
    });
    return count;
  }

}
