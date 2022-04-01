import { Container } from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import React from 'react';

const LocationPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <Container maxW="container.sm" py={4}>
        Location page
      </Container>
    </>
  );
};

export default LocationPage;
