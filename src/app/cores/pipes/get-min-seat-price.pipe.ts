import { Pipe, PipeTransform } from '@angular/core';
import { Seat } from '../../models/seat.model';

@Pipe({
  name: 'getMinSeatPrice',
  standalone: true
})
export class GetMinSeatPricePipe implements PipeTransform {

  transform(seats: { [floor: string]: Seat[]; }, ...args: unknown[]): unknown {
    let min = 100;
    Object.values(seats).flat().forEach(seat=>{
      if(seat?.price && +seat?.price < min){
        min = +seat?.price;
      }
    })
    return min;
  }
}
