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
    <SimpleGrid
      spacing={['4', '6', '7', '8', '10']}
      columns={{
        base: 1,
        lg: 2,
      }}
      {...rest}
    >
      <Text variant="continentInfoBio" textAlign="justify">
        {continent.bio}
      </Text>
      <HStack
        as="ul"
        spacing={['5', '6', '8', '9', '10']}
        mx={{
          base: '0',
          lg: 'auto',
        }}
      >
        <InfoItem title="países" value={continent.info.countries} as="li" />
        <InfoItem title="línguas" value={continent.info.languages} as="li" />
        <InfoItem
          title="cidades +100"
          value={continent.info.cities}
          description="cidades que estão entre as 100 cidades mais visitadas do mundo"
        />
      </HStack>
    </SimpleGrid>
  );
}
