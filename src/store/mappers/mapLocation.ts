import { Location } from 'types/Location';
import { mapLocationType } from './mapLocationType';

export const mapLocation = (location: any): Location => {
  const {
    id,
    attributes: { locationType, ...attributes },
  } = location;

  return {
    ...attributes,
    id,
    locationType: locationType ? mapLocationType(locationType.data) : null,
  };
};
