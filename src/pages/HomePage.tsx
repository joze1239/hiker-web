import {
  Box,
  Button,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/react';
import LocationSearch from 'components/location/LocationFilter';
import GeocoderControl from 'components/map/GeocoderControl';
import Navbar from 'components/Navbar';
import React, { useState } from 'react';
import Map, { GeolocateControl, NavigationControl } from 'react-map-gl';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'utils/routes';

const HomePage: React.FC = () => {
  const [viewState, setViewState] = useState({
    longitude: 14.11,
    latitude: 46.36,
    zoom: 9,
  });

  return (
    <>
      <Navbar logo />
      <Container maxW="container.sm">
        <LocationSearch />

        <Button
          mb={4}
          onClick={() =>
            setViewState({
              longitude: 14.11,
              latitude: 46.36,
              zoom: 9,
            })
          }
        >
          Move
        </Button>

        <Tabs variant="soft-rounded" colorScheme="primary" isFitted>
          <TabList pb={4}>
            <Tab>MAP</Tab>
            <Tab>LIST</Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0} py={4}>
              <Box borderRadius="xl" overflow="hidden">
                <Map
                  {...viewState}
                  onMove={(evt) => setViewState(evt.viewState)}
                  style={{
                    height: 430,
                  }}
                  mapStyle="mapbox://styles/mapbox/outdoors-v11"
                >
                  <GeocoderControl position="top-left" />
                  <NavigationControl />
                  <GeolocateControl />
                </Map>
              </Box>
            </TabPanel>
            <TabPanel px={0} py={4}>
              <Box>
                {Array.from(Array(20)).map((i, index) => (
                  <Link
                    to={generatePath(ROUTE.LOCATION, { id: `${index}` })}
                    key={`${i}_${index}`}
                  >
                    <Box
                      p={4}
                      mb={4}
                      borderRadius="lg"
                      backgroundColor="gray.100"
                    >
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default HomePage;
