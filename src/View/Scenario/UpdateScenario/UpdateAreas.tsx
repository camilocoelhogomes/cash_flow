import React, {FormEventHandler} from 'react';
import {DialogFactory} from '../../components/DialogFactory';
import Button from '../../components/ButtonFactory/Button';
import {Forms} from '../../components/FormFactory';
import {Fields} from '../../components/FieldsFactory';
import {CreateState} from '../../App/state';
import {IGetScenarioById} from '../../../utils/Common/Interfaces/IScenario';
import {useNotification} from '../../components/Notification/Notification';
import {api} from '../../Api/Api';
import {IAreas} from '../../../utils/Common/Interfaces/IAreas';

type Props = {
  open: boolean;
  setOpen(value: boolean): void;
  scenario: IGetScenarioById;
  onFinish?: () => void;
};

export default function UpdateAreas({
  open,
  setOpen,
  scenario,
  onFinish,
}: Props) {
  const [currentAreas, setCurrentAreas] = React.useState(scenario.areas);
  const {setMessage, Notification} = useNotification();
  const [state, setState] = React.useState<CreateState>('initial');

  const onSubmit: FormEventHandler = async e => {
    setState('submiting');
    e.preventDefault();
    api.upInsertArea(currentAreas).then(onSuccess).catch(onError);
  };

  function onCancel() {
    setOpen(false);
    setCurrentAreas(scenario.areas);
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

  function onInputChange<K extends keyof IAreas>(key: K, value: IAreas[K]) {
    const current = {...currentAreas};
    current[key] = value;
    setCurrentAreas(current);
  }

  return (
    <DialogFactory.Root open={open}>
      <DialogFactory.Content style={{minWidth: '10%', minHeight: '50%'}}>
        <div className="h-[5vh]">
          <DialogFactory.Title>Editar Areas</DialogFactory.Title>
        </div>
        <div className="h-[50vh">
          <Forms.Root className="space-y-4" onSubmit={onSubmit}>
            <Forms.Field name="">
              <Forms.Label>Área Total</Forms.Label>
              <Forms.Message match={'valueMissing'}></Forms.Message>
              <Forms.Control asChild>
                <Fields.Input
                  defaultValue={currentAreas.totalArea}
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
                  defaultValue={currentAreas.decorationArea}
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
                  defaultValue={currentAreas.protectedArea}
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
                  defaultValue={currentAreas.streetArea}
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
                  defaultValue={currentAreas.totalSlots}
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
        </div>
        {Notification}
      </DialogFactory.Content>
    </DialogFactory.Root>
  );
}
