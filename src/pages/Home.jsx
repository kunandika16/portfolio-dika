import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import useSeo from '../lib/useSeo'
import { pageMeta } from '../lib/site'

export default function Home() {
  useSeo(pageMeta.home)
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Stats />
    </>
  )
}