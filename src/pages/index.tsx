import { ReactElement, useEffect, useState } from 'react';
import { Container, Divider, Heading } from '@chakra-ui/react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { TripTypesList } from 'components/TripTypesList';
import { Slider } from 'components/Slider';

type TripTypeItem = {
  id: string;
  type: string;
  imagePath: string;
};

type Continent = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
};

type TripTypesResponse = {
  tripTypes: TripTypeItem[];
};

type ContinentsResponse = {
  continents: Continent[];
};

export default function Home(): ReactElement {
  const [tripTypeItems, setTripTypeItems] = useState<TripTypeItem[]>([]);
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    (async () => {
      const [{ tripTypes }, { continents }] = await Promise.all([
        api<TripTypesResponse>('/trip-types'),
        api<ContinentsResponse>('/continents'),
      ]);
      setTripTypeItems(tripTypes);
      setContinents(continents);
    })();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Container pb="20">
        <TripTypesList items={tripTypeItems} mt="28" />
        <Divider maxW="24" mx="auto" mt="20" />
        <Heading
          variant="secondary"
          colorScheme="dark"
          textAlign="center"
          mt="14"
          mb="14"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
        <Slider items={continents} />
      </Container>
    </>
  );
}
