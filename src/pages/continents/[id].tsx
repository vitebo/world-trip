import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { SimpleGrid, Container, Heading } from '@chakra-ui/react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { DynamicBanner } from 'components/DynamicBanner';
import { ContinentInfo } from 'components/ContinentInfo';
import { CityCard } from 'components/CityCard';

type Info = {
  countries: number;
  languages: number;
  cities: number;
};

type City = {
  name: string;
  country: string;
  imagePath: string;
  flagImagePath: string;
};

type Continent = {
  id: string;
  title: string;
  imagePath: string;
  bio: string;
  info: Info;
  cities: City[];
};

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({
  continent,
}: ContinentPageProps): ReactElement {
  return (
    <>
      <Header showBackButton={true} />
      <DynamicBanner title={continent.title} imagePath={continent.imagePath} />
      <Container as="main" pb={['6', '8', '14', '16', '20']}>
        <ContinentInfo
          continent={continent}
          mt={['6', '8', '14', '16', '20']}
          as="section"
        />
        <Heading variant="secondary" mt={['8', '20']}>
          Cidades +100
        </Heading>
        <SimpleGrid
          as="ul"
          spacing={['5', '7', '9', '10', '12']}
          minChildWidth="16rem"
          mt={['5', '6', '7', '8', '9']}
        >
          {continent.cities.map((city) => (
            <CityCard
              as="li"
              key={city.name}
              name={city.name}
              country={city.country}
              imagePath={city.imagePath}
              flagImagePath={city.flagImagePath}
            ></CityCard>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await api<Continent[]>('/continents');
  const paths = continents.map(({ id }) => ({
    params: { id },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ContinentPageProps> = async ({
  params,
}) => {
  const continent = await api<Continent>(
    `/continents/${encodeURIComponent(String(params?.id))}`,
  );
  return {
    props: {
      continent,
    },
  };
};
