import About from '@/components/About';
import Catchment from '@/components/Catchment';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Opinions from '@/components/Opinions';
import Partners from '@/components/Partners';
import Xp from '@/components/Xp';
import SimpleSlider from '@/components/simpleSlider';

export default function Home() {
  return (
    <main className="w-full h-full bg-light dark:bg-darky">
      <Hero />
      <About />
      <Features />
      <Xp />
      <Opinions />
      <SimpleSlider />
      <Catchment />
    </main>
  );
}
