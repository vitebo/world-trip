import { ReactElement } from 'react';
import { Flex, Heading, Text, Container, Image } from '@chakra-ui/react';

export function MainBanner(): ReactElement {
  return (
    <Flex
      align="center"
      as="figure"
      bgImage="url(/images/banner-background.jpg)"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH={['44', '56', '72', 'xs', 'sm']}
      position="relative"
    >
      <Container as="figcaption">
        <Heading as="h2" maxW="md" variant="secondary" colorScheme="light">
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text variant="bannerDescription" mt={['2', '3', '4', '5']} maxW="xl">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Container>
      <Image
        src="/images/banner-airplane.svg"
        position="absolute"
        transition="right 250ms"
        display={{
          base: 'none',
          lg: 'block',
        }}
        right={{
          lg: '4',
          xl: '36',
        }}
        bottom="-8"
      />
    </Flex>
  );
}
