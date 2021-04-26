import { ReactElement } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import {
  Center,
  Heading,
  Text,
  VStack,
  Image,
  Box,
  BoxProps,
} from '@chakra-ui/react';

type Item = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
};

interface SliderProps extends BoxProps {
  items: Item[];
}

SwiperCore.use([Navigation, Pagination]);

export function Slider({ items, ...rest }: SliderProps): ReactElement {
  return (
    <Box mx={['-4', '0']} {...rest}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, bulletElement: 'button' }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/continents/${encodeURIComponent(item.id)}`}
              passHref={true}
            >
              <Center
                as="a"
                minH="lg"
                pos="relative"
                bg="gray.500"
                minHeight={['2xs', 'xs', 'md', 'lg', 'xl']}
              >
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  pos="absolute"
                  zIndex="base"
                  filter="brightness(0.5)"
                  minHeight={['2xs', 'xs', 'md', 'lg', 'xl']}
                  objectFit="cover"
                />
                <VStack zIndex="docked" p="4" textAlign="center">
                  <Heading as="strong" variant="primary">
                    {item.title}
                  </Heading>
                  <Text mt="4" variant="sliderDescription">
                    {item.description}
                  </Text>
                </VStack>
              </Center>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
