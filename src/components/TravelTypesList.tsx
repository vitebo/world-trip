import { ReactElement } from 'react';
import { SimpleGridProps, Flex, Box, Image, Text } from '@chakra-ui/react';

interface TravelTypeItem {
  type: string;
  imagePath: string;
}

interface TravelTypesListProps extends SimpleGridProps {
  items: TravelTypeItem[];
}

export function TravelTypesList({
  items,
  ...rest
}: TravelTypesListProps): ReactElement {
  return (
    <Flex as="ul" wrap="wrap" justify="space-around" {...rest}>
      {items.map((item) => (
        <Box
          key={item.imagePath}
          as="li"
          d="flex"
          alignItems="center"
          justifyContent="center"
          p="5"
          flexDirection={{
            base: 'row',
            lg: 'column',
          }}
          _before={{
            content: {
              base: `''`,
              lg: 'initial',
            },
            w: '2',
            height: '2',
            borderRadius: 'full',
            bg: 'yellow.500',
            d: 'block',
            mr: '2',
          }}
        >
          <Image
            src={item.imagePath}
            alt={item.type}
            mx="auto"
            mb="6"
            display={{
              base: 'none',
              lg: 'block',
            }}
          />
          <Text as="strong" variant="infoItemText">
            {item.type}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}
