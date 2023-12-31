import React, {FormEventHandler, useState} from 'react';
import {Dialog} from '@radix-ui/themes';

import {PlusIcon} from '@radix-ui/react-icons';
import {Forms} from '../../components/FormFactory';
import Button from '../../components/ButtonFactory/Button';
import {Fields} from '../../components/FieldsFactory';
import {api} from '../../Api/Api';
import {useNotification} from '../../components/Notification/Notification';
import {
  ICreateProject,
  IProject,
} from '../../../utils/Common/Interfaces/IProject';
import {CreateState} from '../../App/state';

export default function CreateProject({onFinish}: {onFinish?: () => void}) {
  const [project, setProject] = useState<ICreateProject>();
  const [state, setState] = useState<CreateState>('initial');
  const [open, setOpen] = useState(false);
  const {setMessage, Notification} = useNotification();

  const onSubmit: FormEventHandler = e => {
    e.preventDefault();
    setState('submiting');
    api
      .createProject(project)
      .then(() => onSuccess())
      .catch(onError);
  };

  function onCancel() {
    setOpen(false);
    setProject(undefined);
  }

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

  function onInputChange<K extends keyof ICreateProject>(
    key: K,
    value: ICreateProject[K]
  ) {
    const currentProject = {...project};
    currentProject[key] = value;
    setProject(currentProject);
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger>
        <Button onClick={() => setOpen(true)}>
          <PlusIcon />
          Novo Projeto
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Criar projeto</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Dados básicos
        </Dialog.Description>

        <Forms.Root className="space-y-4" onSubmit={onSubmit}>
          <Forms.Field name="">
            <Forms.Label>Título</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                required
                onChange={e => onInputChange('projectNm', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Descrição</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Area
                onChange={e => onInputChange('projectDs', e.target.value)}
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
      </Dialog.Content>
    </Dialog.Root>
  );
}
