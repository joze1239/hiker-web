import { Box, Flex, Spinner, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedLocation } from 'store/slices/locationSlice';
import { setPosition } from 'store/slices/mapSlice';
import { Location } from 'types/Location';

interface LocationListProps {
  locations: Location[];
  isLoading: boolean;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  isLoading,
}) => {
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Flex justify="center" mt={4}>
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Box>
      {locations.length === 0 && (
        <Text fontSize="lg" align="center" mt={4}>
          No results found.
        </Text>
      )}

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
          bg="gray.100"
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
                bg={location.locationType?.color || 'gray.100'}
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
