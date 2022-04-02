import { LocationType } from 'types/LocationType';

export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  locationType?: LocationType;
  height?: number;
  mountain?: string;
  url?: string;
}
