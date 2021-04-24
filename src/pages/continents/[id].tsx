import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { api } from 'services/api';

type Continent = {
  id: string;
};

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({
  continent,
}: ContinentPageProps): ReactElement {
  console.log(continent);
  return <h1>{continent.id}</h1>;
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
