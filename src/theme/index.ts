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
          fontSize: ['3xl', '4xl'],
          lineHeight: 'base',
          fontWeight: 'medium',
        }),
        primary: {
          fontSize: ['4xl', '4xl', '4xl', '4xl', '5xl'],
          lineHeight: 'base',
          fontWeight: 'bold',
          color: 'gray.100',
        },
        cardHeading: {
          fontSize: 'xl',
          lineHeight: 'shorter',
          fontWeight: 'semibold',
          color: 'gray.600',
        },
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
        infoItemText: {
          fontSize: '2xl',
          fontWeight: 'semibold',
          lineHeight: 'base',
          color: 'gray.600',
        },
        infoItemValue: {
          fontSize: '5xl',
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
        continentInfoBio: {
          fontSize: ['sm', '2xl'],
          lineHeight: 'base',
          fontWeight: 'normal',
          color: 'gray.600',
        },
        cardDescription: {
          fontSize: 'md',
          lineHeight: 'tall',
          color: 'gray.400',
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
