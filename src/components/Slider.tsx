import { ReactElement } from 'react';
import Link from 'next/link';
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
          <Link
            href={`/continents/${encodeURIComponent(item.id)}`}
            passHref={true}
          >
            <Center
              as="a"
              minH="lg"
              pos="relative"
              bg="gray.500"
              minHeight="sm"
            >
              <Image
                src={item.imagePath}
                alt={item.title}
                pos="absolute"
                zIndex="base"
                filter="brightness(0.5)"
                minHeight="xl"
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
  );
}
