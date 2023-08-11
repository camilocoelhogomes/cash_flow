import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div>
      Home

      <NavLink to={'/'}>home</NavLink>
      <NavLink to={'/list'}>Analises</NavLink>
      <NavLink to={'/get'}>Get Analises</NavLink>
      <NavLink to={'/create'}>Create </NavLink>
    </div>
  )
}