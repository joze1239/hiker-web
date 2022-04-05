import { LocationType } from 'types/LocationType';
import { Mountain } from 'types/Mountain';
import { VisitDate } from 'types/VisitDate';

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
  visitedAt: VisitDate[];
  parking: string;
}
