import { ReactElement } from 'react';
import { Container, Divider, Heading } from '@chakra-ui/react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { MainBanner } from 'components/MainBanner';
import { TravelTypesList } from 'components/TravelTypesList';
import { Slider } from 'components/Slider';
import { GetStaticProps } from 'next';

type TravelType = {
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
  travelTypes: TravelType[];
}

export default function Home({
  continents,
  travelTypes,
}: HomeProps): ReactElement {
  return (
    <>
      <Header />
      <MainBanner />
      <Container pb="20">
        <TravelTypesList items={travelTypes} mt="28" />
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
  const [travelTypes, continents] = await Promise.all([
    api<TravelType[]>('/travel-types'),
    api<Continent[]>('/continents'),
  ]);
  return {
    props: { travelTypes, continents },
  };
};
