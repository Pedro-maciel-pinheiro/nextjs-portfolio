'use client'
import { useSectionInView } from '@/hooks/hooks'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { ref } = useSectionInView('projects')
  return <div ref={ref}>{children}</div>
}
