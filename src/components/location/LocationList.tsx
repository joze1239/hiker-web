import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import LocationTypeTag from 'components/locationType/LocationTypeTag';
import React from 'react';
import {
  HiOutlineClock,
  HiOutlineFlag,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setSelectedLocation } from 'store/slices/locationSlice';
import { setMapPosition } from 'store/slices/mapSlice';
import { Location } from 'types/Location';
import { scrollToTop } from 'utils/scroll';
import LocationAttribute from './LocationAttribute';

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
            scrollToTop();
            dispatch(setSelectedLocation(location));
            dispatch(
              setMapPosition({
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
              <Text fontWeight="semibold" mb={2}>
                {location.name}
              </Text>

              {location.address && (
                <LocationAttribute
                  icon={HiOutlineLocationMarker}
                  value={location.address}
                  size="sm"
                />
              )}

              {location.height && (
                <LocationAttribute
                  icon={HiOutlineFlag}
                  value={`${location.height}m - ${location.mountain?.name}`}
                  size="sm"
                />
              )}

              {location.walkTime && (
                <LocationAttribute
                  icon={HiOutlineClock}
                  value={location.walkTime}
                  size="sm"
                />
              )}
            </Box>
            <Box>
              {location.locationType && (
                <LocationTypeTag locationType={location.locationType} />
              )}
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default LocationList;
