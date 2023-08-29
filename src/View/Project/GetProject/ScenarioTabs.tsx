import React from 'react';
import {Tabs, Text} from '@radix-ui/themes';
import {Fields} from '../../components/FieldsFactory';
import ContextCard from './ContextCard';
import Button from '../../components/ButtonFactory/Button';
import {Layout} from '../../components/Layout';
import {Saved} from '../../../utils/Common/Interfaces';
import UpdateAreas from '../../Scenario/UpdateScenario/UpdateAreas';
import UpdatePricing from '../../Scenario/UpdateScenario/UpdatePricing';
import {
  IGetScenarioById,
  IScenario,
} from '../../../utils/Common/Interfaces/IScenario';
import {IAreas} from '../../../utils/Common/Interfaces/IAreas';
import LoadStateComponent from '../../components/LoadingIndicator/LoadState';
import {LoadState} from '../../App/state';
import {api} from '../../Api/Api';
type Props = {
  scenarios: Saved<IScenario>[];
  projectid: number;
};

export default function ScenarioTabs({scenarios, projectid}: Props) {
  const [status, setStatus] = React.useState<LoadState>('loading');
  const [updatePricing, setupdatePricing] = React.useState(false);
  const [updateAreas, setupdateAreas] = React.useState(false);
  const [scenarioId, setScenarioId] = React.useState(scenarios[0].id);
  const [selectedScenario, setSelectedScenario] =
    React.useState<IGetScenarioById>();

  React.useEffect(() => {
    setStatus('loading');
    api.getScenario(scenarioId).then(value => {
      setSelectedScenario(value);
      setStatus('loaded');
    });
  }, [scenarioId]);

  return (
    <Tabs.Root
      defaultValue={scenarios[0].id.toString()}
      onValueChange={value => setScenarioId(Number(value))}
    >
      <Tabs.List>
        {scenarios.map(item => (
          <Tabs.Trigger value={item.id.toString()} key={item.id}>
            {item.scenarioNm}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {LoadStateComponent({status: status}) ?? (
        <Tabs.Content value={selectedScenario.id.toString()}>
          <Layout.ScrollArea
            type="always"
            scrollbars="vertical"
            size={'1'}
            style={{height: '70vh', padding: '0% 2%'}}
          >
            <div className="flex justify-between w-full py-6 px-2">
              <Text size="2">{selectedScenario.scenarioDs}</Text>
              <Button color="soft">Clonar</Button>
            </div>
            <div className="grid grid-cols-2 gap-10 ">
              <ContextCard
                title="Áreas"
                onEditClick={() => setupdateAreas(!updateAreas)}
              >
                <Fields.Card
                  label="Área Total"
                  value={selectedScenario.areas.totalArea.toString()}
                />
                <Fields.Card
                  label="Área Protegida"
                  value={selectedScenario.areas.protectedArea.toString()}
                />
                <Fields.Card
                  label="Área de Vias"
                  value={selectedScenario.areas.streetArea.toString()}
                />
                <Fields.Card
                  label="Área Verde (Decoração)"
                  value={selectedScenario.areas.decorationArea.toString()}
                />
                <Fields.Card
                  label="Nº de Lotes"
                  value={selectedScenario.areas.totalSlots.toString()}
                />
                <Fields.Card
                  label="Área Líquida Vendável"
                  value={slotArea(selectedScenario?.areas)}
                />
              </ContextCard>

              <ContextCard
                title="Precificação"
                onEditClick={() => setupdatePricing(!updatePricing)}
              >
                <Fields.Card
                  label="Valor do m² (R$)"
                  value={selectedScenario.pricing?.squareAmount.toString()}
                />
                <Fields.Card
                  label="Taxa de juros"
                  value={selectedScenario.pricing?.fee.toString()}
                />
                <Fields.Card
                  label="Modelo de Juros"
                  value={selectedScenario.pricing?.feeModel.toString()}
                />
                <Fields.Card
                  label="Parcelas"
                  value={selectedScenario.pricing?.installments.toString()}
                />
                <Fields.Card
                  label="Valor de Entrada"
                  value={selectedScenario.pricing?.startAmount.toString()}
                />
                <Fields.Card
                  label="Indexador"
                  value={selectedScenario.pricing?.feeIndex.toString()}
                />
              </ContextCard>

              <ContextCard
                title="Curva de Venda"
                onEditClick={() => {}}
              ></ContextCard>
              <ContextCard
                title="Custo do Terreno"
                onEditClick={() => {}}
              ></ContextCard>
              <ContextCard
                title="Custo de Obra"
                onEditClick={() => {}}
              ></ContextCard>
              <ContextCard
                title="Despesa Comercial"
                onEditClick={() => {}}
              ></ContextCard>
              <ContextCard
                title="Despesa Adminstrativa"
                onEditClick={() => {}}
              ></ContextCard>
            </div>
          </Layout.ScrollArea>
          <UpdateAreas
            open={updateAreas}
            setOpen={setupdateAreas}
            scenario={selectedScenario}
          />
          <UpdatePricing
            open={updatePricing}
            setOpen={setupdatePricing}
            scenario={selectedScenario}
            projectid={projectid}
          />
        </Tabs.Content>
      )}
    </Tabs.Root>
  );
}

const slotArea = ({
  totalArea,
  protectedArea,
  streetArea,
  decorationArea,
  totalSlots,
}: IAreas) =>
  (
    (totalArea - protectedArea - streetArea - decorationArea) /
    totalSlots
  ).toFixed(2);
