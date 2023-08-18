import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import React from 'react';
import { IAnalisys } from '../store/tempEntity';
import { Fields } from '../components/FieldsFactory';
import { getALV } from '../store/tempMethods';

import { Project } from '../../Model/Entitys/Project';
import ScenarioTabs from './ScenarioTabs';

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

      <Dialog.Content style={{ minWidth: '90%', minHeight: '90%' }}>
        <div className='h-1/6 bg-slate-500'>
          {/* <Dialog.Title>
            {project.projectNm}
          </Dialog.Title>
          <Dialog.Description size="2" mb="4" className='flex justify-between'>
            {project.projectDs} <Button>Novo Cenário</Button>
          </Dialog.Description> */}
        </div>
        <div className='h-5/6 bg-slate-300'>
          {/* <ScenarioTabs scenarios={project.scenarios} /> */}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

