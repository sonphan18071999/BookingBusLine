export interface BusSearchCriteria {
  departureLocation: string;
  arrivalLocation: string;
  departureDate: Date;
  returnDate?: Date;
  passengerCount: number;
  busClass?: BusClass;
  priceRange?: PriceRange;
  preferences?: BusPreferences;
}

export interface PriceRange {
  min: number;
  max: number;
}

export enum BusClass {
  ECONOMY = 'ECONOMY',
  BUSINESS = 'BUSINESS',
  LUXURY = 'LUXURY',
}

export interface BusPreferences {
  hasWifi: boolean;
  hasUSBCharge: boolean;
  hasToilet: boolean;
  hasEntertainment: boolean;
  isAccessible: boolean;
  hasRefreshments: boolean;
}

export interface LocationSuggestion {
  id: string;
  name: string;
  region: string;
  country: string;
  type: 'CITY' | 'TERMINAL' | 'STATION';
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
