import { cn } from '@/lib/utils'
import { slideInFromBottom } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import React from 'react'

type SectionHeadingProps = {
  heading: string
  className?: string
}

export const SectionHeading = ({ heading, className }: SectionHeadingProps) => {
  const t = useTranslations('section-header-text')
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        'my-20 text-3xl font-semibold capitalize text-black dark:text-white md:text-4xl',
        className
      )}
    >
      {t(heading)}
    </motion.h2>
  )
}
