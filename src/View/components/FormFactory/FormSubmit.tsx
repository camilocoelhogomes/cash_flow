import React from 'react';
import * as Form from '@radix-ui/react-form';
import CircleSpinner from '../LoadingIndicator/CircleSpinner';
import { CheckCircle2 } from 'lucide-react';
import { CreateState } from '../../App/state';

interface Props {
  state: CreateState;
}

export default function FormSubmit({ state }: Props) {
  return (
    <Form.Submit asChild>
      <button
        className="inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 content-center"
        disabled={state === 'submiting' || state === 'success'}
      >
        {
          {
            initial: 'Salvar',
            submiting: <><CircleSpinner /> Aguarde...</>,
            success: <CheckCircle2 />,
          }[state]
        }
      </button>
    </Form.Submit>
  );
}
