import { ReactElement } from 'react';
import { Text, SimpleGrid, SimpleGridProps, HStack } from '@chakra-ui/react';

import { InfoItem } from 'components/InfoItem';

type Continent = {
  bio: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
};

interface ContinentInfoProps extends SimpleGridProps {
  continent: Continent;
}

export function ContinentInfo({
  continent,
  ...rest
}: ContinentInfoProps): ReactElement {
  return (
    <SimpleGrid spacing="10" columns={[1, 1, 1, 2]} {...rest}>
      <Text variant="continentInfoBio" textAlign="justify">
        {continent.bio}
      </Text>
      <HStack spacing="10" mx="auto">
        <InfoItem title="países" value={continent.info.countries} />
        <InfoItem title="línguas" value={continent.info.languages} />
        <InfoItem
          title="cidades +100"
          value={continent.info.cities}
          description="cidades que estão entre as 100 cidades mais visitadas do mundo"
        />
      </HStack>
    </SimpleGrid>
  );
}
