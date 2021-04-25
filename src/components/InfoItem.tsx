import { ReactElement } from 'react';
import { Text, Box, Image, BoxProps } from '@chakra-ui/react';

interface ContinentInfoProps extends BoxProps {
  title: string;
  value: string | number;
  imagePath?: string;
}

export function InfoItem({
  title,
  value,
  imagePath,
  ...rest
}: ContinentInfoProps): ReactElement {
  return (
    <Box textAlign="center" {...rest}>
      {imagePath ? (
        <Image src={imagePath} alt={String(value)} mx="auto" mb="6" />
      ) : (
        <Text as="strong" variant="infoItemValue" color="yellow.500">
          {value}
        </Text>
      )}
      <Text variant="infoItemText">{title}</Text>
    </Box>
  );
}
