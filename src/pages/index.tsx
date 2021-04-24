import { ReactElement } from 'react';
import { Container, Divider, Heading, Box } from '@chakra-ui/react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
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
      <Banner />
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
        <Box margin={['-4', '0']}>
          <Slider items={continents} />
        </Box>
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
