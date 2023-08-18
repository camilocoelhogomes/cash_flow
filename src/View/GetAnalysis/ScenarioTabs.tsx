import React from 'react'
import { Scenario } from '../../Model/Entitys/Scenario'
import { Tabs, Box, Text, Separator } from '@radix-ui/themes'
import { Fields } from '../components/FieldsFactory'
import ContextCard from './ContextCard'
import Button from '../components/ButtonFactory/Button'
import { Layout } from '../components/Layout'
type Props = {
  scenarios: Scenario[]
}

export default function ScenarioTabs({ scenarios }: Props) {

  return (
    <Tabs.Root defaultValue={scenarios[0].id.toString()}>

      <Tabs.List>
        <Tabs.Trigger value={'resume'} key={'resume'}>Resumo</Tabs.Trigger>
        {scenarios.map(item => <Tabs.Trigger value={item.id.toString()} key={item.id}>{item.scenarioNm}</Tabs.Trigger>)}
      </Tabs.List>


      <Layout.ScrollArea type="always" scrollbars="vertical" size={'2'} className='h-72'>
        <Tabs.Content value={'resume'} key={'resume'}></Tabs.Content>
        {scenarios.map(item =>
          <Tabs.Content value={item.id.toString()} key={item.id}>

            <div className='flex justify-between w-full py-6 px-2'>

              <Text size="2">{item.scenarioDs}</Text>
              <Button color='soft'>Clonar</Button>

            </div>

            <div className='grid grid-cols-4 gap-4 '>

              <ContextCard>
                <Fields.Heading size={'3'}>Áreas <Button color='shadow'>Editar</Button></Fields.Heading>
                <div className='space-y-3 py-4 px-2'>
                  <Fields.Card label='Área Total' value={item.totalArea.toString()}></Fields.Card>
                  <Fields.Card label='Área Protegida' value={item.protectedArea.toString()}></Fields.Card>
                  <Fields.Card label='Área de Vias' value={item.streetArea.toString()}></Fields.Card>
                  <Fields.Card label='Área Verde (Decoração)' value={item.decorationArea.toString()}></Fields.Card>
                  <Fields.Card label='Nº de Lotes' value={item.totalSlots.toString()}></Fields.Card>
                  <Fields.Card label='Área Líquida Vendável' value={slotArea(item)}></Fields.Card>
                </div>
              </ContextCard>

              <ContextCard>
                <Fields.Heading size={'3'}>Precificação</Fields.Heading>
                <div>oi</div>
              </ContextCard>
              <ContextCard>
                <Fields.Heading size={'3'}>Curva de Venda</Fields.Heading>
                <div>oi</div>
              </ContextCard>
              <ContextCard>
                <Fields.Heading size={'3'}>Custo do Terreno</Fields.Heading>
                <div>oi</div>
              </ContextCard>
              <ContextCard>
                <Fields.Heading size={'3'}>Custo de Obra</Fields.Heading>
                <div>oi</div>
              </ContextCard>
              <ContextCard>
                <Fields.Heading size={'3'}>Despesa Comercial</Fields.Heading>
                <div>oi</div>
              </ContextCard>
              <ContextCard>
                <Fields.Heading size={'3'}>Despesa Adminstrativa</Fields.Heading>
                <div>
                  <Fields.Card label='Área de Vias' value={item.streetArea.toString()}></Fields.Card>
                  <Fields.Card label='Área Verde (Decoração)' value={item.decorationArea.toString()}></Fields.Card>
                  <Fields.Card label='Nº de Lotes' value={item.totalSlots.toString()}></Fields.Card>
                  <Fields.Card label='Área Líquida Vendável' value={slotArea(item)}></Fields.Card>
                </div>
              </ContextCard>
            </div>
          </Tabs.Content>
        )
        }

      </Layout.ScrollArea>
    </Tabs.Root>
  )
}

const slotArea = ({ totalArea, protectedArea, streetArea, decorationArea, totalSlots }: Scenario) => ((totalArea - protectedArea - streetArea - decorationArea) / totalSlots).toFixed(2)