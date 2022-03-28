import { Box, Container, Image } from '@chakra-ui/react';
import LocationSearch from 'components/location/LocationFilter';
import Navbar from 'components/Navbar';
import RouteToggle from 'components/RouteToggle';
import React from 'react';
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

      <Container maxW="container.lg">
        <Box py={4}>
          <Image
            src="https://miro.medium.com/max/800/0*GYbrDqJt23n4ZAFL.png"
            width="100%"
            borderRadius="xl"
          />
        </Box>
      </Container>
    </>
  );
};

export default MapPage;
