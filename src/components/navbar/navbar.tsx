'use client'
import LanguageSelector from '../language-selector'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import ThemeSwitch from '../theme/theme-switch'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import { Nav_links } from '@/constant/nav-links'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section'
import MobileNav from './mobile'

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  const animationDelay = 0.3

  const menu = Nav_links

  const t = useTranslations('nav')
  
  return (
    <>
      <nav className="sticky top-0 z-50 h-auto w-full  bg-white dark:bg-black/95">
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
          {/* Single seamless moving shine effect */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%, transparent 100%)',
              width: '200%'
            }}
            animate={{
              x: ['-100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          />
        </div>
        
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          className="relative mx-auto"
        >
          <div className="block lg:hidden">
            <MobileNav menu={menu} />
          </div>
          <div className="relative mx-auto hidden h-12 md:max-w-3xl lg:block lg:max-w-5xl xl:max-w-6xl">
            <Link href={'/'} className="absolute z-50 flex h-12 items-center font-semibold">
              <motion.h1 variants={slideInFromTop(0.5)} className="text-lg">
                Maciel Pinheiro
              </motion.h1>
            </Link>
            <ul className="relative z-40 flex h-12 items-center justify-center gap-5 font-semibold">
              {menu.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * animationDelay, 
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12
                  }}
                  className="relative flex items-center text-gray-700 dark:text-gray-300"
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.title), setTimeOfLastClick(Date.now())
                    }}
                    className={clsx(`font-bold transition-colors duration-500`, {
                      'text-black dark:text-white': link.title === activeSection,
                    })}
                  >
                    {t(link.title)}
                  </Link>
                  {link.title === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 30,
                      }}
                      className="absolute mt-4 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    />
                  )}
                </motion.li>
              ))}
              <motion.div
                variants={slideInFromTop(0.5)}
                className="absolute right-0 flex w-28 items-center justify-end gap-2"
              >
                <span className="mt-1">
                  <LanguageSelector />
                </span>
                <span>
                  <ThemeSwitch />
                </span>
              </motion.div>
            </ul>
          </div>
        </motion.div>
      </nav>
    </>
  )
}

export default Navbar