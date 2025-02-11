'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'

import { fadeIn, slideInFromBottom } from '@/utils/motion'
import { social_media } from '@/constant/social'
import Link from 'next/link'
import { SectionHeading } from '../section-heading'
import { useSectionInView } from '@/hooks/hooks'
import { useToast } from '../ui/use-toast'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

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
        description: t('successfully-description'),
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

  return (
    <motion.section
      ref={ref}
      id="contact"

      className="flex min-h-screen w-full flex-col items-center justify-center"
    >
      <SectionHeading heading={'title_contact'} />

      <motion.div
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: true }}
        variants={slideInFromBottom(0)}
        className="grid w-full h-full md:grid-cols-2 md:place-content-between bg-black border rounded-lg shadow-xl shadow-black/80 dark:shadow-white"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full gap-4 p-8  max-w-[80%] mx-auto"
        >

          <div>
            <h1 className="text-2xl font-semibold text-white text-center">{t('subtitle')}</h1>
          </div>

          <ol className='flex flex-col w-full h-full gap-4'>
            <li>
              <Label className='text-white'>{t('name')}</Label>
              <Input
                type='text' name='name' required
                placeholder={t('name')} className='text-black bg-white' />
            </li>
            <li>
              <Label className='text-white'>{t('email')}</Label>
              <Input
                type='text' name='email' required
                placeholder={t('email')} className='text-black bg-white' />
            </li>
            <li>
              <Label className='text-white'>{t('type')}</Label>
              <Textarea
                name='message'
                placeholder={t('type')} className='text-black bg-white h-20' />
            </li>
          </ol>

          <Button type='submit' className='font-bold text-sm text-black bg-white'>
            {loading ? (<>
              <Loader2 className='animate-spin' />
            </>) : (<p>{t('button')}</p>)}
          </Button>

        </form>

        <div className=" h-full w-full p-8 max-w-[80%] mx-auto">
          <h1 className="text-2xl font-semibold text-white md:mb-0 text-center">
            {t('social')}
          </h1>
          <div className="flex flex-col mt-9 gap-6 w-full">
            {social_media.map((social) => (
              <motion.div key={social.title}>
                {social.href ? (<Link
                  href={social.href}
                  target="blank"
                  className={`w-full flex  items-center border relative   gap-2
                     rounded-lg p-1  ${social.style}`}
                >
                  <social.icon size={40} className={`z-10 group text-white ${social.style}`} />
                  <span className={`absolute w-full 
                    font-medium text-white text-center `}>{social.title}</span>
                </Link>) : (<span className='w-full flex border relative p-1 rounded-lg items-center'>
                  <social.icon size={40} className={`z-10 group text-white ${social.style}`} />
                  <span className={`absolute w-full 
                    font-medium text-white text-center `}>{social.title}</span>
                </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section >
  )
}
