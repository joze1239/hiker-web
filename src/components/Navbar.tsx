import { Container, Flex } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'utils/routes';

const Navbar: React.FC = () => {
  return (
    <Flex
      py={3}
      px={2}
      position="sticky"
      top={0}
      boxShadow="sm"
      backgroundColor="white"
      zIndex={10}
    >
      <Container maxW="container.lg">
        <Flex align="center" justify="center">
          <Link to={ROUTE.MAP}>
            <Logo />
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
