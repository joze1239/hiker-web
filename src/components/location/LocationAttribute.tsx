import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

interface LocationAttributeProps {
  name: string;
  value?: string;
  href?: string;
}

const LocationAttribute: React.FC<LocationAttributeProps> = ({
  name,
  value,
  href,
}) => {
  return (
    <Flex mb={1}>
      <Text mr={1} fontWeight="semibold">
        {name}:
      </Text>

      {href && (
        <Link href={href} isExternal color="gray.600">
          {href}
        </Link>
      )}

      {value && <Text color="gray.600">{value}</Text>}
    </Flex>
  );
};

export default LocationAttribute;
