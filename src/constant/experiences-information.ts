import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { FaReact, FaNodeJs } from 'react-icons/fa'

export const experiences_info = [
  {
    title: 'title_1',
    location: 'Recife, PR',
    description: 'description_1',
    icon: React.createElement(RiComputerLine),

    date: 'date_1',
  },
  {
    title: 'title_2',
    location: 'Brasilia, BR',
    description: 'description_2',
    icon: React.createElement(FaReact),

    date: 'date_2',
  },
  {
    title: 'title_3',
    location: 'Brasilia, BR',
    description: 'description_3',
    icon: React.createElement(FaNodeJs),

    date: 'date_3',
  },
] as const
