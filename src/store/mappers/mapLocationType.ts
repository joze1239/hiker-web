import { LocationType } from 'types/LocationType';

export const mapLocationType = (locationType: any): LocationType => {
  const { id, attributes } = locationType;

  return {
    id,
    ...attributes,
  };
};
