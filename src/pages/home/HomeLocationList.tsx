import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';

const HomeLocationList: React.FC = () => {
  return (
    <Container maxW="container.lg">
      <Box py={4}>
        <Text>Locations</Text>
      </Box>
    </Container>
  );
};

export default HomeLocationList;
