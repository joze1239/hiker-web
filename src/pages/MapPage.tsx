import { Box, Container } from '@chakra-ui/react';
import LocationSearch from 'components/location/LocationFilter';
import Map from 'components/map/Map';
import Navbar from 'components/Navbar';
import RouteToggle from 'components/RouteToggle';
import React from 'react';
import { ROUTE } from 'utils/routes';

const MapPage: React.FC = () => {
  return (
    <>
      <Navbar logo />
      <LocationSearch />
      <RouteToggle
        routes={[
          {
            to: ROUTE.MAP,
            name: 'MAP',
          },
          {
            to: ROUTE.LOCATION_LIST,
            name: 'LIST',
          },
        ]}
      />

      <Container maxW="container.lg" py={4}>
        <Box borderRadius="xl" overflow="hidden">
          <Map longitude={14.11} latitude={46.36} zoom={9} />
        </Box>
      </Container>
    </>
  );
};

export default MapPage;
