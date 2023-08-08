import { PropsWithChildren } from "react"
//import { styled } from "../../../stitches.config"
import Buttton from '../components/ButtonFactory/Button'

interface ListLayoutProps {
  head: React.ReactNode,
  increase(): void
  descrease(): void
}

export function ListLayoutPage(props: PropsWithChildren<ListLayoutProps>) {
  return (
    <LAYOUT>
      <HEAD>
        {props.head}
      </HEAD>
      < BODY>
        {props.children}
      </BODY>
      <PAGECONTROL>

      </PAGECONTROL>
    </LAYOUT>
  )
}

const LAYOUT = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '97%',
  marginTop: '$3',
  gap: '10%',
})

const HEAD = styled('div', {
  display: "grid",
  gridTemplateColumns: '5fr 1fr',
  gap: '15%',
  alignItems: 'end',
})

const BODY = styled('div', {
  display: "flex",
  justifyContent: 'start',
  alignItems: 'center',
})
const PAGECONTROL = styled('div', {
  display: "flex",
  padding: '$3 $0',
  justifyContent: 'space-between',
  alignItems: 'center',
})