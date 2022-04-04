import { CloseIcon } from '@chakra-ui/icons';
import { Box, Container, Slide, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedLocation,
  setSelectedLocation,
} from 'store/slices/locationSlice';
import LocationAttribute from './LocationAttribute';

const LocationDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectSelectedLocation);

  const onClose = () => {
    dispatch(setSelectedLocation(null));
  };

  if (!location) {
    return null;
  }

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

            <LocationAttribute name="Height" value={`${location.height}m`} />
            <LocationAttribute
              name="Mountain"
              value={location.mountain?.name}
            />
            <LocationAttribute name="URL" href={location.url} />
          </Box>
        </Container>
      </Box>
    </Slide>
  );
};

export default LocationDrawer;
