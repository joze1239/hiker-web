import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface LocationAttributeProps {
  value: string;
  icon: IconType;
  size?: 'sm' | 'md';
  align?: 'center' | 'flex-start' | 'flex-end';
}

const LocationAttribute: React.FC<LocationAttributeProps> = ({
  value,
  icon,
  size,
  align,
}) => {
  return (
    <Flex mb={size == 'md' ? 2 : 1} align={align}>
      <Icon as={icon} mr={2} color="gray.600" boxSize={size == 'md' ? 5 : 4} />
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
  align: 'center',
};

export default LocationAttribute;
