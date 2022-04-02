import {
  Box,
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

const HomePage: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [viewState, setViewState] = useState({
    longitude: 14.11,
    latitude: 46.36,
    zoom: 9,
  });

  return (
    <>
      <Navbar logo />
      <Container maxW="container.md">
        <LocationSearch />

        <Tabs
          index={tabIndex}
          onChange={(index) => setTabIndex(index)}
          variant="soft-rounded"
          colorScheme="primary"
          isFitted
        >
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
                  <Box
                    key={`${i}_${index}`}
                    onClick={() => {
                      setTabIndex(0);
                      setViewState({
                        latitude: 46.12985,
                        longitude: 14.46391,
                        zoom: 12.5,
                      });
                    }}
                    p={4}
                    mb={4}
                    borderRadius="lg"
                    backgroundColor="gray.100"
                    cursor="pointer"
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
