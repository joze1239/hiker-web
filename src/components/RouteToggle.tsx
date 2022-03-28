import { Button, Container, Grid } from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IRoute {
  to: string;
  name: string;
}

interface RouteToggleProps {
  routes: IRoute[];
}

const RouteToggle: React.FC<RouteToggleProps> = ({ routes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Container py={4}>
      <Grid templateColumns={`repeat(${routes.length}, 1fr)`} gap={6} py={4}>
        {routes.map((route) => (
          <Button
            colorScheme={isActive(route.to) ? 'primary' : 'gray'}
            variant={isActive(route.to) ? 'solid' : 'link'}
            borderRadius="full"
            onClick={() => navigate(route.to)}
          >
            {route.name}
          </Button>
        ))}
      </Grid>
    </Container>
  );
};

export default RouteToggle;
