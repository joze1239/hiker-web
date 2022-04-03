import { Box, Flex, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedLocation } from 'store/slices/locationSlice';
import { setPosition } from 'store/slices/mapSlice';
import { Location } from 'types/Location';

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      {locations.map((location) => (
        <Box
          key={location.id}
          onClick={() => {
            dispatch(setSelectedLocation(location));
            dispatch(
              setPosition({
                latitude: location.latitude,
                longitude: location.longitude,
                zoom: 12,
              })
            );
          }}
          p={4}
          mb={4}
          rounded="lg"
          backgroundColor="gray.100"
          cursor="pointer"
        >
          <Flex justify="space-between">
            <Box>
              <Text fontWeight="semibold">{location.name}</Text>
              {location.height && (
                <Text fontSize="sm" color="gray.600">
                  {location.height}m - {location.mountain?.name}
                </Text>
              )}
            </Box>
            <Box>
              <Tag
                backgroundColor={location.locationType?.color || 'gray.100'}
                color="white"
              >
                {location.locationType?.name}
              </Tag>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default LocationList;
