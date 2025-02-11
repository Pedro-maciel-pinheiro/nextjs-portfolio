import Contact from '@/components/contact/contact-form'
import Hero from '@/components/hero/hero'
import About from '@/components/about/about'
import Projects from '@/components/projects/projects'

import Experience from '@/components/exp/experiences'
import MaxWidth from '@/components/max-width'

export default function Home() {
  return (
    <main className="w-full bg-primary dark:bg-black/80">
      <MaxWidth>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </MaxWidth>
    </main>
  )
}
