import { ReactElement } from 'react';
import { Flex, Heading, Container, Image } from '@chakra-ui/react';

interface DynamicBannerProps {
  title: string;
  imagePath: string;
}

export function DynamicBanner({
  title,
  imagePath,
}: DynamicBannerProps): ReactElement {
  return (
    <Flex alignItems="flex-end" pos="relative" overflowY="hidden" bg="gray.500">
      <Image
        src={imagePath}
        alt={title}
        pos="absolute"
        filter="brightness(0.5)"
        objectFit="cover"
        minHeight={{
          base: 'sm',
          lg: 'lg',
        }}
        w="100%"
      />
      <Container
        zIndex="docked"
        h={{
          base: 'sm',
          lg: 'lg',
        }}
        alignItems="flex-end"
        display="flex"
      >
        <Heading as="h1" variant="primary" my="16">
          {title}
        </Heading>
      </Container>
    </Flex>
  );
}
