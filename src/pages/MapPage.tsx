import { Box, Container } from '@chakra-ui/react';
import LocationSearch from 'components/location/LocationFilter';
import GeocoderControl from 'components/map/GeocoderControl';
import Navbar from 'components/Navbar';
import RouteToggle from 'components/RouteToggle';
import React from 'react';
import Map, { GeolocateControl, NavigationControl } from 'react-map-gl';
import { ROUTE } from 'utils/routes';

const MapPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <LocationSearch />
      <RouteToggle
        routes={[
          {
            to: ROUTE.MAP,
            name: 'MAP',
          },
          {
            to: ROUTE.LOCATIONS,
            name: 'LIST',
          },
        ]}
      />

      <Container maxW="container.lg" py={4}>
        <Box borderRadius="xl" overflow="hidden">
          <Map
            initialViewState={{
              longitude: 14.11,
              latitude: 46.36,
              zoom: 9,
            }}
            style={{
              height: 400,
            }}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
          >
            <GeocoderControl position="top-left" />
            <NavigationControl />
            <GeolocateControl />
          </Map>
        </Box>
      </Container>
    </>
  );
};

export default MapPage;
