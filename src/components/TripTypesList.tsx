import { SimpleGridProps, SimpleGrid } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { InfoItem } from 'components/InfoItem';

interface TripTypeItem {
  type: string;
  imagePath: string;
}

interface TripTypesListProps extends SimpleGridProps {
  items: TripTypeItem[];
}

export function TripTypesList({
  items,
  ...rest
}: TripTypesListProps): ReactElement {
  return (
    <SimpleGrid as="section" spacing="10" minChildWidth="10rem" {...rest}>
      {items.map((item) => (
        <InfoItem
          key={item.type}
          title={item.type}
          imagePath={item.imagePath}
          value={item.type}
        />
      ))}
    </SimpleGrid>
  );
}
