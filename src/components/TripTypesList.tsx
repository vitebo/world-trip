import {
  Flex,
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
      <Flex as="section" justify="space-around">
        {items.map((item) => (
          <Box key={item.id} textAlign="center">
            <Image src={item.imagePath} alt={item.type} mx="auto" />
            <Text mt="6" variant="tripTypesListText">
              {item.type}
            </Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
