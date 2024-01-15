import About from '@/components/About'
import Catchment from '@/components/Catchment'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Opinions from '@/components/Opinions'
import Resume from '@/components/Resume'
import Xp from '@/components/Xp'
import Partners from '@/components/Partners'


export default function Home() {
  return (
    <main className="w-full h-full bg-light dark:bg-darky">
      <Hero />
      <Resume />
      <About />
      <Features />
      <Xp />
      <Opinions />
      <Partners />
      <Catchment />
    </main>
  );
}
