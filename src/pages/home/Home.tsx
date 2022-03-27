import {
  Button,
  Container,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineAdjustments, HiSearch } from 'react-icons/hi';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../utils/routes';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Container maxW="container.lg" py={4}>
      <Flex py={4} columnGap={4}>
        <InputGroup>
          <InputLeftElement
            height="100%"
            children={<Icon as={HiSearch} color="gray.400" boxSize={6} />}
          />
          <Input
            // value={value}
            // onChange={handleChange}
            placeholder="Search"
            size="lg"
            backgroundColor="gray.100"
            border="none"
            borderRadius="lg"
            color="gray.800"
            _placeholder={{ color: 'gray.400' }}
            _focus={{
              border: 'none',
            }}
          />
        </InputGroup>

        <IconButton
          aria-label="Filter"
          icon={<HiOutlineAdjustments />}
          colorScheme="primary"
          borderRadius="lg"
          size="lg"
        />
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} py={4}>
        <Button
          colorScheme={isActive(ROUTE.MAP) ? 'primary' : 'gray'}
          variant={isActive(ROUTE.MAP) ? 'solid' : 'link'}
          borderRadius="full"
          onClick={() => navigate(ROUTE.MAP)}
        >
          MAP
        </Button>
        <Button
          colorScheme={isActive(ROUTE.LOCATIONS) ? 'primary' : 'gray'}
          variant={isActive(ROUTE.LOCATIONS) ? 'solid' : 'link'}
          borderRadius="full"
          onClick={() => navigate(ROUTE.LOCATIONS)}
        >
          LIST
        </Button>
      </Grid>

      <Outlet />
    </Container>
  );
};

export default Home;
