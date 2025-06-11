export interface Location {
  id: string;
  name: string;
  code: string;
  type: 'city' | 'station';
}

export const MOCK_LOCATIONS: Location[] = [
  { id: '1', name: 'Ho Chi Minh City', code: 'SGN', type: 'city' },
  { id: '2', name: 'Ha Noi', code: 'HAN', type: 'city' },
  { id: '3', name: 'Da Nang', code: 'DAD', type: 'city' },
  { id: '4', name: 'Nha Trang', code: 'NHA', type: 'city' },
  { id: '5', name: 'Can Tho', code: 'VCA', type: 'city' },
  { id: '6', name: 'Mien Dong Bus Station', code: 'MDB', type: 'station' },
  { id: '7', name: 'Mien Tay Bus Station', code: 'MTB', type: 'station' },
  { id: '8', name: 'Giap Bat Bus Station', code: 'GBB', type: 'station' },
  { id: '9', name: 'My Dinh Bus Station', code: 'MDB', type: 'station' },
  { id: '10', name: 'Da Nang Bus Station', code: 'DNB', type: 'station' },
];
