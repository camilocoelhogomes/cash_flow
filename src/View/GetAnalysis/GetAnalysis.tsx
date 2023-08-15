import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import React from 'react';
import { IAnalisys } from '../store/tempEntity';
import { Fields } from '../components/InputFactory';
import { getALV } from '../store/tempMethods';


type Props = {
  analysis: IAnalisys
};

export default function GetAnalysis({ analysis }: Props) {
  return <Dialog.Root>
    <Dialog.Trigger>
      <button className='py-4 px-4 outline outline-1 rounded-md inline-flex transition-colors duration-300 font-semibold
      outline-slate-300 hover:bg-slate-300
      dark:hover:bg-slate-500 dark:outline-slate-500'>{analysis.id} | {analysis.title}</button>
    </Dialog.Trigger>

    <Dialog.Content style={{ minWidth: '95%', minHeight: '95%' }}>
      <Dialog.Title>Análise {analysis.id} - {analysis.title}</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        {analysis.description}
      </Dialog.Description>

      <div className='grid grid-cols-3 space-y-1'>


        <Fields.Card label='Área Total m²' value={analysis.totalArea.toString()} />
        <Fields.Card label='Área Preservada m²' value={analysis.protectedArea.toString()} />
        <Fields.Card label='Área de Vias m²' value={analysis.streetArea.toString()} />
        <Fields.Card label='Área Verde m²' value={analysis.decorationArea.toString()} />
        <Fields.Card label='Nº de Lotes' value={analysis.slots.toString()} />
        <Fields.Card label='Área Líquida Vendável m²' value={getALV(analysis)} />

      </div>

      <Dialog.Close>
        <Button variant="soft" color="gray">
          OK
        </Button>
      </Dialog.Close>

    </Dialog.Content>
  </Dialog.Root>
}
