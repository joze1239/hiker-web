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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetLocationListQuery } from 'store/services/location';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';
import { scrollToTop } from 'utils/scroll';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectSelectedLocation);
  const filters = useSelector((state: RootState) => state.location.filters);
  const [tabIndex, setTabIndex] = React.useState(0);

  const {
    data: locations,
    isFetching,
    isLoading,
  } = useGetLocationListQuery(filters);

  useEffect(() => {
    if (selectedLocation && tabIndex !== 0) {
      scrollToTop();
      setTabIndex(0);
    }
  }, [selectedLocation]);

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
            <Tab>MAP</Tab>
            <Tab>LIST</Tab>
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
          loading
        </TabPanels>
      </Tabs>
    </>
  );
};

export default HomePage;
