import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const HomeMap: React.FC = () => {
  return (
    <div>
      <Box py={4}>
        <Image
          src="https://miro.medium.com/max/800/0*GYbrDqJt23n4ZAFL.png"
          width="100%"
          borderRadius="xl"
        />
      </Box>
    </div>
  );
};

export default HomeMap;
