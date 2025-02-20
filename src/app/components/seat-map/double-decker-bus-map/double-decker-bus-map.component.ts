import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {Seat} from "../../../models/seat.model";
import {NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-double-decker-bus-map',
  standalone: true,
  imports: [
    NgStyle,
    MatIcon,
    MatButton,
    MatIconButton
  ],
  templateUrl: './double-decker-bus-map.component.html',
  styleUrl: './double-decker-bus-map.component.scss'
})
export class DoubleDeckerBusMapComponent implements OnInit {
  @Input()
  public seat: { [floor: string]: Seat[] } = {};

  
  public seatDisplay: WritableSignal<FloorConfig[]> = signal<FloorConfig[]>([]);

  ngOnInit(): void {

    this.seatDisplay.set([
      {
        name: 'Lower Floor',
        seats: this.seat['floorBelow'] || []
      },
      {
        name: 'Upper Floor',
        seats: this.seat['floorUpper'] || []
      }
    ]);
  }
}

export interface FloorConfig {
  name: string;
  seats: Seat[];
}
