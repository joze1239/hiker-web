import {
  Button,
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
import ToggleTag from 'components/ToggleTag';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineAdjustments, HiSearch, HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';
import { RootState } from 'store';
import { useGetLocationTypeListQuery } from 'store/services/locationTypeApi';
import {
  clearLocationTypes,
  setSearch,
  toggleLocationType,
} from 'store/slices/locationSlice';
import { colors } from 'theme/colors';

const LocationFilter: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState('');
  const filters = useSelector((state: RootState) => state.location.filters);
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

  return (
    <>
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
            placeholder={t('search')}
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

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t('filters')}</DrawerHeader>
          <DrawerBody>
            <Stack>
              {locationTypes?.map((locationType) => (
                <ToggleTag
                  key={locationType.id}
                  label={locationType.name || ''}
                  color={locationType.color || colors.primary[500]}
                  checked={filters.locationTypes.includes(locationType.id)}
                  size="lg"
                  onClick={() => dispatch(toggleLocationType(locationType.id))}
                />
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onClick={() => dispatch(clearLocationTypes())}
              colorScheme="primary"
              w="100%"
            >
              {t('resetFilters')}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LocationFilter;
