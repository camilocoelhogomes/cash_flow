import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import React from 'react';
import { IAnalisys } from '../store/tempEntity';
import { Fields } from '../components/FieldsFactory';
import { getALV } from '../store/tempMethods';

import { Project } from '../../Model/Entitys/Project';
import ScenariosCard from './ScenarioCard';

type Props = {
  project: Project;
};

export default function GetProject({ project }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button
          onClick={() => setOpen(true)}
          className="py-4 px-4 outline outline-1 rounded-md inline-flex transition-colors duration-300 font-semibold
      outline-slate-300 hover:bg-slate-300
      dark:hover:bg-slate-500 dark:outline-slate-500"
        >
          {project.id} | {project.projectNm}
        </button>
      </Dialog.Trigger>

      <Dialog.Content style={{ minWidth: '95%', minHeight: '95%' }}>
        <Dialog.Title>
          {project.projectNm}
        </Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {project.projectDs}
        </Dialog.Description>
        <Button>Novo Cenário</Button>
        <ScenariosCard scenarios={project.scenarios} />
        <Dialog.Close>
          <Button variant="soft" color="gray" onClick={() => setOpen(true)}>
            OK
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}

