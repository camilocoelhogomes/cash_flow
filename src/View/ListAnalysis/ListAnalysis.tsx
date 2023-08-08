import React from 'react';
import {Flex, Text, Button} from '@radix-ui/themes';

type Props = {};

export default function ListAnalysis({}: Props) {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
