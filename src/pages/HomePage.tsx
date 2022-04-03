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
import LocationMap from 'components/location/LocationMap';
import Navbar from 'components/Navbar';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetLocationListQuery } from 'store/services/location';
import { selectSelectedLocation } from 'store/slices/locationSlice';
import { scrollToTop } from 'utils/scroll';

const HomePage: React.FC = () => {
  const selectedLocation = useSelector(selectSelectedLocation);
  const filters = useSelector((state: RootState) => state.location.filters);
  const [tabIndex, setTabIndex] = React.useState(0);

  const { data: locations } = useGetLocationListQuery(filters);

  useEffect(() => {
    if (selectedLocation && tabIndex !== 0) {
      setTabIndex(0);
      scrollToTop();
    }
  }, [selectedLocation]);

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
              <LocationMap locations={locations || []} />
            </TabPanel>
            <TabPanel px={0} py={4}>
              <LocationList locations={locations || []} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default HomePage;
