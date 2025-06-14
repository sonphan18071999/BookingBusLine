import {Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal} from '@angular/core';
import {Seat} from "../../../models/seat.model";
import {NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-double-decker-bus-map',
  standalone: true,
  imports: [
    NgStyle,
    MatIcon,
    MatButton,
    MatIconButton,
    MatCard
  ],
  templateUrl: './double-decker-bus-map.component.html',
  styleUrl: './double-decker-bus-map.component.scss'
})
export class DoubleDeckerBusMapComponent implements OnInit {
  @Input()
  public seat: { [floor: string]: Seat[] } = {};

  @Output()
  public onSeatSelectionChange: EventEmitter<string[]> = new EventEmitter();

  public seatDisplay: WritableSignal<FloorConfig[]> = signal<FloorConfig[]>([]);

  // public seatService = inject(SeatService);
  public seatsSelected: string[] = [];

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

  public onSelectSeat(seat: Seat): void {
    if (seat.isOccupied) return;

    if (this.seatsSelected.indexOf(seat.id) === -1) {
      this.seatsSelected.push(seat.id)
    } else {
      this.seatsSelected.splice(this.seatsSelected.indexOf(seat.id), 1);
    }

    console.log('seatsSelected', this.seatsSelected);
    this.onSeatSelectionChange.emit(this.seatsSelected);
  }
}

export interface FloorConfig {
  name: string;
  seats: Seat[];
}
