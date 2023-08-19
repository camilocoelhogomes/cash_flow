import React from 'react'
import { Scenario } from '../../Model/Entitys/Scenario'
import { Tabs, Box, Text, Separator } from '@radix-ui/themes'
import { Fields } from '../components/FieldsFactory'
import ContextCard from './ContextCard'
import Button from '../components/ButtonFactory/Button'
import { Layout } from '../components/Layout'
import { IScenario } from '../../utils/Common/Interfaces'
import UpdateAreas from '../UpdateProject/UpdateScenario/UpdateAreas'
import { IGetScenario } from '../../utils/Common/tempInterfaces'
import UpdatePricing from '../UpdateProject/UpdateScenario/UpdatePricing'
type Props = {
  scenarios: IGetScenario[]
}

export default function ScenarioTabs({ scenarios }: Props) {

  const [updateAreas, setupdateAreas] = React.useState(false)
  const [updatePricing, setupdatePricing] = React.useState(false)

  return (
    <Tabs.Root defaultValue={scenarios[0].id.toString()}>

      <Tabs.List>
        <Tabs.Trigger value={'resume'} key={'resume'}>Resumo</Tabs.Trigger>
        {scenarios.map(item => <Tabs.Trigger value={item.id.toString()} key={item.id}>{item.scenarioNm}</Tabs.Trigger>)}
      </Tabs.List>


      <Tabs.Content value={'resume'} key={'resume'}></Tabs.Content>
      {scenarios.map(item =>
        <Tabs.Content value={item.id.toString()} key={item.id}>
          <Layout.ScrollArea type="always" scrollbars="vertical" size={'1'} style={{ height: '70vh', padding: '0% 2%' }}>

            <div className='flex justify-between w-full py-6 px-2'>
              <Text size="2">{item.scenarioDs}</Text>
              <Button color='soft'>Clonar</Button>
            </div>

            <div className='grid grid-cols-2 gap-10 '>

              <ContextCard title='Áreas' onEditClick={() => setupdateAreas(!updateAreas)}>
                <Fields.Card label='Área Total' value={item.totalArea.toString()} />
                <Fields.Card label='Área Protegida' value={item.protectedArea.toString()} />
                <Fields.Card label='Área de Vias' value={item.streetArea.toString()} />
                <Fields.Card label='Área Verde (Decoração)' value={item.decorationArea.toString()} />
                <Fields.Card label='Nº de Lotes' value={item.totalSlots.toString()} />
                <Fields.Card label='Área Líquida Vendável' value={slotArea(item)} />
              </ContextCard>
              <ContextCard title='Precificação' onEditClick={() => setupdatePricing(!updatePricing)}>
                <Fields.Card label='Valor do m² (R$)' value={item.pricing?.squareAmount.toString()} />
                <Fields.Card label='Taxa de juros' value={item.pricing?.fee.toString()} />
                <Fields.Card label='Modelo de Juros' value={item.pricing?.feeModel.toString()} />
                <Fields.Card label='Parcelas' value={item.pricing?.installments.toString()} />
                <Fields.Card label='Valor de Entrada' value={item.pricing?.startAmount.toString()} />
                <Fields.Card label='Indexador' value={item.pricing?.feeIndex.toString()} />
              </ContextCard>
              <ContextCard title='Curva de Venda' onEditClick={() => { }}></ContextCard>
              <ContextCard title='Custo do Terreno' onEditClick={() => { }}></ContextCard>
              <ContextCard title='Custo de Obra' onEditClick={() => { }}></ContextCard>
              <ContextCard title='Despesa Comercial' onEditClick={() => { }}></ContextCard>
              <ContextCard title='Despesa Adminstrativa' onEditClick={() => { }}></ContextCard>
            </div>
          </Layout.ScrollArea>
          <UpdateAreas open={updateAreas} setOpen={setupdateAreas} scenario={item} />
          <UpdatePricing open={updatePricing} setOpen={setupdatePricing} pricing={item.pricing} />
        </Tabs.Content>
      )
      }
    </Tabs.Root>
  )
}

const slotArea = ({ totalArea, protectedArea, streetArea, decorationArea, totalSlots }: IGetScenario) => ((totalArea - protectedArea - streetArea - decorationArea) / totalSlots).toFixed(2)