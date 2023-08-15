import React from 'react';
import { Flex, Text, Dialog } from '@radix-ui/themes';

import { PlusIcon } from '@radix-ui/react-icons';
import { Forms } from '../components/FormFactory';
import Button from '../components/ButtonFactory/Button';
import { Fields } from '../components/InputFactory';


type Props = {};

export default function CreateAnalysis({ }: Props) {

  const disabled = true

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button><PlusIcon />Nova Análise</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Nova Análise</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Dados básicos
        </Dialog.Description>

        <Forms.Root className='space-y-4'>

          <Forms.Field name=''>
            <Forms.Label>Título</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name=''>
            <Forms.Label>Descrição</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Area />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name=''>
            <Forms.Label>Área Total</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type='number' />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name=''>
            <Forms.Label>Área Líquida Vendável (Área Média)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type='number' />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name=''>
            <Forms.Label>Área Verde (Decoração)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type='number' />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name=''>
            <Forms.Label>Área de preservação permanente</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type='number' />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name=''>
            <Forms.Label>Área de Vias</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type='number' />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name=''>
            <Forms.Label>Nº de Lotes</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type='number' />
            </Forms.Control>
          </Forms.Field>

          <Flex gap="3" mt="4" justify="end">
            <Button>
              Cancel
            </Button>
            <Forms.Submit state={'initial'} />
          </Flex>
        </Forms.Root>
      </Dialog.Content>
    </Dialog.Root>
  )
}
