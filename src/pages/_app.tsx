import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
