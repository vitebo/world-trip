import { ReactElement } from 'react';
import { Image, VStack, Heading, Text, HStack, Box } from '@chakra-ui/react';

interface CityCardProps {
  name: string;
  country: string;
  imagePath: string;
  flagImagePath: string;
}

export function CityCard({
  name,
  country,
  imagePath,
  flagImagePath,
}: CityCardProps): ReactElement {
  return (
    <Box bg="white" borderRadius="base" overflow="hidden">
      <Image src={imagePath} h="44" w="100%" objectFit="cover" alt={name} />
      <HStack
        justify="space-between"
        w="100%"
        p="6"
        pt="5"
        border="1px"
        borderColor="yellow.400"
        borderTop="none"
        borderBottomRadius="base"
      >
        <VStack spacing="3" align="flex-start">
          <Heading as="strong" variant="cardHeading">
            {name}
          </Heading>
          <Text as="span" variant="cardDescription">
            {country}
          </Text>
        </VStack>
        <Image
          src={flagImagePath}
          borderRadius="full"
          w="8"
          h="8"
          alt={country}
        />
      </HStack>
    </Box>
  );
}
