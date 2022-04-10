import { Tag } from '@chakra-ui/react';
import React from 'react';
import { LocationType } from 'types/LocationType';

interface LocationTypeTagProps {
  locationType: LocationType;
}

const LocationTypeTag: React.FC<LocationTypeTagProps> = ({ locationType }) => {
  return (
    <Tag px={3} bg={locationType.color} color="white" borderRadius="full">
      {locationType.name}
    </Tag>
  );
};

export default LocationTypeTag;
