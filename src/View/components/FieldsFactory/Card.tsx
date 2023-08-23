import React from 'react';
import {Card, Text} from '@radix-ui/themes';

type Props = {label: string; value: string};

export default function CardComponent({label, value}: Props) {
  return (
    <Card asChild style={{maxWidth: 350}} variant="ghost">
      <>
        <Text as="div" color="gray" size="2" weight="medium">
          {label}
        </Text>
        <Text as="div" size="4" weight="medium">
          {value}
        </Text>
      </>
    </Card>
  );
}
