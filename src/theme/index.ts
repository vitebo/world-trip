import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        overflowX: 'hidden',
      },
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  sizes: {
    container: {
      '2xl': '1240px',
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.2xl',
      },
    },
  },
});
