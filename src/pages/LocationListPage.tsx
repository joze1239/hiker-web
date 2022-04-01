import { Box, Container, Flex, Tag, Text } from '@chakra-ui/react';
import LocationSearch from 'components/location/LocationFilter';
import Navbar from 'components/Navbar';
import RouteToggle from 'components/RouteToggle';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
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

      <Container maxW="container.sm">
        <Box py={4}>
          {Array.from(Array(20)).map((i, index) => (
            <Link
              to={generatePath(ROUTE.LOCATION, { id: `${index}` })}
              key={`${i}_${index}`}
            >
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
