import { ReactElement } from 'react';
import { Text, BoxProps, HStack, VStack, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface ContinentInfoProps extends BoxProps {
  title: string;
  value: string | number;
  description?: string;
}

export function InfoItem({
  title,
  value,
  description,
  ...rest
}: ContinentInfoProps): ReactElement {
  return (
    <VStack textAlign="center" {...rest}>
      <Text as="strong" variant="infoItemValue" color="yellow.500">
        {value}
      </Text>
      <Tooltip label={description} hasArrow={true} isDisabled={!description}>
        <HStack spacing="1.5">
          <Text variant="infoItemText">{title}</Text>
          {description && <InfoOutlineIcon color="gray.400" />}
        </HStack>
      </Tooltip>
    </VStack>
  );
}
