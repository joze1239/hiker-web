import { Box, Flex, Icon, Spinner } from '@chakra-ui/react';
import GeocoderControl from 'components/map/GeocoderControl';
import React, { useMemo } from 'react';
import {
  HiCheckCircle,
  HiLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'react-use';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';
import { selectMapPosition, setPosition } from 'store/slices/mapSlice';
import { Location } from 'types/Location';
import { MapPosition } from 'types/MapPosition';

interface LocationMapProps {
  locations: Location[];
  isLoading: boolean;
}

const LocationMap: React.FC<LocationMapProps> = ({ locations, isLoading }) => {
  const dispatch = useDispatch();
  const { height } = useWindowSize();
  const position = useSelector(selectMapPosition);
  const selectedLocation = useSelector(selectSelectedLocation);

  const onMove = (position: MapPosition) => {
    dispatch(
      setPosition({
        latitude: position.latitude,
        longitude: position.longitude,
        zoom: position.zoom,
      })
    );
  };

  const getMapIcon = (location: Location) => {
    const isSelected = selectedLocation?.id === location.id;

    if (!!location.visitedAt.length) {
      return isSelected ? HiOutlineCheckCircle : HiCheckCircle;
    }

    return isSelected ? HiOutlineLocationMarker : HiLocationMarker;
  };

  const markers = useMemo(
    () =>
      locations.map((location) => (
        <Marker
          key={location.id}
          latitude={location.latitude}
          longitude={location.longitude}
          onClick={() => {
            dispatch(setSelectedLocation(location));
          }}
        >
          <Icon
            as={getMapIcon(location)}
            color={location.locationType?.color || 'gray.700'}
            boxSize={!!location.visitedAt.length ? 7 : 8}
          />
        </Marker>
      )) ?? [],
    [locations, selectedLocation]
  );

  return (
    <Box position="relative" rounded="xl" overflow="hidden">
      {isLoading && (
        <Flex
          position="absolute"
          top={0}
          left={0}
          zIndex={3}
          width="100%"
          height="100%"
          align="center"
          justify="center"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="gray"
            opacity={0.15}
          ></Box>
          <Spinner size="xl" />
        </Flex>
      )}

      <Map
        {...position}
        onMove={(evt) => onMove(evt.viewState)}
        style={{
          height: Math.max(height - 276, 400),
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        <GeocoderControl position="top-left" />
        <NavigationControl />
        <GeolocateControl />
        {markers}
      </Map>
    </Box>
  );
};

export default LocationMap;
