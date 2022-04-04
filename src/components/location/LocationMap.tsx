import { Box, Icon } from '@chakra-ui/react';
import GeocoderControl from 'components/map/GeocoderControl';
import React, { useMemo } from 'react';
import { HiLocationMarker, HiOutlineLocationMarker } from 'react-icons/hi';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';
import { selectMapPosition, setPosition } from 'store/slices/mapSlice';
import { Location } from 'types/Location';
import { MapPosition } from 'types/MapPosition';

interface LocationMapProps {
  locations: Location[];
}

const LocationMap: React.FC<LocationMapProps> = ({ locations }) => {
  const dispatch = useDispatch();
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
            as={
              selectedLocation?.id === location.id
                ? HiOutlineLocationMarker
                : HiLocationMarker
            }
            color={location.locationType?.color || 'gray.700'}
            boxSize={8}
          />
        </Marker>
      )) ?? [],
    [locations, selectedLocation]
  );

  return (
    <Box rounded="xl" overflow="hidden">
      <Map
        {...position}
        onMove={(evt) => onMove(evt.viewState)}
        style={{
          height: 430,
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
