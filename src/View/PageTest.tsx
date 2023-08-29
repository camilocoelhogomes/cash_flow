import React from 'react';
import {CreateState} from './App/state';
import {Forms} from './components/FormFactory';
import {Fields} from './components/FieldsFactory';
import {sleep} from '../utils/Functions';
import Button from './components/ButtonFactory/Button';
import {useProjectStore} from './store/ProjectStoreTest';
import GetProject from './Project/GetProject/GetProject';
import {IListProject} from '../utils/Common/Interfaces';
import PageLoadingIndicator from './components/LoadingIndicator/PageLoadingIndicator';
type Props = {};

export default function PageTest({}: Props) {
  const [state, setState] = React.useState<CreateState>('initial');
  const [projects, setprojects] = React.useState<IListProject[]>();
  const projectBase = useProjectStore().listProjects();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submiting');
    await sleep(2000);
    setState('success');
  }

  React.useEffect(() => {
    load();
  }, []);

  async function load() {
    await sleep(1000);
    setprojects(projectBase);
  }

  return (
    <div className="flex flex-col flex-1 grid-cols-1 gap-4 py-4">
      {projects === undefined ? (
        <PageLoadingIndicator />
      ) : (
        projects.map(item => <GetProject key={item.id} project={item} />)
      )}
    </div>
  );
}
