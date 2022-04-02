import {
  Box,
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
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import { setSearch } from 'store/slices/locationSlice';

const LocationFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState('');

  useDebounce(
    () => {
      dispatch(setSearch(value));
    },
    500,
    [value]
  );

  return (
    <>
      <Box py={4}>
        <Flex py={4} columnGap={4}>
          <InputGroup>
            <InputLeftElement
              height="100%"
              children={<Icon as={HiSearch} color="gray.400" boxSize={6} />}
            />
            <Input
              value={value}
              onChange={({ currentTarget }) => {
                setValue(currentTarget.value);
              }}
              placeholder="Search"
              size="lg"
              backgroundColor="gray.100"
              border="none"
              rounded="lg"
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
            rounded="lg"
            size="lg"
            onClick={onOpen}
          />
        </Flex>
      </Box>

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
