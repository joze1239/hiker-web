import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { HiOutlineAdjustments, HiSearch, HiX } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import { useGetLocationTypeListQuery } from 'store/services/locationType';
import { setSearch } from 'store/slices/locationSlice';

const LocationFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState('');
  const { data: locationTypes } = useGetLocationTypeListQuery();

  useDebounce(
    () => {
      dispatch(setSearch(value));
    },
    500,
    [value]
  );

  const clearSearch = () => {
    setValue('');
    dispatch(setSearch(''));
  };

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Box py={4}>
        <Flex py={4} columnGap={4}>
          <InputGroup size="lg">
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
              bg="gray.100"
              border="none"
              rounded="lg"
              color="gray.800"
              _placeholder={{ color: 'gray.400' }}
              _focus={{
                border: 'none',
              }}
            />
            {!!value && (
              <InputRightElement
                height="100%"
                onClick={clearSearch}
                children={<Icon as={HiX} color="gray.400" boxSize={6} />}
              />
            )}
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
          <DrawerBody>
            <Stack>
              {locationTypes?.map((locationType) => (
                <Checkbox colorScheme="primary">{locationType.name}</Checkbox>
              ))}
              {locationTypes?.map((locationType) => (
                <Checkbox colorScheme="primary" size="lg">
                  {locationType.name}
                </Checkbox>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="primary" w="100%">
              RESET FILTERS
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LocationFilter;
