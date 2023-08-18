import React from 'react'
import { Scenario } from '../../Model/Entitys/Scenario'
import { Tabs, Box, Text, Separator } from '@radix-ui/themes'
import { Fields } from '../components/FieldsFactory'
type Props = {
  scenarios: Scenario[]
}

export default function ScenariosCard({ scenarios }: Props) {

  return (
    <Tabs.Root defaultValue={scenarios[0].id.toString()}>
      <Tabs.List>
        <Tabs.Trigger value={'resume'} key={'resume'}>Resumo</Tabs.Trigger>
        {scenarios.map(item => <Tabs.Trigger value={item.id.toString()} key={item.id}>{item.scenarioNm}</Tabs.Trigger>)}
      </Tabs.List>

      <Box px="4" pt="3" pb="2">
        <Tabs.Content value={'resume'} key={'resume'}></Tabs.Content>
        {scenarios.map(item => <Tabs.Content value={item.id.toString()} key={item.id}>
          <Text size="2">{item.scenarioDs}</Text>

          <div className='grid grid-cols-4 gap-4 '>

            <div>
              <Fields.Heading size={'3'}>Áreas</Fields.Heading>
              <Separator size="4" />
              <div className='py-2 px-2 space-y-3'>
                <Fields.Card label='Área Total' value={item.totalArea.toString()}></Fields.Card>
                <Fields.Card label='Área Protegida' value={item.protectedArea.toString()}></Fields.Card>
                <Fields.Card label='Área de Vias' value={item.streetArea.toString()}></Fields.Card>
                <Fields.Card label='Área Verde (Decoração)' value={item.decorationArea.toString()}></Fields.Card>
                <Fields.Card label='Nº de Lotes' value={item.totalSlots.toString()}></Fields.Card>
                <Fields.Card label='Área Líquida Vendável' value={slotArea(item)}></Fields.Card>
              </div>
            </div>

            <div>
              <Fields.Heading size={'3'}>Precificação</Fields.Heading>
              <Separator size="4" />
              <div className='py-2 px-2 space-y-3'>
                <Fields.Card label='Área Total' value={item.totalArea.toString()}></Fields.Card>
                <Fields.Card label='Área Protegida' value={item.protectedArea.toString()}></Fields.Card>
                <Fields.Card label='Área de Vias' value={item.streetArea.toString()}></Fields.Card>
                <Fields.Card label='Área Verde (Decoração)' value={item.decorationArea.toString()}></Fields.Card>
                <Fields.Card label='Nº de Lotes' value={item.totalSlots.toString()}></Fields.Card>
                <Fields.Card label='Área Líquida Vendável' value={slotArea(item)}></Fields.Card>
              </div>
            </div>

          </div>


        </Tabs.Content>
        )
        }
      </Box>
    </Tabs.Root>
  )
}

const slotArea = ({ totalArea, protectedArea, streetArea, decorationArea, totalSlots }: Scenario) => ((totalArea - protectedArea - streetArea - decorationArea) / totalSlots).toFixed(2)