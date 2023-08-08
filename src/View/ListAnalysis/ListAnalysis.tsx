import React from 'react';
import { Flex, Text, Button } from '@radix-ui/themes';
import { container } from 'tsyringe';
import { CreateAnalisys } from '../../Controller/Analisys/CreateAnalistys';

type Props = {};

export default function ListAnalysis({ }: Props) {
  const listFunction = container.resolve(CreateAnalisys)

  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button color='brown'>Let's go</Button>
    </Flex>
  );
}
