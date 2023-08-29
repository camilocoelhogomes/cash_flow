import React from 'react';
import {sleep} from '../../../utils/Functions';
import {Callout, IconButton} from '@radix-ui/themes';
import {Cross2Icon, InfoCircledIcon} from '@radix-ui/react-icons';

export function useNotification() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    if (open) {
      delayToClose();
    }
    if (message.length > 0) {
      setOpen(true);
    }
  }, [open, message]);

  async function delayToClose() {
    await sleep(10000);
    close();
  }

  function close() {
    setOpen(false);
    setMessage('');
  }

  const Notification = message.length > 0 && (
    <Callout.Root>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>{message}</Callout.Text>
      <IconButton onClick={close}>
        <Cross2Icon />
      </IconButton>
    </Callout.Root>
  );

  return {setMessage, Notification};
}
