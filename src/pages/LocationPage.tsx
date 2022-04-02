import { Box, Container } from '@chakra-ui/react';
import LocationAttribute from 'components/location/LocationAttribute';
import Navbar from 'components/Navbar';
import React from 'react';

const LocationPage: React.FC = () => {
  return (
    <>
      <Navbar back title="Šmarna Gora" />

      <Container maxW="container.sm">
        <Box py={4}>
          <LocationAttribute name="Name" value="Šmarna Gora" />
          <LocationAttribute name="Location Type" value="Hrib" />

          <LocationAttribute name="Height" value="667m" />
          <LocationAttribute
            name="URL"
            href="https://www.hribi.net/gora/smarna_gora/5/117"
          />
        </Box>
      </Container>
    </>
  );
};

export default LocationPage;
