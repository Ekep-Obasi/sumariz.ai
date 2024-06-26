import React from 'react'
import { Button, ButtonProps } from './ui/button'

interface Props extends ButtonProps {
  text: string
  children: React.ReactNode
}

const IconButton: React.FC<Props> = ({ text, children, ...props }) => {
  return (
    <Button {...props} className={`flex flex-row space-x-2 ${props.className}`}>
      <span>{children}</span>
      <span>{text}</span>
    </Button>
  )
}

export default IconButton
