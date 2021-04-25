import { ReactElement } from 'react';
import NextLink from 'next/link';
import { Container, Image, Link as ChakraLink, Box } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps): ReactElement {
  return (
    <Box as="header" bg="white">
      <Container py="7" display="flex" alignItems="center">
        {showBackButton && (
          <NextLink href="/" passHref={true}>
            <ChakraLink pos="absolute">
              <ChevronLeftIcon w={['4', '8']} h={['4', '8']} color="gray.600" />
            </ChakraLink>
          </NextLink>
        )}
        <Image
          src="/images/logo.svg"
          alt="World Trip Logo"
          h={['5', 'auto']}
          mx="auto"
        />
      </Container>
    </Box>
  );
}
