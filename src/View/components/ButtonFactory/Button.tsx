import React, { ButtonHTMLAttributes, ElementType } from 'react'
//import { styled } from '../../../stitches.config'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ElementType,
  variant?: ButtonVariant
}
export type ButtonVariant = "path" | "action" | "secondaryAction" | "pathMatched" | "pophoverOption" | 'icon'

const Button = React.forwardRef<HTMLButtonElement, Props>(({ icon: Icon, variant, ...rest }, ref) => {

  return <button {...rest} ref={ref}>
    {Icon && <Icon />}
    {rest.children}
  </button>
});

export default Button;

/*

const ButtonComponent = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  padding: '$2',
  variants: {
    variant: {
      action: {
        borderRadius: 8,
        backgroundColor: '$SolidBackgrounds',
        color: 'white',
        boxShadow: '$0',
        transition: 'background .3s ease-in-out, boxShadow .3s ease-in-out',
        '&:hover': {
          backgroundColor: '$HoveredSolidBackgrounds',
          borderColor: '$HoveredElementBorder',
          // boxShadow: '$1',
          cursor: 'pointer'
        },
        '&:disabled': {
          backgroundColor: '$LightText',
          borderColor: '$HoveredElementBorder',
          color: "$LowContrastText",
          boxShadow: 'none',
          cursor: 'not-allowed'
        },
      },
      secondaryAction: {
        backgroundColor: "transparent",
        fontFamily: '$semibold',
        borderRadius: 8,
        boxShadow: '$1',
        '&:hover': {
          boxShadow: '$2',
          cursor: 'pointer'
        },
      },
      path: {
        fontFamily: '$semibold',
        color: '$LightText',
        borderRadius: 25,
        fontSize: '$0',
        padding: '$0 $3',
        transition: 'background .3s ease-in-out',
        '&:hover': {
          backgroundColor: '$LightHover',
          cursor: 'pointer'
        },
      },
      pathMatched: {
        fontFamily: '$semibold',
        color: 'white',
        fontSize: '$0',
        backgroundColor: '$SolidBackgrounds',
        borderRadius: 25,
        padding: '$0 $3',
        '&:hover': {
          backgroundColor: '$HoveredSolidBackgrounds',
          cursor: 'pointer'
        },
      },
      pophoverOption: {
        color: "$HighContrastText",
        fontFamily: '$semibold',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        height: 25,
        padding: '$1 $3',
        position: 'relative',
        userSelect: 'none',
        width: 'stretch',
        justifyContent: 'flex-start',
        '&:hover': {
          outline: 'none',
          backgroundColor: '$HoveredSolidBackgrounds',
          color: 'white',
          cursor: 'pointer'
        },
      },
      icon: {
        backgroundColor: 'transparent',
        width: 40,
        padding: 0,
        height: 40,
        borderRadius: '100%',
        '&:hover': {
          color: '$LowContrastText',
          cursor: 'pointer'
        },
      }
    }
  },
  defaultVariants: {
    variant: 'action',
  },
})*/