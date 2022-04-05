import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface LocationAttributeProps {
  value: string;
  icon: IconType;
  size?: 'sm' | 'md';
}

const LocationAttribute: React.FC<LocationAttributeProps> = ({
  value,
  icon,
  size,
}) => {
  return (
    <Flex mb={size == 'md' ? 2 : 1}>
      <Flex mr={2} h={size == 'md' ? 6 : 5} align="center">
        <Icon as={icon} color="gray.600" boxSize={size == 'md' ? 5 : 4} />
      </Flex>
      {value && (
        <Text fontSize={size} color="gray.600" whiteSpace="pre-line">
          {value}
        </Text>
      )}
    </Flex>
  );
};

LocationAttribute.defaultProps = {
  size: 'md',
};

export default LocationAttribute;
