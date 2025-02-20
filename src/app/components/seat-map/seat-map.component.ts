import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Trip} from '../../models/trip.model';
import {DoubleDeckerBusMapComponent} from "./double-decker-bus-map/double-decker-bus-map.component";
import {NgStyle} from "@angular/common";
import {BusType} from "../../enums/bus-types";

@Component({
  selector: 'app-seat-map',
  standalone: true,
  imports: [MatCardModule, DoubleDeckerBusMapComponent, NgStyle],
  templateUrl: './seat-map.component.html',
  styleUrl: './seat-map.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class SeatMapComponent implements OnInit {
  @Input()
  public trip: Trip = {} as Trip;


  public seatStatuses: SeatStatus[] = [
    {
      label: "Booked",
      type: SeatStatusType.BOOKED,
      color: "#0064D2"
    }, {
      label: "Your selection",
      type: SeatStatusType.YOUR_SELECTION,
      color: "#F5A522"
    }, {
      label: "Available",
      type: SeatStatusType.AVAILABLE,
      color: "white"
    }
  ]
  protected readonly BusType = BusType;

  constructor() {
  }

  ngOnInit(): void {
  }
}


export interface SeatStatus {
  type: SeatStatusType;
  label: string;
  color: string
}

export enum SeatStatusType {
  AVAILABLE = "Available",
  BOOKED = "Booked",
  YOUR_SELECTION = "Your Section",
}
