import { ReactElement } from 'react';
import NextLink from 'next/link';
import { Center, Image, Link as ChakraLink } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps): ReactElement {
  return (
    <Center as="header" bg="white" p="7">
      {showBackButton && (
        <NextLink href="/" passHref={true}>
          <ChakraLink pos="absolute" left="7">
            <ChevronLeftIcon w="8" h="8" color="gray.600" />
          </ChakraLink>
        </NextLink>
      )}
      <Image src="/images/logo.svg" alt="World Trip Logo" />
    </Center>
  );
}
