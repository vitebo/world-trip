import { ReactElement } from 'react';
import { Center, Image } from '@chakra-ui/react';

export function Header(): ReactElement {
  return (
    <Center as="header" bg="white" p="7">
      <Image src="/images/logo.svg" alt="World Trip Logo" />
    </Center>
  );
}
