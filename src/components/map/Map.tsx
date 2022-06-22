import { Box, Flex, Icon, Spinner } from '@chakra-ui/react';
import GeocoderControl from 'components/map/GeocoderControl';
import React, { useEffect, useMemo, useState } from 'react';
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
import { RootState } from 'store';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';
import { selectMapPosition } from 'store/slices/mapSlice';
import { Location } from 'types/Location';
import { MapPosition } from 'types/MapPosition';

interface LocationMapProps {
  isLoading: boolean;
  locations?: Location[];
}

const Map: React.FC<LocationMapProps> = ({ isLoading, locations }) => {
  const dispatch = useDispatch();
  const mapPosition = useSelector(selectMapPosition);
  const [position, setPosition] = useState(mapPosition);
  const selectedLocation = useSelector(selectSelectedLocation);
  const settings = useSelector((state: RootState) => state.settings);
  const { height, width } = useWindowSize();
  const { map } = useMap();

  const onMove = (position: MapPosition) => {
    setPosition({
      latitude: position.latitude,
      longitude: position.longitude,
      zoom: position.zoom,
    });
  };

  const isLocationVisited = (location: Location) => {
    return !!location.visitedAt.length && settings.showVisited;
  };

  const getMapIcon = (location: Location) => {
    const isSelected = selectedLocation?.id === location.id;

    if (isLocationVisited(location)) {
      return isSelected ? HiOutlineCheckCircle : HiCheckCircle;
    }

    return isSelected ? HiOutlineLocationMarker : HiLocationMarker;
  };

  const markers = useMemo(
    () =>
      locations?.map((location) => {
        const visited = isLocationVisited(location);

        return (
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
              boxSize={visited ? 7 : 8}
              style={{
                transform: visited ? 'none' : `translateY(-12px)`,
              }}
            />
          </Marker>
        );
      }) ?? [],
    [locations, selectedLocation, height, settings]
  );

  useEffect(() => {
    map?.resize();
  }, [height, width]);

  useEffect(() => {
    setPosition(mapPosition);
  }, [mapPosition]);

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
      <MapGL
        {...position}
        id="map" // ID is the same as map variable name from useMap() hook
        onMove={(evt) => onMove(evt.viewState)}
        style={{
          height: height - 276,
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        <GeocoderControl position="top-left" />
        <NavigationControl />
        <GeolocateControl trackUserLocation showUserHeading />
        {markers}
      </MapGL>
    </Box>
  );
};

export default Map;
