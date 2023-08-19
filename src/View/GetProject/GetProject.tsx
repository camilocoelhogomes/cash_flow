import React from "react";
import { IGetProject } from "../../utils/Common/tempInterfaces";
import { DialogFactory } from "../components/DialogFactory";
import Button from "../components/ButtonFactory/Button";
import ScenarioTabs from "./ScenarioTabs";


type Props = {
  project: IGetProject;
};

export default function GetProject({ project }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogFactory.Root>
      <DialogFactory.Trigger>
        <button
          onClick={() => setOpen(true)}
          className="py-4 px-4 outline outline-1 rounded-md inline-flex transition-colors duration-300 font-semibold
      outline-slate-300 hover:bg-slate-300
      dark:hover:bg-slate-500 dark:outline-slate-500"
        >
          {project.id} | {project.projectNm}
        </button>
      </DialogFactory.Trigger>

      <DialogFactory.Content style={{ minWidth: '90%', minHeight: '90%' }}>
        <div className='h-[10vh]'>
          <DialogFactory.Title>
            {project.projectNm}
          </DialogFactory.Title>
          <DialogFactory.Description size="2" mb="4" className='flex justify-between'>
            {project.projectDs} <Button>Novo Cenário</Button>
          </DialogFactory.Description>
        </div>
        <div className='h-[75vh]'>
          <ScenarioTabs scenarios={project.scenarios} />
        </div>

      </DialogFactory.Content>
    </DialogFactory.Root>
  );
}

