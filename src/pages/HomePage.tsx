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
import Map from 'components/map/Map';
import Navbar from 'components/Navbar';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'utils/routes';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar logo />
      <Container maxW="container.sm">
        <LocationSearch />

        <Tabs variant="soft-rounded" colorScheme="primary" isFitted>
          <TabList pb={4}>
            <Tab>MAP</Tab>
            <Tab>LIST</Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0} py={4}>
              <Map longitude={14.11} latitude={46.36} zoom={9} />
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
