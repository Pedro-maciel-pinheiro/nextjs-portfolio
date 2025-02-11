import { cn } from '@/lib/utils'
import { MaxWidthProps } from '@/types'
import React from 'react'

export default function MaxWidth({ children, className }: MaxWidthProps) {
  return (
    <div className={cn('mx-auto px-4 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl', className)}>
      {children}
    </div>
  )
}
