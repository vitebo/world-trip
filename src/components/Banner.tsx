import { ReactElement } from 'react';
import { Flex, Heading, Text, Container, Image } from '@chakra-ui/react';

export function Banner(): ReactElement {
  return (
    <Flex
      align="center"
      as="section"
      bgImage="url(/images/banner-background.jpg)"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="sm"
      position="relative"
    >
      <Container>
        <Heading as="h2" maxW="md" variant="secondary" colorScheme="light">
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text variant="bannerDescription" mt="5" maxW="xl">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Container>
      <Image
        src="/images/banner-airplane.svg"
        position="absolute"
        transition="right 250ms"
        right={{
          base: '-100%',
          lg: '4',
          xl: '36',
        }}
        bottom="-8"
      />
    </Flex>
  );
}
