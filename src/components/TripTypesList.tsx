import {
  Flex,
  Box,
  Image,
  Text,
  Container,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

type TripTypesListProps = ChakraContainerProps;

const types = [
  {
    id: '1',
    text: 'vida noturna',
    imagePath: '/svgs/cocktail.svg',
  },
  {
    id: '2',
    text: 'praia',
    imagePath: '/svgs/surf.svg',
  },
  {
    id: '3',
    text: 'moderno',
    imagePath: '/svgs/building.svg',
  },
  {
    id: '4',
    text: 'clássico',
    imagePath: '/svgs/museum.svg',
  },
  {
    id: '5',
    text: 'e mais...',
    imagePath: '/svgs/earth.svg',
  },
];

export function TripTypesList({ ...rest }: TripTypesListProps): ReactElement {
  return (
    <Container {...rest}>
      <Flex as="section" justify="space-around">
        {types.map((type) => (
          <Box key={type.id} textAlign="center">
            <Image src={type.imagePath} alt={type.text} mx="auto" />
            <Text mt="6" variant="tripTypesListText">
              {type.text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
