import { Location } from 'types/Location';
import { mapLocationType } from './mapLocationType';
import { mapMountain } from './mapMountain';

export const mapLocation = (location: any): Location => {
  const {
    id,
    attributes: { locationType, mountain, ...attributes },
  } = location;

  return {
    ...attributes,
    id,
    locationType: locationType.data ? mapLocationType(locationType.data) : null,
    mountain: mountain.data ? mapMountain(mountain.data) : null,
  };
};
