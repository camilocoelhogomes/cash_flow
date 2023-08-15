import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import React from 'react';
import { IAnalisys } from '../../utils/Common/Interfaces';

type Props = {
  analysis: IAnalisys
};

export default function GetAnalysis({ analysis }: Props) {
  return <Dialog.Root>
    <Dialog.Trigger>
      <button className='py-4 px-4 outline outline-1 rounded-md inline-flex transition-colors duration-300 font-semibold
      outline-slate-300 hover:bg-slate-300
      dark:hover:bg-slate-500 dark:outline-slate-500'>{analysis.analisysNm}</button>
    </Dialog.Trigger>

    <Dialog.Content className='bg-slate-600'>
      <Dialog.Title>Análise - {analysis.analisysNm}</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        {analysis.analisysDs}
      </Dialog.Description>

      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Name
          </Text>
          <TextField.Input
            defaultValue="Freja Johnsen"
            placeholder="Enter your full name"
          />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Email
          </Text>
          <TextField.Input
            defaultValue="freja@example.com"
            placeholder="Enter your email"
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button>Save</Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  </Dialog.Root>
}
