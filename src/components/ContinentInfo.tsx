import { ReactElement } from 'react';
import { Text, Container, SimpleGrid, ContainerProps } from '@chakra-ui/react';

import { InfoItem } from 'components/InfoItem';

type Continent = {
  bio: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
};

interface ContinentInfoProps extends ContainerProps {
  continent: Continent;
}

export function ContinentInfo({
  continent,
  ...rest
}: ContinentInfoProps): ReactElement {
  return (
    <Container display="flex" {...rest}>
      <SimpleGrid
        spacing="10"
        minChildWidth={['100%', '100%', '36rem']}
        alignItems="center"
      >
        <Text variant="continentInfoBio" textAlign="justify">
          {continent.bio}
        </Text>
        <SimpleGrid spacing="10" minChildWidth="10rem">
          <InfoItem title="países" value={continent.info.countries} />
          <InfoItem title="línguas" value={continent.info.languages} />
          <InfoItem title="cidades" value={continent.info.cities} />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
}
