import { Container, Flex, Icon, Text } from '@chakra-ui/react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from 'utils/routes';

interface NavbarProps {
  logo?: boolean;
  back?: boolean;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo, back, title }) => {
  const navigate = useNavigate();

  return (
    <Flex
      position="sticky"
      top={0}
      boxShadow="sm"
      backgroundColor="white"
      zIndex={10}
    >
      <Container maxW="container.sm" height="60px">
        <Flex align="center" justify="center" h="100%" position="relative">
          {back && (
            <Icon
              onClick={() => navigate(-1)}
              as={HiArrowLeft}
              cursor="pointer"
              boxSize={6}
              position="absolute"
              left={0}
            />
          )}

          {logo && (
            <Link to={ROUTE.HOME}>
              <Logo />
            </Link>
          )}

          {title && (
            <Text fontSize="lg" fontWeight="semibold">
              {title}
            </Text>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
