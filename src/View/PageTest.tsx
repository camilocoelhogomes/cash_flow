import React from 'react';
import { CreateState } from './App/state';
import { Forms } from './components/FormFactory';
import { Fields } from './components/InputFactory';
import { sleep } from '../utils/Functions';
import Button from './components/ButtonFactory/Button';

type Props = {};

export default function PageTest({ }: Props) {
  const [state, setState] = React.useState<CreateState>('initial')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submiting'); await sleep(2000); setState('success')
  }

  return (
    <>
      <Forms.Root onSubmit={onSubmit}>
        <Button color='soft' onClick={() => setState('initial')}>Cancel</Button>
        <Forms.Submit state={state} />
      </Forms.Root>
    </>
  );
}
