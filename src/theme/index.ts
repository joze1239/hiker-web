import { extendTheme } from '@chakra-ui/react';
import { StyleConfig } from '@chakra-ui/theme-tools';
import { colors } from './colors';

export const theme: StyleConfig = extendTheme({
  colors,
  components: {
    Button: {
      variants: {
        link: () => ({
          _hover: {
            textDecoration: 'none',
          },
        }),
      },
    },
  },
});
