import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> { selected: boolean }

export default function NavButton({ selected, ...rest }: Props) {
  return (
    <button {...rest}
      className={`flex items-center gap-3 text-base font-semibold cursor-pointer rounded-lg py-2 px-6 transition-colors duration-700
       ${selected ? 'bg-slate-300 text-slate-900' : ''}
       text-slate-500
       hover:text-slate-900 hover:bg-slate-300
       dark:text-slate-400 
       dark:hover:text-slate-100`} />
  )
}