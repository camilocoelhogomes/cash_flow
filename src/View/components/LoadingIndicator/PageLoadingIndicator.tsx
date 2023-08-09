import React from 'react'
import { ProgressBar } from 'react-loader-spinner'


type Props = {}

export default function PageLoadingIndicator({ }: Props) {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor='transparent'
      barColor='#51E5FF'
    />
  )
}