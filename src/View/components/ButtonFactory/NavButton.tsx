import React, {ComponentProps} from 'react';

interface Props extends ComponentProps<'button'> {
  selected: boolean;
}

export default function NavButton({selected, ...rest}: Props) {
  return (
    <button
      {...rest}
      className={`flex items-center gap-3 text-sm font-medium cursor-pointer rounded-lg py-2 px-6 transition-colors duration-700
       ${selected ? 'bg-teal-500/20 text-teal-700 dark:text-gray-100' : ''}
       text-gray-400
       hover:text-teal-700 hover:bg-teal-500/20
       dark:text-gray-400 
       dark:hover:text-gray-100`}
    />
  );
}
