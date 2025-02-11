'use client'
import { fadeIn } from '@/utils/motion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LanguageSelector() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'en'

  const handleLanguageChange = (locale: string) => {
    setIsDropDownOpen(false)
    const newPath = `/${locale}${pathname.slice(3)}`
    router.push(newPath)
  }
  return (
    <div className="relative w-10">
      <button
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className="flex items-center border-none bg-transparent text-sm font-bold"
      >
        {currentLocale.toUpperCase()}{' '}
        <span>
          <ChevronDownIcon className="text-black dark:text-white" />
        </span>
      </button>
      {isDropDownOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.1)}
          className="absolute right-0 z-10 mx-1 mt-3 rounded-lg bg-white shadow-lg dark:bg-black"
        >
          <ul className="flex flex-col rounded-lg border border-black text-sm dark:border-gray-500">
            <li
              onClick={() => handleLanguageChange('en')}
              className={`cursor-pointer rounded-lg px-4 py-2 font-bold hover:rounded-lg hover:bg-slate-100 dark:hover:bg-gray-900 ${
                currentLocale === 'en' ? 'text-rose-600' : ''
              }`}
            >
              EN
            </li>
            <li
              onClick={() => handleLanguageChange('pt')}
              className={`cursor-pointer border-t border-black px-4 py-2 font-bold hover:bg-slate-100 dark:border-gray-500 dark:hover:bg-gray-900 ${
                currentLocale === 'pt' ? 'text-rose-600' : ''
              }`}
            >
              PT
            </li>
            <li
              onClick={() => handleLanguageChange('jp')}
              className={`cursor-pointer border-t border-black px-4 py-2 font-bold hover:rounded-b-lg hover:bg-slate-100 dark:border-gray-500 dark:hover:bg-gray-900 ${
                currentLocale === 'jp' ? 'text-rose-600' : ''
              }`}
            >
              JP
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  )
}
