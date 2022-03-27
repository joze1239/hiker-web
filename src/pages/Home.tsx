import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Container maxW="container.lg" py={4}>
      <Box py={4}>
        <InputGroup>
          <InputLeftElement children={<SearchIcon color="gray.500" />} />
          <Input
            // value={value}
            //   onChange={handleChange}
            placeholder="Search"
            size="md"
            backgroundColor="gray.100"
            border="none"
            color="gray.800"
            _placeholder={{ color: 'gray.500' }}
            _focus={{
              border: 'none',
            }}
          />
        </InputGroup>
      </Box>

      <Flex justify="space-around" py={4}>
        <Button colorScheme="yellow">MAP</Button>
        <Button variant="link">LIST</Button>
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
