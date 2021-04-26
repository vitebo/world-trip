import { extendTheme } from '@chakra-ui/react';

import { Text } from 'theme/components/text';
import { Heading } from 'theme/components/heading';
import { Container } from 'theme/components/container';
import { Divider } from 'theme/components/divider';

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
    Text,
    Heading,
    Container,
    Divider,
  },
});
