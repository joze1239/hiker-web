import { Box, Container, Flex, Tag, Text } from '@chakra-ui/react';
import LocationSearch from 'components/location/LocationFilter';
import Navbar from 'components/Navbar';
import RouteToggle from 'components/RouteToggle';
import React from 'react';
import { Link } from 'react-router-dom';
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
          {Array.from(Array(20)).map((i, index) => (
            <Link to="/" key={`${i}_${index}`}>
              <Box p={4} mb={4} borderRadius="lg" backgroundColor="gray.100">
                <Flex justify="space-between">
                  <Box>
                    <Text fontWeight="semibold">Šmarna gora</Text>
                    <Text fontSize="sm" color="gray.600">
                      669m
                    </Text>
                  </Box>
                  <Box>
                    <Tag backgroundColor="primary.100">Hrib</Tag>
                  </Box>
                </Flex>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default MapPage;
