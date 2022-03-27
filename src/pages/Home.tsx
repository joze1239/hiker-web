import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineAdjustments, HiSearch } from 'react-icons/hi';

const Home: React.FC = () => {
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

      <Flex justify="space-around" py={4}>
        <Button colorScheme="primary" flex={1} borderRadius="full">
          MAP
        </Button>
        <Button variant="link" flex={1}>
          LIST
        </Button>
      </Flex>

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

export default Home;
