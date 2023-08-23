import React from 'react';
import {DialogFactory} from '../components/DialogFactory';
import Button from '../components/ButtonFactory/Button';
import ScenarioTabs from './ScenarioTabs';
import {
  Saved,
  IListProject,
  IGetProjectById,
} from '../../utils/Common/Interfaces';
import PageLoadingIndicator from '../components/LoadingIndicator/PageLoadingIndicator';
import {CrossIcon, X} from 'lucide-react';
import {useProjectStore} from '../store/ProjectStore';
import {sleep} from '../../utils/Functions';

type Props = {
  project: Saved<IListProject>;
};

export default function GetProject({project}: Props) {
  const [open, setOpen] = React.useState(false);
  const [completeProject, setcompleteProject] =
    React.useState<IGetProjectById>();
  const projectStore = useProjectStore();

  async function openDialog() {
    setOpen(true);
    const value = projectStore.getProjectById(project.id);
    await sleep(1000);
    setcompleteProject(value);
  }

  function closeDialog() {
    setOpen(false);
    setcompleteProject(undefined);
  }

  return (
    <DialogFactory.Root open={open}>
      <DialogFactory.Trigger>
        <button
          onClick={openDialog}
          className="py-4 px-4 outline outline-1 rounded-md inline-flex transition-colors duration-300 font-semibold
      outline-slate-300 hover:bg-slate-300
      dark:hover:bg-slate-500 dark:outline-slate-500"
        >
          {project.id} | {project.projectNm}
        </button>
      </DialogFactory.Trigger>

      <DialogFactory.Content style={{minWidth: '90%', minHeight: '90%'}}>
        <div className="h-[10vh]">
          <DialogFactory.Title className="flex justify-between">
            {project.projectNm}{' '}
            <Button onClick={closeDialog} color="ghost">
              <X />
            </Button>
          </DialogFactory.Title>
          <DialogFactory.Description
            size="2"
            mb="4"
            className="flex justify-between"
          >
            {project.projectDs} <Button>Novo Cenário</Button>
          </DialogFactory.Description>
        </div>

        <div className="h-[75vh] items-center">
          {completeProject === undefined ? (
            <PageLoadingIndicator />
          ) : (
            <ScenarioTabs
              scenarios={completeProject.scenarios}
              projectid={project.id}
            />
          )}
        </div>
      </DialogFactory.Content>
    </DialogFactory.Root>
  );
}
