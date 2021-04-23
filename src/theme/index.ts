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
    Heading: {
      variants: {
        secondary: ({ colorScheme }) => ({
          color: colorScheme === 'dark' ? 'gray.600' : 'gray.100',
          fontSize: '4xl',
          lineHeight: 'base',
          fontWeight: 'medium',
        }),
        primary: () => ({
          fontSize: '5xl',
          lineHeight: 'base',
          fontWeight: 'bold',
          color: 'gray.100',
        }),
      },
      defaultProps: {
        colorScheme: 'dark',
      },
    },
    Text: {
      variants: {
        bannerDescription: {
          fontSize: 'xl',
          color: 'gray.300',
          lineHeight: 'base',
        },
        tripTypesListText: {
          fontSize: '2xl',
          fontWeight: 'semibold',
          lineHeight: 'base',
          color: 'gray.600',
        },
        sliderDescription: {
          fontSize: '2xl',
          lineHeight: 'base',
          fontWeight: 'bold',
          color: 'gray.300',
        },
      },
    },
    Divider: {
      baseStyle: {
        borderBottomWidth: '2px',
        borderColor: 'gray.700',
      },
    },
  },
});
