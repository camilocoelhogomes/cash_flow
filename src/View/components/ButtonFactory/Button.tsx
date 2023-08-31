import React, {HTMLAttributes} from 'react';
import {tv, VariantProps} from 'tailwind-variants';

type Props = HTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

const button = tv({
  base: 'inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm rounded-md transition ease-in-out duration-150',
  variants: {
    color: {
      solid: 'bg-teal-500 hover:bg-teal-400 text-white shadow',
      soft: 'bg-teal-500/20 text-teal-500 shadow',
      shadow: 'shadow-md border border-gray-100',
      outline: '',
      ghost: 'bg-transparent text-teal-500 hover:bg-gray-100',
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
