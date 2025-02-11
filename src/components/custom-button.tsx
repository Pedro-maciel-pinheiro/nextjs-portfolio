import React from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons/lib'
import { useTranslations } from 'next-intl'

type CustomButtomProps = {
  title?: string
  className?: string
  Icon?: IconType
}

export const CustomButtom = ({ title, Icon }: CustomButtomProps) => {
  const t = useTranslations('buttons')
  return (
    <motion.button
      initial={{
        //@ts-ignore
        '--x': '100%',
        scale: 1,
      }}
      animate={{
        //@ts-ignore
        '--x': '-100%',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="radial-gradient relative h-10 w-fit border-2 border-gray-700 px-4 shadow-md shadow-black dark:border-gray-300 dark:shadow-white"
    >
      <span className="linear-mask relative flex h-full w-full items-center justify-center text-center font-semibold tracking-wide dark:text-neutral-100">
        <p className="mx-2 mt-[3px] flex gap-2 capitalize transition-all duration-300 hover:-translate-y-1">
          {Icon && <Icon size={20} />}
          {t(title)}
        </p>
      </span>
    </motion.button>
  )
}
