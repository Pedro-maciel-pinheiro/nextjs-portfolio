'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'
import { cardVariants, fadeIn, slideInFromBottom } from '@/utils/motion'
import { social_media } from '@/constant/social'
import Link from 'next/link'
import { SectionHeading } from '../section-heading'
import { useSectionInView } from '@/hooks/hooks'
import { useToast } from '../ui/use-toast'
import { useState } from 'react'
import { Loader2, Mail, User, MessageSquare, Sparkles } from 'lucide-react'

export default function Contact() {
  const { ref } = useSectionInView('contact')
  const { toast } = useToast()
  const t = useTranslations('contact')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(event: any) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)

    formData.append('access_key', '7b98b54d-38bd-4e39-9225-6d19bb280ce5')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })

    const result = await response.json()
    if (result.success) {
      toast({
        variant: 'default',
        description: t('toast-successfully-description'),
      })
      setLoading(false)
    } else {
      toast({
        variant: 'destructive',
        title: t('toast-negative-title'),
        description: t('toast-negative-description'),
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative min-h-screen overflow-hidden"
    >
      <motion.section
        ref={ref}
        id="contact"
        className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4"
      >
        {/* Enhanced Section Heading */}
        <div className="mb-12 text-center">
          <motion.div className="mb-4 flex items-center justify-center gap-2">
            <SectionHeading heading={'title_contact'} className="my-0" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true }}
          variants={slideInFromBottom(0)}
          className="grid h-full w-full max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Enhanced Form Section */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl border  border-gray-300 bg-white/90 p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 dark:border-white/20 dark:bg-white/5 dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30"
          >
            <div className="mb-8">
              <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-white">
                <Mail className="text-blue-400" />
                {t('subtitle')}
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="group"
                >
                  <Label className="mb-2 flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
                    <User className="h-4 w-4 text-blue-400" />
                    {t('name')}
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder={t('name')}
                    className="h-12 rounded-xl border-gray-300/60 bg-gray-50/50 px-4 text-gray-800 placeholder-gray-500 transition-all hover:bg-gray-100/70 focus:border-transparent focus:ring-2 focus:ring-blue-500 group-hover:border-blue-400/60 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 dark:hover:bg-white/10 dark:group-hover:border-blue-400/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="group"
                >
                  <Label className="mb-2 flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
                    <Mail className="h-4 w-4 text-blue-400" />
                    {t('email')}
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder={t('email')}
                    className="h-12 rounded-xl border-gray-300/60 bg-gray-50/50 px-4 text-gray-800 placeholder-gray-500 transition-all hover:bg-gray-100/70 focus:border-transparent focus:ring-2 focus:ring-blue-500 group-hover:border-blue-400/60 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 dark:hover:bg-white/10 dark:group-hover:border-blue-400/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="group"
                >
                  <Label className="mb-2 flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
                    <MessageSquare className="h-4 w-4 text-blue-400" />
                    {t('type')}
                  </Label>
                  <Textarea
                    name="message"
                    placeholder={t('type')}
                    className="min-h-[120px] resize-none rounded-xl border-gray-300/60 bg-gray-50/50 p-4 text-gray-800 placeholder-gray-500 transition-all hover:bg-gray-100/70 focus:border-transparent focus:ring-2 focus:ring-blue-500 group-hover:border-blue-400/60 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-gray-400 dark:hover:bg-white/10 dark:group-hover:border-blue-400/50"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full transform rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:from-purple-500 hover:to-pink-500 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>{t('button')}</span>
                      <Mail className="h-5 w-5" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Enhanced Social Section */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl border border-gray-300 bg-white/90 p-8 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 dark:border-white/20 dark:bg-white/5 dark:shadow-purple-500/20 dark:hover:shadow-purple-500/30"
          >
            <div className="mb-8">
              <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-white">
                <Sparkles className="text-purple-400" />
                {t('social')}
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>

            <div className="space-y-4">
              {social_media.map((social, index) => (
                <motion.div
                  key={social.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 * index }}
                >
                  {social.href ? (
                    <Link
                      href={social.href}
                      target="_blank"
                      className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200/60 bg-gray-50/30 p-4 transition-all duration-300 hover:translate-x-3 hover:border-gray-300/80 hover:bg-gray-100/50 hover:shadow-lg dark:border-white/20 dark:bg-white/5 dark:hover:border-white/40 dark:hover:bg-white/10"
                    >
                      <div
                        className={`rounded-xl p-3 ${social.style} border shadow-lg transition-all group-hover:shadow-xl`}
                      >
                        <social.icon size={24} className="text-black dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-lg font-semibold text-gray-800 dark:text-white">
                          {social.title}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {t('click')}
                        </span>
                      </div>
                      <div className="text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-white">
                        →
                      </div>
                    </Link>
                  ) : (
                    <div className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200/60 bg-gray-50/30 p-4 transition-all duration-300 hover:translate-x-3 dark:border-white/20 dark:bg-white/5">
                      <div
                        className={`rounded-xl p-3 ${social.style} border shadow-lg transition-all group-hover:shadow-xl`}
                      >
                        <social.icon size={24} className="text-black dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-lg font-semibold text-gray-800 dark:text-white">
                          {social.title}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional decorative elements */}
            <div className="mt-8 border-t border-gray-200/60 pt-8 dark:border-white/20">
              <div className="text-center">
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{t('response')}</p>
                <p className="font-semibold text-gray-800 dark:text-white">{t('usually')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
