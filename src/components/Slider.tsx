import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Center, Heading, Text, VStack, Image } from '@chakra-ui/react';

type Item = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
};

interface SliderProps {
  items: Item[];
}

SwiperCore.use([Navigation, Pagination]);

export function Slider({ items }: SliderProps): ReactElement {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, bulletElement: 'button' }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Center minH="lg" pos="relative">
            <Image
              src={item.imagePath}
              alt={item.title}
              pos="absolute"
              zIndex="base"
              filter="brightness(0.5)"
            />
            <VStack zIndex="docked">
              <Heading as="strong" variant="primary">
                {item.title}
              </Heading>
              <Text mt="4" variant="sliderDescription">
                {item.description}
              </Text>
            </VStack>
          </Center>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
