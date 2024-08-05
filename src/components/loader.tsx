'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  style?: React.CSSProperties
}

export default function Loader({ style }: Props) {
  return <div className={cn('loader', style)}></div>
}
