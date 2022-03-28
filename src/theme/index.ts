import { extendTheme } from '@chakra-ui/react';
import { StyleConfig } from '@chakra-ui/theme-tools';
import { colors } from 'theme/colors';

export const theme: StyleConfig = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: { _focus: { boxShadow: 'none' } },
      variants: {
        link: () => ({
          _hover: {
            textDecoration: 'none',
          },
        }),
      },
    },
  },
  styles: {
    global: {
      '.mapboxgl-ctrl-geocoder': {
        height: '30px',
        fontSize: '14px',
      },
      '.mapboxgl-ctrl-geocoder.mapboxgl-ctrl-geocoder--collapsed': {
        width: '30px',
        minWidth: '30px',
      },
      '.mapboxgl-ctrl-geocoder--icon': {
        top: '5px',
        left: '5px',
        width: '20px',
        height: '20px',
      },
      '.mapboxgl-ctrl-geocoder--icon-close': {
        marginTop: '-1px',
        marginRight: 0,
        width: '16px',
        height: '16px',
      },
      '.mapboxgl-ctrl-geocoder--input': {
        height: '30px',
        padding: '6px 35px',
      },
    },
  },
});
