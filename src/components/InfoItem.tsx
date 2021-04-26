import { ReactElement } from 'react';
import { Text, StackProps, HStack, VStack, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface ContinentInfoProps extends StackProps {
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
          <Text as="span" variant="infoItemText">
            {title}
          </Text>
          {description && (
            <InfoOutlineIcon
              color="gray.400"
              display={{
                base: 'none',
                sm: 'block',
              }}
            />
          )}
        </HStack>
      </Tooltip>
    </VStack>
  );
}
