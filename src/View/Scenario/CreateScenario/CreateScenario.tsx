import React, {FormEventHandler, useState} from 'react';
import {CreateState} from '../../App/state';
import {useNotification} from '../../components/Notification/Notification';
import {PlusIcon} from 'lucide-react';
import {api} from '../../Api/Api';
import {Fields} from '../../components/FieldsFactory';
import {Forms} from '../../components/FormFactory';
import {ICreateScenario} from '../../../utils/Common/Interfaces/IScenario';
import Button from '../../components/ButtonFactory/Button';
import {DialogFactory} from '../../components/DialogFactory';

export default function CreateScenario({
  projectId,
  onFinish,
}: {
  projectId: number;
  onFinish?: () => void;
}) {
  const [scenario, setScenario] = useState<ICreateScenario>();
  const [state, setState] = useState<CreateState>('initial');
  const [open, setOpen] = useState(false);
  const {setMessage, Notification} = useNotification();

  const onSubmit: FormEventHandler = e => {
    setState('submiting');
    e.preventDefault();
    api
      .createScenario({...scenario, projectId: projectId})
      .then(onSuccess)
      .catch(onError);
  };

  function onError(error: Error) {
    setMessage(error.message);
    setState('initial');
  }

  async function onSuccess() {
    setState('success');
    setTimeout(() => {
      setOpen(false);
      onFinish?.();
    }, 1000);
  }

  function onCancel() {
    setOpen(false);
    setScenario(undefined);
  }

  function onInputChange<K extends keyof ICreateScenario>(
    key: K,
    value: ICreateScenario[K]
  ) {
    const object = {...scenario};
    object[key] = value;
    setScenario(object);
  }

  return (
    <DialogFactory.Root open={open}>
      <DialogFactory.Trigger>
        <Button onClick={() => setOpen(true)}>
          <PlusIcon />
          Novo Cenário
        </Button>
      </DialogFactory.Trigger>

      <DialogFactory.Content>
        <DialogFactory.Title>Novo Cenário</DialogFactory.Title>
        <DialogFactory.Description size="2" mb="4">
          Dados básicos
        </DialogFactory.Description>

        <Forms.Root className="space-y-4" onSubmit={onSubmit}>
          <Forms.Field name="">
            <Forms.Label>Título</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                onChange={e => onInputChange('scenarioNm', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Descrição</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Area
                onChange={e => onInputChange('scenarioDs', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área Total</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                type="number"
                onChange={e =>
                  onInputChange('totalArea', Number(e.target.value))
                }
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Área Verde (Decoração)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                type="number"
                onChange={e =>
                  onInputChange('decorationArea', Number(e.target.value))
                }
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área de preservação permanente</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                type="number"
                onChange={e =>
                  onInputChange('protectedArea', Number(e.target.value))
                }
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área de Vias</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                type="number"
                onChange={e =>
                  onInputChange('streetArea', Number(e.target.value))
                }
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Nº de Lotes</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                type="number"
                onChange={e =>
                  onInputChange('totalSlots', Number(e.target.value))
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
        {Notification}
      </DialogFactory.Content>
    </DialogFactory.Root>
  );
}
