import React from 'react'
import { Fields } from '../components/FieldsFactory'
import { Tabs, Box, Text, Separator } from '@radix-ui/themes'

type Props = {}

export default function ContextCard({ children }: React.PropsWithChildren<Props>) {
  return <div className='py-2 px-2 space-y-3 divide-y divide-slate-300 border border-slate-300 rounded-md'>
    {children}
  </div>
}