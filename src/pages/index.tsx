import { ReactElement } from 'react';

import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { TripTypesList } from 'components/TripTypesList';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <Banner />
      <TripTypesList mt="28" />
    </>
  );
}
