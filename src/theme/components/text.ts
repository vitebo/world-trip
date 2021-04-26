import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const Text: ComponentSingleStyleConfig = {
  variants: {
    bannerDescription: {
      fontSize: ['sm', 'sm', 'md', 'lg', 'xl'],
      color: 'gray.300',
      lineHeight: 'base',
    },
    sliderDescription: {
      fontSize: ['sm', 'md', 'lg', 'xl', '2xl'],
      lineHeight: 'base',
      fontWeight: 'bold',
      color: 'gray.300',
    },
    infoItemText: {
      fontSize: ['lg', 'lg', 'xl', '2xl', '2xl'],
      fontWeight: ['normal', 'semibold'],
      lineHeight: 'base',
      color: 'gray.600',
    },
    infoItemValue: {
      fontSize: ['2xl', '2xl', '3xl', '4xl', '5xl'],
      fontWeight: 'semibold',
      lineHeight: 'base',
      color: 'gray.600',
    },
    travelType: {
      fontSize: ['lg', 'lg', 'xl', '2xl', '2xl'],
      fontWeight: 'semibold',
      lineHeight: 'base',
      color: 'gray.600',
    },
    continentInfoBio: {
      fontSize: ['sm', 'md', 'lg', 'xl', '2xl'],
      lineHeight: 'base',
      fontWeight: 'normal',
      color: 'gray.600',
    },
    cardDescription: {
      fontSize: ['sm', 'sm', 'md', 'md', 'md'],
      lineHeight: 'tall',
      color: 'gray.400',
    },
  },
};
