import { CubeIcon } from '@radix-ui/react-icons'
import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

type Props = {}

export default function Main({ children }: PropsWithChildren) {
  let location = useLocation();

  return (
    <div className='container max-w-full h-screen bg-slate-100 flex divide-y '>
      <div className='w-1/6'>
        <div className='py-4 px-4'>
          <Heading>Cash Flow</Heading>
        </div>
        <div className='py-2 px-3 grid gap-4 grid-cols-1'>
          <NavLink to={'/'}><Button variant='soft'>Home</Button></NavLink>
          <NavLink to={'list'}><Button variant='soft'>Home</Button></NavLink>
          <NavLink to={'get'}><Button variant='soft'>Home</Button></NavLink>
          <NavLink to={'create'}><Button variant='soft'>Home</Button> </NavLink>
        </div>
      </div>
      <div className='bg-slate-50 h-screen w-5/6'>
        <Outlet />
      </div>
    </div>
  )
}

function Content(children: PropsWithChildren) {
  return <div><>{children}</></div>
}

