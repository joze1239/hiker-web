import { Box } from '@chakra-ui/react';
import GeocoderControl from 'components/map/GeocoderControl';
import React, { memo } from 'react';
import {
  default as MapboxMap,
  GeolocateControl,
  NavigationControl,
} from 'react-map-gl';

interface MapProps {
  longitude: number;
  latitude: number;
  zoom: number;
  height?: number;
}

const Map: React.FC<MapProps> = ({ longitude, latitude, zoom, height }) => {
  return (
    <Box borderRadius="xl" overflow="hidden">
      <MapboxMap
        initialViewState={{
          longitude,
          latitude,
          zoom,
        }}
        style={{
          height,
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        <GeocoderControl position="top-left" />
        <NavigationControl />
        <GeolocateControl />
      </MapboxMap>
    </Box>
  );
};

Map.defaultProps = {
  height: 430,
};

export default memo(Map);
