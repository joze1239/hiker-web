import { Box, Button, Flex, Icon, Spinner } from '@chakra-ui/react';
import GeocoderControl from 'components/map/GeocoderControl';
import React, { useMemo } from 'react';
import {
  HiCheckCircle,
  HiLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import {
  default as MapGL,
  GeolocateControl,
  Marker,
  NavigationControl,
  useMap,
} from 'react-map-gl';
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
  isLoading: boolean;

  locations?: Location[];
}

const Map: React.FC<LocationMapProps> = ({ isLoading, locations }) => {
  const dispatch = useDispatch();
  const position = useSelector(selectMapPosition);
  const selectedLocation = useSelector(selectSelectedLocation);
  const { height } = useWindowSize();
  const { map } = useMap();

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
      locations?.map((location) => (
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
    [locations, selectedLocation, height]
  );

  const onClick = () => {
    map?.resize();
  };

  return (
    <Box position="relative" rounded="xl" overflow="hidden">
      <Button onClick={onClick}>Resize</Button>
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
      <MapGL
        {...position}
        id="map" // ID is the same as map variable name from useMap() hook
        onMove={(evt) => onMove(evt.viewState)}
        style={{
          // height: Math.max(height - 276, 400),
          height: height - 276,
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        <GeocoderControl position="top-left" />
        <NavigationControl />
        <GeolocateControl />
        {markers}
      </MapGL>
    </Box>
  );
};

export default Map;
