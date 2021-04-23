import { ReactElement } from 'react';

import { Header } from 'components/Header';
import { Banner } from 'components/Banner';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
