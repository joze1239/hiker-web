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
});
