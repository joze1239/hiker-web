import {
  Box,
  Container,
  Flex,
  Icon,
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
import React, { useMemo, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import { useGetLocationListQuery } from 'store/services/location';
import { scrollToTop } from 'utils/scroll';

const HomePage: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [viewState, setViewState] = useState({
    longitude: 14.11,
    latitude: 46.36,
    zoom: 9,
  });
  const { data } = useGetLocationListQuery();

  const markers = useMemo(
    () =>
      data?.data.map((location) => (
        <Marker
          key={location.id}
          latitude={location.attributes.latitude}
          longitude={location.attributes.longitude}
        >
          <Icon
            as={HiLocationMarker}
            color={
              location.attributes.locationType.data?.attributes?.color ||
              'gray.700'
            }
            boxSize={8}
          />
        </Marker>
      )) ?? [],
    [data]
  );

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
                  {markers}
                </Map>
              </Box>
            </TabPanel>
            <TabPanel px={0} py={4}>
              <Box>
                {data?.data?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      scrollToTop();
                      setTabIndex(0);
                      setViewState({
                        latitude: location.attributes.latitude,
                        longitude: location.attributes.longitude,
                        zoom: 12,
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
                        <Text fontWeight="semibold">
                          {location.attributes.name}
                        </Text>
                        {location.attributes.height && (
                          <Text fontSize="sm" color="gray.600">
                            {location.attributes.height}m -{' '}
                            {location.attributes.mountain}
                          </Text>
                        )}
                      </Box>
                      <Box>
                        <Tag
                          backgroundColor={
                            location.attributes.locationType.data?.attributes
                              ?.color || 'gray.100'
                          }
                          color="white"
                        >
                          {
                            location.attributes.locationType.data?.attributes
                              ?.name
                          }
                        </Tag>
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
