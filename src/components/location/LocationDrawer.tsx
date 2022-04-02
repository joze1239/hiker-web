import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import LocationAttribute from './LocationAttribute';

const LocationDrawer: React.FC = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      py={6}
      zIndex={10}
      borderTop="1px"
      borderColor="gray.300"
      backgroundColor="white"
    >
      <Container maxW="container.md">
        <Text mb={4} fontSize="xl" fontWeight="bold">
          Triglav
        </Text>

        <LocationAttribute name="Height" value="2864m" />
        <LocationAttribute name="Mountain" value="Julijske Alpe" />
        <LocationAttribute
          name="URL"
          href="https://www.hribi.net/gora/triglav/1/1"
        />
      </Container>
    </Box>
  );
};

export default LocationDrawer;