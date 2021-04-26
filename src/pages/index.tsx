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
      <Container as="main" pb={['6', '8', '14', '16', '20']}>
        <TravelTypesList
          items={travelTypes}
          mt={['4', '8', '16', '24', '28']}
        />
        <Divider maxW="24" mx="auto" mt={['9', '12', '14', '16', '20']} />
        <Heading
          variant="secondary"
          colorScheme="dark"
          textAlign="center"
          mt={['6', '8', '9', '12', '14']}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
        <Slider
          as="section"
          items={continents}
          mt={['5', '8', '9', '12', '14']}
        />
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
