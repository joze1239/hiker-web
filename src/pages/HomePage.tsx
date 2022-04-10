import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import LocationDrawer from 'components/location/LocationDrawer';
import LocationSearch from 'components/location/LocationFilter';
import LocationList from 'components/location/LocationList';
import Map from 'components/map/Map';
import Navbar from 'components/Navbar';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMap } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetLocationListQuery } from 'store/services/location';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectSelectedLocation);
  const filters = useSelector((state: RootState) => state.location.filters);
  const [tabIndex, setTabIndex] = React.useState(0);
  const { map } = useMap();
  const {
    data: locations,
    isFetching,
    isLoading,
  } = useGetLocationListQuery(filters);

  useEffect(() => {
    if (selectedLocation && tabIndex !== 0) {
      setTabIndex(0);
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (tabIndex === 0) {
      map?.resize();
    }
  }, [tabIndex]);

  return (
    <>
      <Navbar logo />

      <LocationDrawer />
      <Container maxW="container.sm">
        <LocationSearch />
      </Container>

      <Tabs
        index={tabIndex}
        onChange={(index) => {
          setTabIndex(index);
          dispatch(setSelectedLocation(null));
        }}
        variant="soft-rounded"
        colorScheme="primary"
        isFitted
      >
        <Container maxW="container.sm">
          <TabList pb={4}>
            <Tab>{t('map')}</Tab>
            <Tab>{t('list')}</Tab>
          </TabList>
        </Container>

        <TabPanels>
          <TabPanel px={0} py={4}>
            <Container maxW="container.xl">
              <Map isLoading={isLoading || isFetching} locations={locations} />
            </Container>
          </TabPanel>
          <TabPanel px={0} py={4}>
            <Container maxW="container.sm">
              <LocationList
                locations={locations || []}
                isLoading={isLoading || isFetching}
              />
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default HomePage;
