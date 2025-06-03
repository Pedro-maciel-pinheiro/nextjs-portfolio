'use client'

import { project_info } from '@/constant/projects-images'
import { SearchParamsProps } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link'
import { Link as Navlink } from '@/navigation'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeIn, slideInFromBottom } from '@/utils/motion'
import { CustomButtom } from '@/components/custom-button'
import { SiGithub } from 'react-icons/si'
import { VideoPlayer } from '@/components/video-player'
import { ArrowLeft, ArrowRight, ExternalLink, Code, Zap } from 'lucide-react'

export default function page({ params }: SearchParamsProps) {
  const { project_name } = params

  const t = useTranslations(`projects.${project_name}`)
  const project_text = useTranslations(`projects`)
  const nav_project = useTranslations('nav-project')

  const project_data = project_info

  const animatedDelay = 0.1

  const currentProjectIndex = project_data.findIndex((project) => project.name === project_name)

  const nextProject = project_data[(currentProjectIndex + 1) % project_data.length]
  const previousProject =
    project_data[currentProjectIndex === 0 ? project_data.length - 1 : currentProjectIndex - 1]

  const selectedProject = project_data[currentProjectIndex]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  if (!selectedProject) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 dark:from-red-950 dark:via-pink-950 dark:to-orange-950">
        <Card className="mx-auto max-w-md border-0 bg-white/80 p-8 text-center shadow-2xl backdrop-blur-sm dark:bg-gray-900/80">
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <Code className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Return Home
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary dark:bg-black/80">
      {/* Animated background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-pink-400/20 to-orange-400/20 blur-3xl delay-1000" />
      </div>

      <motion.div
        className="relative z-10 min-h-screen px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navigation Header */}
        <motion.nav className="mx-auto mb-8 max-w-7xl" variants={itemVariants}>
          <div className="flex items-center justify-between rounded-2xl border border-gray-200/50 bg-white/80 p-4 shadow-lg backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/80">
            <Navlink
              href={`/projects/${previousProject.name}`}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-x-1 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <ArrowLeft className="group-hover:animate-bounce-x h-4 w-4" />
              {nav_project('back-button')}
            </Navlink>

            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white">
              <Code className="h-4 w-4" />
              {nav_project('projects-page')}
            </div>

            <Navlink
              href={`/projects/${nextProject.name}`}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {nav_project('next-button')}
              <ArrowRight className="group-hover:animate-bounce-x h-4 w-4" />
            </Navlink>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Hero Section - Video/Image */}
            <motion.div className="space-y-6" variants={heroVariants}>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
                    {t('title')}
                  </h1>
                  <h2 className="mt-2 text-xl font-semibold text-gray-700 dark:text-gray-300 md:text-2xl">
                    {t('subtitle')}
                  </h2>
                </motion.div>
              </div>

              <motion.div
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative rounded-3xl border border-gray-200/50 bg-white/90 p-2 shadow-2xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90">
                  <Link
                    href={selectedProject.link_website}
                    target="_blank"
                    className="group relative block"
                  >
                    <VideoPlayer videoSrc={selectedProject.video} />
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/10 group-hover:opacity-100">
                      <div className="scale-75 transform rounded-full bg-white/90 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-100 dark:bg-gray-900/90">
                        <ExternalLink className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Description Card */}
              <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm dark:bg-gray-900/80">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                        {project_text('about')}
                      </h3>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      {t('description')}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Technologies Card */}
              <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm dark:bg-gray-900/80">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-blue-600">
                        <Code className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                        {project_text('tech')}
                      </h3>
                    </div>

                    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {t.raw('technologies').map((tech: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-800"
                        >
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack Icons */}
                    <motion.div
                      className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      {selectedProject.data.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 1 + index * animatedDelay,
                            type: 'spring',
                            stiffness: 100,
                          }}
                          whileHover={{ scale: 1.1, rotateY: 15 }}
                          className="group"
                        >
                          <Link
                            href={skill.href}
                            target="_blank"
                            className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <skill.logo
                              size={32}
                              className={`transition-all duration-300 group-hover:scale-110 ${skill.text_style}`}
                            />
                            <span className="text-center text-xs font-semibold text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href={selectedProject.link_website} target="_blank" className="group flex-1">
                  <div className="flex transform items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                    <ExternalLink className="h-5 w-5 group-hover:animate-bounce" />
                    <p className="mt-2">{nav_project('button-text-online')}</p>
                  </div>
                </Link>

                <Link href={selectedProject.link_github} target="_blank" className="group flex-1">
                  <div className="flex transform items-center justify-center gap-3 rounded-2xl bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                    <SiGithub className="h-5 w-5 group-hover:animate-spin" />
                    <p className="mt-2"> {nav_project('button-text-github')}</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
