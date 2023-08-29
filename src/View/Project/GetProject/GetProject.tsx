import {DialogFactory} from '../../components/DialogFactory';
import Button from '../../components/ButtonFactory/Button';
import ScenarioTabs from './ScenarioTabs';
import {Saved} from '../../../utils/Common/Interfaces';
import {X} from 'lucide-react';
import {
  IGetProjectById,
  IProject,
} from '../../../utils/Common/Interfaces/IProject';
import {LoadState} from '../../App/state';
import LoadStateComponent from '../../components/LoadingIndicator/LoadState';
import React from 'react';
import {api} from '../../Api/Api';
import CreateScenario from '../../Scenario/CreateScenario/CreateScenario';

type Props = {
  project: Saved<IProject>;
};

export default function GetProject({project}: Props) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<LoadState>('loading');
  const [completeProject, setcompleteProject] =
    React.useState<IGetProjectById>();

  const load = () =>
    api.getProject(project.id).then(value => {
      setcompleteProject(value);
      setStatus('loaded');
    });
  async function openDialog() {
    setOpen(true);
    load();
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
            {project.projectDs}{' '}
            <CreateScenario projectId={project.id} onFinish={load} />
          </DialogFactory.Description>
        </div>
        <div className="h-[75vh] items-center flex-col">
          {LoadStateComponent({status: status}) ??
            (completeProject && (
              <ScenarioTabs
                scenarios={completeProject.scenarios}
                projectid={project.id}
              />
            ))}
        </div>
      </DialogFactory.Content>
    </DialogFactory.Root>
  );
}
