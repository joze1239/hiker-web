import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineAdjustments, HiSearch } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../utils/routes';

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

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
          colorScheme="primary"
          borderRadius="full"
          onClick={() => navigate(ROUTE.MAP)}
        >
          MAP
        </Button>
        <Button variant="link" onClick={() => navigate(ROUTE.LIST)}>
          LIST
        </Button>
      </Grid>

      <Box py={4}>
        <Image
          src="https://miro.medium.com/max/800/0*GYbrDqJt23n4ZAFL.png"
          width="100%"
          borderRadius="xl"
        />
      </Box>
    </Container>
  );
};

export default MapPage;
