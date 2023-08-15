import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> { }

export default function Button({ ...rest }: Props) {
  return <button {...rest} className="inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150" />
}