import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';

import { api } from 'services/api';
import { Header } from 'components/Header';
import { DynamicBanner } from 'components/DynamicBanner';

type Continent = {
  id: string;
  title: string;
  imagePath: string;
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
