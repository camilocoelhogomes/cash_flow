import React from 'react';
import {Fields} from '../components/FieldsFactory';
import {Tabs, Box, Text, Separator} from '@radix-ui/themes';
import Button from '../components/ButtonFactory/Button';

type Props = {title: string; onEditClick(): void};

export default function ContextCard({
  title,
  onEditClick,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="divide-y divide-slate-300 border border-slate-300 rounded-md px-2">
      <div className="flex justify-between px-4 py-3 items-center">
        <Fields.Heading size={'3'}>{title}</Fields.Heading>
        <Button color="shadow" onClick={onEditClick}>
          Editar
        </Button>
      </div>
      <div className="px-2 py-4 grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
