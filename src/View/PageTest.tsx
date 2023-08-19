import React from 'react';
import { CreateState } from './App/state';
import { Forms } from './components/FormFactory';
import { Fields } from './components/FieldsFactory';
import { sleep } from '../utils/Functions';
import Button from './components/ButtonFactory/Button';
import { useProjectStore } from './store/ProjectStore';
import GetProject from './GetProject/GetProject';
type Props = {};

export default function PageTest({ }: Props) {
  const [state, setState] = React.useState<CreateState>('initial')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submiting'); await sleep(2000); setState('success')
  }

  const { projects } = useProjectStore()


  return <div className="flex flex-col flex-1 grid-cols-1 gap-4 py-4">
    {(projects ?? []).map((item) => (
      <GetProject key={item.id} project={item} />
    ))}
  </div>
}
