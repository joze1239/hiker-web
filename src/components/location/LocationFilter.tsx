import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineAdjustments, HiSearch } from 'react-icons/hi';

const LocationFilter: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container py={4}>
        <Flex py={4} columnGap={4}>
          <InputGroup>
            <InputLeftElement
              height="100%"
              children={<Icon as={HiSearch} color="gray.400" boxSize={6} />}
            />
            <Input
              // value={value}
              // onChange={handleChange}
              placeholder="Search"
              size="lg"
              backgroundColor="gray.100"
              border="none"
              borderRadius="lg"
              color="gray.800"
              _placeholder={{ color: 'gray.400' }}
              _focus={{
                border: 'none',
              }}
            />
          </InputGroup>

          <IconButton
            aria-label="Filter"
            icon={<HiOutlineAdjustments />}
            colorScheme="primary"
            borderRadius="lg"
            size="lg"
            onClick={onOpen}
          />
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>
          <DrawerBody>Sidebar</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LocationFilter;
