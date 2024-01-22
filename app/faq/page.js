'use client';
import Accordions from '../../components/Accordions';

const Page = () => {
  return (
      <div className=" w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Foire aux Questions</h1>

        <Accordions />
      </div>
  );
};

export default Page;
