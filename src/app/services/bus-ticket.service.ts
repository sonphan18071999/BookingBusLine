import {Injectable} from '@angular/core';
import {BusTicket} from "../models/bus-ticket.model";
import {TripType} from "../enums/trip-type";

@Injectable({
  providedIn: 'root' // Makes it available across the app
})
export class BusTicketBuilderService {
  // private store = inject(Store<AppState>);

  // async updateBusTicket(partialTicketUpdate: Partial<BusTicket>): Promise<BusTicket> {
  //   const busTicket: BusTicket = await firstValueFrom(
  //     this.store.select(busTicketSelector)
  //   );
  //
  //   if (!busTicket) return {} as BusTicket;
  //
  //   const updatedTicket: BusTicket = {
  //     ...busTicket,
  //     ...partialTicketUpdate,
  //     trip: {
  //       ...busTicket.trip,
  //       ...partialTicketUpdate.trip
  //     }
  //   };
  //
  //   this.store.dispatch(updateBusTicket({ticket: updatedTicket}));
  //   return updatedTicket;
  // }

  private ticket: BusTicket = {} as BusTicket;

  constructor() {
    this.reset();
  }

  reset(): this {
    this.ticket = {} as BusTicket;
    return this;
  }

  public setTripType(tripType: TripType): void {
    this.ticket = {...this.ticket, trip: {...this.ticket.trip, tripType: tripType}};
  }

  public tripType(): TripType | undefined {
    return this.ticket.trip?.tripType;
  }

  public setOrigin(departure: string): void {
    this.ticket = {...this.ticket, trip: {...this.ticket.trip, departureCity: departure}};
  }

  public setDestination(destination: string): void {
    this.ticket = {...this.ticket, trip: {...this.ticket.trip, destinationCity: destination}};
  }

  public currentTicket(): BusTicket {
    return this.ticket;
  }

  // setPassengerInfo(name: string, age: number): this {
  //   this.ticket = {...this.ticket, passengerInfo: {name, age}};
  //   return this;
  // }
  //
  // // Set seat number
  // setSeatNumber(seatNumber: string): this {
  //   this.ticket = {...this.ticket, seatNumber};
  //   return this;
  // }
  //
  // // Set departure date
  // setDepartureDate(departureDate: string): this {
  //   this.ticket = {...this.ticket, departureDate};
  //   return this;
  // }
  //
  // // Set ticket quantity
  // setQuantity(quantity: number): this {
  //   this.ticket = {...this.ticket, quantity};
  //   return this;
  // }

  public build(): BusTicket {
    const builtTicket = this.ticket;
    this.reset();
    return builtTicket;
  }

  public setDepartureDate(date: string): void {
    this.ticket = {...this.ticket, trip: {...this.ticket.trip, departureTime: date}};
  }
}
