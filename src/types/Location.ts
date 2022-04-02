import { LocationType } from 'types/LocationType';

export interface Location {
  id: number;
  attributes: {
    name: string;
    latitude: number;
    longitude: number;
    locationType: {
      data?: LocationType;
    };
    height?: number;
    url?: string;
  };
}
