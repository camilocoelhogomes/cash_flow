import React, {ComponentProps} from 'react';

interface Props extends ComponentProps<'button'> {
  selected: boolean;
}

export default function NavButton({selected, ...rest}: Props) {
  return (
    <button
      {...rest}
      className={`flex items-center gap-3 text-sm font-medium cursor-pointer rounded-lg py-2 px-6 transition-colors duration-700
       ${selected ? 'bg-blue-100/50 text-blue-800/70' : ''}
       text-slate-400
       hover:text-blue-800/70 hover:bg-blue-100/50
       dark:text-slate-400 
       dark:hover:text-slate-100`}
    />
  );
}
