import { TripType } from "../../enums/trip-type";
import { BusTicket } from "../../models/bus-ticket.model";

export const tripsMock: BusTicket[] = [
    {
        id: "e24d528e-bdf9-48f4-b8a5-afa6b8b6677b",
        passengerName: "John Doe",
        departureCity: "New York",
        destinationCity: "Los Angeles",
        departureTime: "1717857600",
        arrivalTime: "1717866600",
        ticketPrice: "200.00",
        seatNumber: "A23",
        tripType: TripType.ONE_WAY
    },
    {
        id: "df7fc0dc-12d5-4410-80bf-ff654ec8af34",
        passengerName: "Alice Smith",
        departureCity: "London",
        destinationCity: "Paris",
        departureTime: "1717872000",
        arrivalTime: "1717881000",
        ticketPrice: "150.00",
        seatNumber: "B12",
        tripType: TripType.ROUND_TRIP
    },
    {
        id: "661c0183-d64d-46a1-9979-6f7a8dbc9961",
        passengerName: "Michael Johnson",
        departureCity: "Tokyo",
        destinationCity: "Sydney",
        departureTime: "1717863000",
        arrivalTime: "1717909500",
        ticketPrice: "450.00",
        seatNumber: "C05",
        tripType: TripType.ONE_WAY
    },
    {
        id: "ed165075-30e6-47f0-b4b1-0fb33bf7b0fe",
        passengerName: "Emma Brown",
        departureCity: "Paris",
        destinationCity: "Rome",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        ticketPrice: "180.00",
        seatNumber: "D09",
        tripType: TripType.ROUND_TRIP
    },
    {
        id: "1f108012-3c66-430e-b78a-e6200cafc1de",
        passengerName: "Daniel Lee",
        departureCity: "Sydney",
        destinationCity: "New York",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        tripType: TripType.ROUND_TRIP
    },
    {
        id: "254c233b-ab78-45e1-acb1-ee883505292d",
        passengerName: "Sophia Wilson",
        departureCity: "Los Angeles",
        destinationCity: "London",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        ticketPrice: "350.00",
        seatNumber: "F24",
        tripType: TripType.ROUND_TRIP
    },
    {
        id: "fc674ce9-cf22-40fa-a185-a56f6e404efe",
        passengerName: "James Martinez",
        departureCity: "Rome",
        destinationCity: "Tokyo",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        ticketPrice: "500.00",
        seatNumber: "G08",
        tripType: TripType.ONE_WAY
    },
    {
        id: "6659940e-50b8-4d3c-9f44-44440a616f04",
        passengerName: "Olivia Garcia",
        departureCity: "Paris",
        destinationCity: "New York",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        ticketPrice: "400.00",
        seatNumber: "H19",
        tripType: TripType.ROUND_TRIP
    },
    {
        id: "2d23e02d-23b4-40a5-b0b9-1cfd07ccacbc",
        passengerName: "William Rodriguez",
        departureCity: "London",
        destinationCity: "Sydney",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        ticketPrice: "550.00",
        seatNumber: "I21",
        tripType: TripType.ONE_WAY
    },
    {
        id: "4ce9c94e-5870-45a8-a459-d36f7c13a1d2",
        passengerName: "Emily Taylor",
        departureCity: "New York",
        destinationCity: "Los Angeles",
        departureTime: "1717868100",
        arrivalTime: "1717874400",
        ticketPrice: "300.00",
        seatNumber: "J13",
        tripType: TripType.ROUND_TRIP
    }]