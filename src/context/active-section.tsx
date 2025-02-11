'use client'
import { Nav_links } from '@/constant/nav-links'
import React, { createContext, useContext, useState } from 'react'

export type SectionName = (typeof Nav_links)[number]['title']

type ActiveProviderProps = {
  children: React.ReactNode
}
type ActiveSectionProps = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionProps | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error('useActiveSectionContext must be use within an ActiveSectionProvider')
  }
  return context
}
