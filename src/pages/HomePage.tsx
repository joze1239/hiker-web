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
import LocationDrawer from 'components/location/LocationDrawer';
import LocationSearch from 'components/location/LocationFilter';
import GeocoderControl from 'components/map/GeocoderControl';
import Navbar from 'components/Navbar';
import React, { useMemo, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetLocationListQuery } from 'store/services/location';
import { scrollToTop } from 'utils/scroll';

const HomePage: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [viewState, setViewState] = useState({
    longitude: 14.11,
    latitude: 46.36,
    zoom: 9,
  });
  const filters = useSelector((state: RootState) => state.location.filters);
  const { data: locations } = useGetLocationListQuery(filters);

  const markers = useMemo(
    () =>
      locations?.map((location) => (
        <Marker
          key={location.id}
          latitude={location.latitude}
          longitude={location.longitude}
        >
          <Icon
            as={HiLocationMarker}
            color={location.locationType?.color || 'gray.700'}
            boxSize={8}
          />
        </Marker>
      )) ?? [],
    [locations]
  );

  return (
    <>
      <Navbar logo />
      <Container maxW="container.md">
        <LocationSearch />

        <LocationDrawer />

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
              <Box rounded="xl" overflow="hidden">
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
                {locations?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      scrollToTop();
                      setTabIndex(0);
                      setViewState({
                        latitude: location.latitude,
                        longitude: location.longitude,
                        zoom: 12,
                      });
                    }}
                    p={4}
                    mb={4}
                    rounded="lg"
                    backgroundColor="gray.100"
                    cursor="pointer"
                  >
                    <Flex justify="space-between">
                      <Box>
                        <Text fontWeight="semibold">{location.name}</Text>
                        {location.height && (
                          <Text fontSize="sm" color="gray.600">
                            {location.height}m - {location.mountain}
                          </Text>
                        )}
                      </Box>
                      <Box>
                        <Tag
                          backgroundColor={
                            location.locationType?.color || 'gray.100'
                          }
                          color="white"
                        >
                          {location.locationType?.name}
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
