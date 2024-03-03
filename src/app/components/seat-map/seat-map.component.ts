import { Component, Inject, Input, Signal, computed, signal } from '@angular/core';
import { Bus } from '../../models/bus.model';
import { busMock } from '../../mocks/bus-mock.data';
import { BusType } from '../../enums/bus-types';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-seat-map',
  standalone: true,
  imports: [],
  templateUrl: './seat-map.component.html',
  styleUrl: './seat-map.component.scss'
})
export class SeatMapComponent {
  busInformation = signal<Bus>(busMock[0]);

  seatMap = computed(() => {
    let seats = this.busInformation().seats;
    let seatMapDisplay = ``;
    if (this.busInformation().type === BusType.NORMAL) {
      const seatMapElement = this.document.getElementById('seat-map');

      for (let i = 0; i < seats.length / 5; i++) {
        let tr = this.document.createElement('tr');
        for (let j = i * 5; j < (i + 1) * 5 && j < seats.length; j++) {
          let td = this.document.createElement('td');
          let button = this.document.createElement('button');
          button.innerText = `${seats[j].id}`;
          button.id = `seat-${seats[j].id}`; // Ensure each button has a unique ID
          button.addEventListener('click', () => this.handleButtonClick(seats[j].id));
          td.appendChild(button);
          tr.appendChild(td);
        }
        seatMapElement?.appendChild(tr);

      }
    } else if (this.busInformation().type === BusType.DOUBLE_DECKER) {

    } else {

    }
    return seatMapDisplay;
  })

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  handleButtonClick(buttonIndex: string) {
    console.log(`Button ${buttonIndex} clicked`);
    // Your button click logic here
  }

}
