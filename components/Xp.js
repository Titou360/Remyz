'use client';
import AnimatedNumber from './AnimatedNumber';

const Xp = () => {
  return (
    <section id="experience" className="mt-10">
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Mon expérience</h2>

      <div className="grid grid-cols-3 xs:grid-cols-1 xs:gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="inline-block normal-case text-7xl font-bold text-primary/80 dark:text-light">
            <AnimatedNumber toNumber={4} />
          </span>
          <h3 className="text-xl bold bg-primary dark:bg-darkModePrimary normal-case text-light dark:text-dark px-4 rounded-full">
            années d&apos;expérience
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="inline-block normal-case text-7xl font-bold text-primary/80 dark:text-light">
            <AnimatedNumber toNumber={30} />
          </span>
          <h3 className="text-xl bold bg-primary dark:bg-darkModePrimary normal-case text-light dark:text-dark  px-4 rounded-full">
            clients fidèles et +
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="inline-block normal-case text-7xl font-bold text-primary/80 dark:text-light">
            <AnimatedNumber toNumber={100} />
          </span>
          <h3 className="text-xl bold bg-primary dark:bg-darkModePrimary normal-case text-light dark:text-dark px-4 rounded-full ">
            % amour du travail bien fait
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Xp;
