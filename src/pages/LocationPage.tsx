import { Box, Container } from '@chakra-ui/react';
import LocationAttribute from 'components/location/LocationAttribute';
import Map from 'components/map/Map';
import Navbar from 'components/Navbar';
import React from 'react';

const LocationPage: React.FC = () => {
  return (
    <>
      <Navbar back title="Šmarna Gora" />

      <Container maxW="container.sm" py={4}>
        <LocationAttribute name="Name" value="Šmarna Gora" />
        <LocationAttribute name="Location Type" value="Hrib" />

        <LocationAttribute name="Height" value="667m" />
        <LocationAttribute
          name="URL"
          href="https://www.hribi.net/gora/smarna_gora/5/117"
        />
      </Container>

      <Container maxW="container.lg" py={4}>
        <Box borderRadius="xl" overflow="hidden">
          <Map longitude={14.11} latitude={46.36} zoom={9} />
        </Box>
      </Container>
    </>
  );
};

export default LocationPage;
