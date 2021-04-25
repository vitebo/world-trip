import { ReactElement } from 'react';
import { Container, Divider, Heading } from '@chakra-ui/react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { MainBanner } from 'components/MainBanner';
import { TripTypesList } from 'components/TripTypesList';
import { Slider } from 'components/Slider';
import { GetStaticProps } from 'next';

type TripType = {
  type: string;
  imagePath: string;
};

type Continent = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
};

interface HomeProps {
  continents: Continent[];
  tripTypes: TripType[];
}

export default function Home({
  continents,
  tripTypes,
}: HomeProps): ReactElement {
  return (
    <>
      <Header />
      <MainBanner />
      <Container pb="20">
        <TripTypesList items={tripTypes} mt="28" />
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [tripTypes, continents] = await Promise.all([
    api<TripType[]>('/trip-types'),
    api<Continent[]>('/continents'),
  ]);
  return {
    props: { tripTypes, continents },
  };
};
