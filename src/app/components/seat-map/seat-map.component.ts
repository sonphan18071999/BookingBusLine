import { Component, ElementRef, Inject, Input, OnInit, Renderer2, Signal, computed, signal } from '@angular/core';
import { Bus } from '../../models/bus.model';
import { busMock } from '../../mocks/bus-mock.data';
import { BusType } from '../../enums/bus-types';
import { DOCUMENT } from '@angular/common';
import { Seat } from '../../models/seat.model';

@Component({
  selector: 'app-seat-map',
  standalone: true,
  imports: [],
  templateUrl: './seat-map.component.html',
  styleUrl: './seat-map.component.scss',
  host: { ngSkipHydration: 'false' },
})
export class SeatMapComponent implements OnInit {
  busInformation = signal<Bus>(busMock[0]);

  seatMap = computed(() => {
    let seatMapDisplay = ``;
    if (this.busInformation().type === BusType.NORMAL) {
      this.createNormalMapSeat();
    } else if (this.busInformation().type === BusType.DOUBLE_DECKER) {

    } else {

    }
    return seatMapDisplay;
  })

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }
  ngOnInit(): void {
    this.busInformation().seats = this.rebuildDisplaySeatMap();
  }

  handleButtonClick(buttonIndex: string) {
    console.log(`Button ${buttonIndex} clicked`);
    // Your button click logic here
  }

  createNormalMapSeat(): void {
    let seats = this.busInformation().seats;
    const seatMapElement = this.elementRef.nativeElement.querySelector('#seat-map');
    this.clearSeatMap(seatMapElement);


    for (let i = 0; i < seats.length / 3; i++) {
      let tr = this.renderer.createElement('tr');
      tr.className = "seat__map-row"
      let count = 0;
      for (let j = i * 3; j < (i + 1) * 3 && j < seats.length; j++) {
        if (count === 3) {
          break;
        }

        let td = this.renderer.createElement('td');
        let button = this.createDynamicButton(seats[j]);

        if (j === 1) {
          tr.appendChild(this.emptyDiv());
          count++;

        }

        td.appendChild(button);
        tr.appendChild(td);
        count++;
      }

      seatMapElement?.appendChild(tr);
    }
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
    button.className = "seat__map-seat"
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

  rebuildDisplaySeatMap(): SeatDisplay[] {
    let seats = [...this.busInformation().seats];
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
