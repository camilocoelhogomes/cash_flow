import React, {PropsWithChildren} from 'react';
import PageLoadingIndicator from './PageLoadingIndicator';
import {Callout} from '@radix-ui/themes';
import {InfoCircledIcon} from '@radix-ui/react-icons';
import {LoadState} from '../../App/state';

type Props = {
  status: LoadState;
  error?: Error;
};

export default function LoadStateComponent({
  status,
  error,
}: Props): JSX.Element | null {
  if (status === 'loading')
    return (
      <div className="w-full h-[10vh] flex items-center justify-center">
        <PageLoadingIndicator />
      </div>
    );
  if (status === 'error') return ErrorMessage(error);
  return null;
}

function ErrorMessage(error: Error) {
  return (
    <Callout.Root>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>{error.message}</Callout.Text>
    </Callout.Root>
  );
}
