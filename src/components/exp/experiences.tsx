'use client'
import React from 'react'
import { SectionHeading } from '../section-heading'
import { Timeline } from '../timeline'
import { useSectionInView } from '@/hooks/hooks'

export default function Experience() {
  const { ref } = useSectionInView('experience')
  return (
    <section
      ref={ref}
      id="experience"
      className="flex h-full w-full scroll-m-20 flex-col items-center"
    >
      <div className="flex h-full w-full flex-col items-center">
        <SectionHeading heading={'title_exp'} />
        <Timeline />
      </div>
    </section>
  )
}
