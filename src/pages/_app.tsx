import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'theme';
import { makeServer } from 'mock';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
