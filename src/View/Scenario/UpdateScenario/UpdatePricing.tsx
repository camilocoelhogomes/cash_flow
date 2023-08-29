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
            <Forms.Field name="">
              <Forms.Label>Valor de Entrada (R$)</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentPricing?.startAmount}
                  required
                  type="number"
                  onChange={e =>
                    onInputChange('startAmount', Number(e.target.value))
                  }
                />
              </Forms.Control>
            </Forms.Field>

            <Forms.Field name="">
              <Forms.Label>Valor do m² (R$)</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentPricing?.squareAmount}
                  required
                  type="number"
                  onChange={e =>
                    onInputChange('squareAmount', Number(e.target.value))
                  }
                />
              </Forms.Control>
            </Forms.Field>

            <Forms.Field name="">
              <Forms.Label>Taxa de juros (%)</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentPricing?.fee}
                  required
                  type="number"
                  onChange={e => onInputChange('fee', Number(e.target.value))}
                />
              </Forms.Control>
            </Forms.Field>

            <Forms.Field name="">
              <Forms.Label>Indexador</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentPricing?.feeIndex}
                  required
                  onChange={e => onInputChange('feeIndex', e.target.value)}
                />
              </Forms.Control>
            </Forms.Field>
            <Forms.Field name="">
              <Forms.Label>Modelo de Juros</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentPricing?.feeModel}
                  required
                  onChange={e => onInputChange('feeModel', e.target.value)}
                />
              </Forms.Control>
            </Forms.Field>
            <Forms.Field name="">
              <Forms.Label>Parcelamento</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentPricing?.installments}
                  required
                  type="number"
                  onChange={e =>
                    onInputChange('installments', Number(e.target.value))
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
