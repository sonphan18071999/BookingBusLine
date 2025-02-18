import {TripType} from "../enums/trip-type";

export class BusTicket {
  public tripType: TripType;
  public departure: string;
  public destination: string;
  public departureDate: string;
  public returnDate?: string;
  public quantity: number;

  constructor(
    tripType: TripType,
    departure: string,
    destination: string,
    departureDate: string,
    quantity: number,
    returnDate?: string
  ) {
    this.tripType = tripType;
    this.departure = departure;
    this.destination = destination;
    this.departureDate = departureDate;
    this.quantity = quantity;

    if (tripType === TripType.ROUND_TRIP && returnDate) {
      this.returnDate = returnDate;
    }
  }
}
