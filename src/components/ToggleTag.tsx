import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Tag, TagLabel, TagLeftIcon, TagRightIcon } from '@chakra-ui/react';
import React from 'react';

interface ToggleTagProps {
  label: string;
  color: string;
  checked: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
}

const ToggleTag: React.FC<ToggleTagProps> = ({
  label,
  color,
  checked,
  size = 'md',
  onClick,
}) => {
  return (
    <Tag
      borderRadius="full"
      bg={checked ? 'white' : color}
      size={size}
      variant={checked ? 'outline' : 'solid'}
      onClick={onClick}
      cursor="pointer"
      boxShadow={`inset 0 0 0px 1px ${color}`}
    >
      {!checked && (
        <TagLeftIcon
          color={checked ? color : 'white'}
          boxSize="12px"
          as={AddIcon}
        />
      )}
      <TagLabel color={checked ? color : 'white'} flex={1}>
        {label}
      </TagLabel>
      {checked && (
        <TagRightIcon
          color={checked ? color : 'white'}
          boxSize="10px"
          as={CloseIcon}
        />
      )}
    </Tag>
  );
};

export default ToggleTag;
