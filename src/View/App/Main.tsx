import { Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

export default function Main({ }: Props) {
  return (
    <Flex>
      <Heading>Cash Flow</Heading>
      <Link to={'analysis'} >An</Link>
      <Outlet />
    </Flex>
  )
}