import React, {HTMLAttributes} from 'react';
import {tv, VariantProps} from 'tailwind-variants';

type Props = HTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

const button = tv({
  base: 'inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm rounded-md transition ease-in-out duration-150',
  variants: {
    color: {
      solid: 'bg-indigo-500 hover:bg-indigo-400 text-white shadow',
      soft: 'bg-indigo-500/20 text-indigo-500 shadow',
      shadow: 'shadow-md border border-slate-100',
      outline: '',
      ghost: 'bg-transparent text-indigo-500 hover:bg-slate-100',
      surface: '',
    },
  },
  defaultVariants: {
    color: 'solid',
  },
});

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({color, ...props}, ref) => {
    return (
      <button
        ref={ref}
        className={button({color: color})}
        {...props}
        type="button"
      />
    );
  }
);

export default Button;
