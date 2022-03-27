import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import React from 'react';

interface SidebarFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filter</DrawerHeader>
        <DrawerBody>Sidebar</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarFilter;
