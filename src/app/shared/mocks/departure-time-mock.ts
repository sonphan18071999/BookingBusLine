import { DepartureTimesFilter } from "../../models/departure-filter.model";

export const departureTimeMock: DepartureTimesFilter[] = [
  { id: "0", time: 'Midnight 00:00 - 06:00', isSelected: false }, { id: '1', time: 'Morning 06:00 - 12:00', isSelected: false }, { id: '2', time: 'Affternoon 12:00 - 18:00', isSelected: false }, {
    id: '3', time: 'Evening 18:00 - 24:00', isSelected: false
  }
]