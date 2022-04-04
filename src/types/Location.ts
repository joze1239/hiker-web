import { LocationType } from 'types/LocationType';
import { Mountain } from './Mountain';

export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  locationType?: LocationType;
  mountain?: Mountain;
  height?: number;
  walkTime?: string;
  address?: string;
  note?: string;
  url?: string;
  visitedAt: string;
  parking: string;
}
