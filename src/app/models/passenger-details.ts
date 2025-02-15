export interface PassengerDetails {
  passengerName: string;
  seatNumber: string;
  profile?: {
    age?: number;
    gender?: string;
    contactInfo?: string;
  };
}
