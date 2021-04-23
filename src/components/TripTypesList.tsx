import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Container,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface TripTypeItem {
  id: string;
  type: string;
  imagePath: string;
}

interface TripTypesListProps extends ChakraContainerProps {
  items: TripTypeItem[];
}

export function TripTypesList({
  items,
  ...rest
}: TripTypesListProps): ReactElement {
  return (
    <Container {...rest}>
      <SimpleGrid as="section" minChildWidth="10rem" spacing="10">
        {items.map((item) => (
          <Box key={item.id} textAlign="center">
            <Image src={item.imagePath} alt={item.type} mx="auto" />
            <Text mt="6" variant="tripTypesListText">
              {item.type}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
