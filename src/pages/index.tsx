import { ReactElement, useEffect, useState } from 'react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { TripTypesList } from 'components/TripTypesList';

interface TripTypeItem {
  id: string;
  type: string;
  imagePath: string;
}

type TripTypesResponse = Promise<{
  tripTypes: TripTypeItem[];
}>;

export default function Home(): ReactElement {
  const [tripTypeItems, setTripTypeItems] = useState<TripTypeItem[]>([]);

  useEffect(() => {
    (async () => {
      const { tripTypes } = await api<TripTypesResponse>('/trip-types');
      setTripTypeItems(tripTypes);
    })();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <TripTypesList items={tripTypeItems} mt="28" />
    </>
  );
}
