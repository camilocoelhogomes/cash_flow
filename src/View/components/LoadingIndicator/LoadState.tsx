import React, {PropsWithChildren} from 'react';
import PageLoadingIndicator from './PageLoadingIndicator';
import {Callout} from '@radix-ui/themes';
import {InfoCircledIcon} from '@radix-ui/react-icons';

type Props = {
  status: 'error' | 'success' | 'loading';
  error?: Error;
};

export default function LoadState({
  status,
  error,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  if (status === 'loading') return <PageLoadingIndicator />;
  if (status === 'error') return ErrorMessage(error);
  return <>{children}</>;
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
