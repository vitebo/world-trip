import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import 'style/app.scss';
import { theme } from 'theme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
