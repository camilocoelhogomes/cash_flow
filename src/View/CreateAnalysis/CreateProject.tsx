import React, { FormEventHandler, useState } from 'react';
import { Flex, Dialog } from '@radix-ui/themes';

import { PlusIcon } from '@radix-ui/react-icons';
import { Forms } from '../components/FormFactory';
import Button from '../components/ButtonFactory/Button';
import { Fields } from '../components/InputFactory';
import { api } from '../Api/Api';
import { Project } from '../../Model/Entitys/Project';
import { CreateState } from '../App/state';

type Props = {};


export default function CreateAnalysis() {
  const disabled = true;

  const [project, setProject] = useState<Record<string, unknown>>();
  const [state, setState] = useState<CreateState>('initial')

  const onSubmit: FormEventHandler = e => {
    setState('submiting')
    e.preventDefault();
    api
      .createProject(project as Partial<Project>)
      .then(() => setState('success'))
      .catch(e => { console.log(e); setState('initial') });
  };

  const onInputChange = (key: string, value: unknown) => {
    const actualAnalisys = { ...project };
    actualAnalisys[key] = value;
    setProject(actualAnalisys);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <PlusIcon />
          Nova Análise
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Nova Análise</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Dados básicos
        </Dialog.Description>

        <Forms.Root className="space-y-4" onSubmit={onSubmit}>
          <Forms.Field name="">
            <Forms.Label>Título</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
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
                type="number"
                onChange={e => onInputChange('totalArea', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Área Verde (Decoração)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type="number" />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área de preservação permanente</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type="number" />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área de Vias</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                type="number"
                onChange={e => onInputChange('protectedArea', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Nº de Lotes</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input type="number" />
            </Forms.Control>
          </Forms.Field>

          <Flex gap="3" mt="4" justify="end">
            <Button color='soft'>Cancel</Button>
            <Forms.Submit state={state} />
          </Flex>
        </Forms.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}