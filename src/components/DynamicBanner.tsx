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
    <Flex
      as="figure"
      alignItems="flex-end"
      pos="relative"
      overflowY="hidden"
      bg="gray.500"
    >
      <Image
        src={imagePath}
        alt={title}
        pos="absolute"
        filter="brightness(0.5)"
        objectFit="cover"
        minHeight={['40', '64', '80', 'md', 'lg']}
        w="100%"
      />
      <Container
        as="figcaption"
        zIndex="docked"
        h={['40', '64', '80', 'md', 'lg']}
        alignItems={{
          base: 'center',
          lg: 'flex-end',
        }}
        justifyContent={{
          base: 'center',
          lg: 'start',
        }}
        display="flex"
      >
        <Heading
          as="h1"
          variant="primary"
          my={{
            base: 0,
            lg: '16',
          }}
        >
          {title}
        </Heading>
      </Container>
    </Flex>
  );
}
