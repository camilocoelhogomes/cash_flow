import React, {FormEventHandler} from 'react';
import {DialogFactory} from '../../components/DialogFactory';
import Button from '../../components/ButtonFactory/Button';
import {Forms} from '../../components/FormFactory';
import {Fields} from '../../components/FieldsFactory';
import {CreateState} from '../../App/state';
import {sleep} from '../../../utils/Functions';
import {IGetScenarioById} from '../../../utils/Common/Interfaces/IScenario';
import {IPricing} from '../../../utils/Common/Interfaces/IPricing';
import {api} from '../../Api/Api';
import {useNotification} from '../../components/Notification/Notification';
import {SelectFactory} from '../../components/SelectFactory';

type Props = {
  open: boolean;
  setOpen(value: boolean): void;
  scenario: IGetScenarioById;
  onFinish?: () => void;
};

export default function UpdatePricing({
  open,
  setOpen,
  scenario,
  onFinish,
}: Props) {
  const [currentPricing, setCurrentPricing] = React.useState(scenario.pricing);
  const {setMessage, Notification} = useNotification();
  const [state, setState] = React.useState<CreateState>('initial');
  const [value, setvalue] = React.useState<number>(
    currentPricing?.squareAmount
  );

  const onSubmit: FormEventHandler = async e => {
    setState('submiting');
    e.preventDefault();
    api
      .upInsertPricing({...currentPricing, scenarioId: scenario.id})
      .then(onSuccess)
      .catch(onError);
  };

  function onCancel() {
    setOpen(false);
    setCurrentPricing(scenario.pricing);
  }

  function onError(error: Error) {
    setMessage(error.message);
    setState('initial');
  }

  async function onSuccess() {
    setState('success');
    setTimeout(() => {
      setOpen(false);
      setState('initial');
      onFinish?.();
    }, 1000);
  }

  function onInputChange<K extends keyof IPricing>(key: K, value: IPricing[K]) {
    const current = {...currentPricing};
    current[key] = value;
    setCurrentPricing(current);
  }

  return (
    <DialogFactory.Root open={open}>
      <DialogFactory.Content style={{minWidth: '10%', minHeight: '50%'}}>
        <div className="h-[5vh]">
          <DialogFactory.Title>Editar Precificação Base</DialogFactory.Title>
        </div>
        <div className="h-[50vh">
          <Forms.Root className="space-y-4" onSubmit={onSubmit}>
            <Forms.Field name="" className="flex flex-col">
              <Forms.Label>Valor de Entrada (R$)</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Currency
                  required
                  defaultValue={currentPricing?.startAmount}
                  onValueChange={value =>
                    onInputChange(
                      'startAmount',
                      Number(value?.replace(',', '.')) ?? 0
                    )
                  }
                />
              </Forms.Control>
            </Forms.Field>

            <Forms.Field name="" className="flex flex-col">
              <Forms.Label>Valor do m² (R$)</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Currency
                  required
                  defaultValue={currentPricing?.squareAmount}
                  onValueChange={value =>
                    onInputChange(
                      'squareAmount',
                      Number(value?.replace(',', '.')) ?? 0
                    )
                  }
                />
              </Forms.Control>
            </Forms.Field>
            <Forms.Field name="">
              <Forms.Label>Taxa de juros (%)</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  value={currentPricing?.fee}
                  required
                  type="number"
                  onChange={e =>
                    onInputChange(
                      'fee',
                      Number(Number(e.target.value).toFixed(2))
                    )
                  }
                />
              </Forms.Control>
            </Forms.Field>

            <Forms.Field name="" className="flex flex-col">
              <Forms.Label>Indexador</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <SelectFactory.Root
                  defaultValue={currentPricing?.feeIndex}
                  required
                  onValueChange={value => onInputChange('feeIndex', value)}
                >
                  <SelectFactory.Trigger placeholder="Selecione...." />
                  <SelectFactory.Content>
                    <SelectFactory.Group>
                      <SelectFactory.Item value="IGPM">IGPM</SelectFactory.Item>
                      <SelectFactory.Item value="IPCA">IPCA</SelectFactory.Item>
                      <SelectFactory.Item value="INCC">INCC</SelectFactory.Item>
                      <SelectFactory.Item value="INPC">INPC</SelectFactory.Item>
                    </SelectFactory.Group>
                  </SelectFactory.Content>
                </SelectFactory.Root>
              </Forms.Control>
            </Forms.Field>
            <Forms.Field name="" className="flex flex-col">
              <Forms.Label>Modelo de Juros</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <SelectFactory.Root
                  defaultValue={currentPricing?.feeModel}
                  required
                  onValueChange={value => onInputChange('feeModel', value)}
                >
                  <SelectFactory.Trigger placeholder="Selecione...." />
                  <SelectFactory.Content>
                    <SelectFactory.Group>
                      <SelectFactory.Item value="PRICE">
                        PRICE
                      </SelectFactory.Item>
                      <SelectFactory.Item value="SAC">SAC</SelectFactory.Item>
                      <SelectFactory.Item value="SACOC">
                        SACOC
                      </SelectFactory.Item>
                    </SelectFactory.Group>
                  </SelectFactory.Content>
                </SelectFactory.Root>
              </Forms.Control>
            </Forms.Field>
            <Forms.Field name="">
              <Forms.Label>Parcelamento</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  value={currentPricing?.installments}
                  required
                  type="number"
                  onChange={e =>
                    onInputChange(
                      'installments',
                      Number(Number(e.target.value).toFixed(0))
                    )
                  }
                />
              </Forms.Control>
            </Forms.Field>

            <div className="flex space-x-2">
              {state === 'initial' && (
                <Button color="soft" onClick={onCancel}>
                  Cancel
                </Button>
              )}
              <Forms.Submit state={state} />
            </div>
          </Forms.Root>
        </div>
        {Notification}
      </DialogFactory.Content>
    </DialogFactory.Root>
  );
}
