import React from 'react'
import { Card, Text } from '@radix-ui/themes'

type Props = { label: string, value: string, }

export default function CardComponent({ label, value }: Props) {
  return (
    <Card asChild style={{ maxWidth: 350 }} variant='ghost'>
      <a href="#">
        <Text as="div" size="2" weight="bold">
          {label}
        </Text>
        <Text as="div" color="gray" size="2">
          {value}
        </Text>
      </a>
    </Card>
  )
}