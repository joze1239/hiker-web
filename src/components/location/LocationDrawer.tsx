import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Slide, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaParking } from 'react-icons/fa';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineFlag,
  HiOutlineLightBulb,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';
import { VisitDate } from 'types/VisitDate';
import LocationAttribute from './LocationAttribute';

const LocationDrawer: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useSelector(selectSelectedLocation);

  const onClose = () => {
    dispatch(setSelectedLocation(null));
  };

  if (!location) {
    return null;
  }

  const stringifyVisitedAt = (visitedAt: VisitDate[]) => {
    return visitedAt
      .map(
        (visit) => `${visit.date} ${visit.endDate ? `- ${visit.endDate}` : ''}`
      )
      .join(`\n`);
  };

  return (
    <Slide direction="bottom" in={!!location} style={{ zIndex: 10 }}>
      <Box
        width="100%"
        py={6}
        borderTop="1px"
        borderColor="gray.300"
        bg="white"
      >
        <Container maxW="container.md">
          <Box position="relative">
            <CloseIcon
              onClick={() => onClose()}
              boxSize={3}
              position="absolute"
              top={0}
              right={0}
              cursor="pointer"
            />

            <Text mb={4} fontSize="xl" fontWeight="bold">
              {location.name}
            </Text>

            {location.address && (
              <LocationAttribute
                icon={HiOutlineLocationMarker}
                value={location.address}
              />
            )}

            {location.parking && (
              <LocationAttribute icon={FaParking} value={location.parking} />
            )}

            {location.height && (
              <LocationAttribute
                icon={HiOutlineFlag}
                value={`${location.height}m - ${location.mountain?.name}`}
              />
            )}

            {location.walkTime && (
              <LocationAttribute
                icon={HiOutlineClock}
                value={location.walkTime}
              />
            )}

            {location.visitedAt?.length > 0 && (
              <LocationAttribute
                icon={HiOutlineCalendar}
                value={stringifyVisitedAt(location.visitedAt)}
              />
            )}

            {location.note && (
              <LocationAttribute
                icon={HiOutlineLightBulb}
                value={location.note}
              />
            )}

            {location.url && (
              <Button
                onClick={() => window.open(location.url, '_blank')}
                w="100%"
                mt={4}
                colorScheme="primary"
              >
                {t('viewDetails')}
              </Button>
            )}
          </Box>
        </Container>
      </Box>
    </Slide>
  );
};

export default LocationDrawer;
