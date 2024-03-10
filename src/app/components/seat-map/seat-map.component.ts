import { Component, ElementRef, Inject, Input, OnInit, Renderer2, Signal, computed, signal } from '@angular/core';
import { Bus } from '../../models/bus.model';
import { busMock } from '../../shared/mocks/bus-mock.data';
import { BusType } from '../../enums/bus-types';
import { Seat } from '../../models/seat.model';
import { MatCardModule } from '@angular/material/card';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-seat-map',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './seat-map.component.html',
  styleUrl: './seat-map.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class SeatMapComponent implements OnInit {
  @Input() trip: Trip = {} as Trip;
  busInformation = signal<Bus>(busMock[0]);

  seatMap = computed(() => {
    let seatMapDisplay = ``;
    if(this.trip){
      if (this.trip.type === BusType.NORMAL) {
        this.createNormalMapSeat('floorBelow');
      } else if (this.trip.type === BusType.DOUBLE_DECKER) {
        this.createNormalMapSeat('floorBelow');
        this.createNormalMapSeat('floorUpper');
      } else {
        this.createNormalMapSeat('floorBelow');
      }
    }else{
      return ''
    }
    
    return seatMapDisplay;
  })

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    // console.log(console.log("[Seat map]", this.trip));
    const { type, seats, ...other } = this.trip;
    console.log('seat',seats, 'type', type);

    // this.busInformation.set(this.)

    if (type === BusType.NORMAL) {
      this.busInformation().seats['floorBelow'] = this.rebuildDisplaySeatMap('floorBelow');
    } else if (type === BusType.DOUBLE_DECKER) {
      this.busInformation().seats['floorBelow'] = this.rebuildDisplaySeatMap('floorBelow');
      this.busInformation().seats['floorUpper'] = this.rebuildDisplaySeatMap('floorUpper');
    } else {

    }
  }

  handleButtonClick(buttonIndex: string) {
    console.log(`Button ${buttonIndex} clicked`);
    // Your button click logic here
  }

  createNormalMapSeat(floor: string): void {
    let seats = this.trip.seats;
    const seatMapElement = this.elementRef.nativeElement.querySelector('#seat-map');

    const seatMapDiv = this.renderer.createElement("div");

    const title = this.setTitleForSeatMap(floor);
    seatMapDiv.appendChild(title);

    for (let i = 0; i < seats[floor].length / 3; i++) {
      let tr = this.renderer.createElement('tr');
      tr.className = "seat__map-row"
      let count = 0;
      for (let j = i * 3; j < (i + 1) * 3 && j < seats[floor].length; j++) {
        if (count === 3) {
          break;
        }

        let td = this.renderer.createElement('td');
        let button = this.createDynamicButton(seats[floor][j]);

        if (j === 1) {
          tr.appendChild(this.emptyDiv());
          count++;

        }

        td.appendChild(button);
        tr.appendChild(td);
        count++;
      }

      seatMapDiv?.appendChild(tr);
    }
    seatMapElement?.appendChild(seatMapDiv);

  }


  setTitleForSeatMap(floor: string): ElementRef {
    let seatMapTitle = this.renderer.createElement('h5');
    // const isOneFloor = Object.keys(this.busInformation().seats).length >1;
    if (floor === 'floorBelow') {
      seatMapTitle.innerText = 'Floor Below'
    } else {
      seatMapTitle.innerText = 'Floor Upper'
    }
    return seatMapTitle;
  }

  createUpperMapSeat(): void {

  }

  emptyDiv(): ElementRef {
    let tdSpace = this.renderer.createElement('td');
    let div = this.renderer.createElement("div");
    div.className = "dynamic-space"
    tdSpace.appendChild(div);
    return tdSpace;
  }

  createDynamicButton(seat: Seat): ElementRef {
    let button = this.renderer.createElement('button');
    button.className = "seat__map-seat";
    button.innerText = `${seat.id}`;
    button.id = `seat-${seat.id}`; // Ensure each button has a unique ID
    button.addEventListener('click', () => this.handleButtonClick(seat.id));
    return button;
  }

  clearSeatMap(seatMapElement: HTMLElement): void {
    while (seatMapElement.firstChild) {
      seatMapElement.removeChild(seatMapElement.firstChild);
    }
  }

  rebuildDisplaySeatMap(floor: string): SeatDisplay[] {
    let seats = [...this.busInformation().seats[floor]];
    seats.map((seat, ind) => {
      if (ind === 1) {
        let newSeat = {} as SeatDisplay;
        newSeat = { ...seat };
        newSeat.isBlank = true;
        seats.splice(ind, 0, newSeat);
      }
      return seat;
    })

    return seats;
  }
}

interface SeatDisplay extends Seat {
  isBlank?: boolean
}
