'use client';
import AnimatedNumber from './AnimatedNumber';

const Xp = () => {
  return (
    <section id="experience" className="mt-10">
      <h2 className="text-3xl text-primary capitalize text-center my-4">Mon expérience</h2>

      <div className="grid grid-cols-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="inline-block normal-case text-7xl font-bold text-primary/80">
            <AnimatedNumber toNumber={4} />
          </span>
          <h3 className="text-xl bold bg-primary normal-case text-light dark:text-light px-4 rounded-full">années d&apos;expérience</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="inline-block normal-case text-7xl font-bold text-primary/80">
            <AnimatedNumber toNumber={30} />
          </span>
          <h3 className="text-xl bold bg-primary normal-case text-light  px-4 rounded-full">clients fidèles et +</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="inline-block normal-case text-7xl font-bold text-primary/80">
            <AnimatedNumber toNumber={100} />
          </span>
          <h3 className="text-xl bold bg-primary normal-case text-light  px-4 rounded-full ">% amour du travail bien fait</h3>
        </div>
      </div>
    </section>
  );
};

export default Xp;
