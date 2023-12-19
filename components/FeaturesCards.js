'use client';
import Image from 'next/image';

const FeaturesCards = ({ data }) => {

  const { title, cover, description } = data;

  return (
    <div className="group h-96 w-96 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <Image src={cover} alt={title} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" width={300} height={180} />
        </div>
        <div className="absolute inset-0 h-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className='flex min-h-full flex-col items-center justify-center gap-4'>
            <h2 className="text-3xl font-bold text-light">{title}</h2>
            <p className="text-lg">{description}</p>
            <button className="mt-2 rounded-md bg-light border-2 border-transparent hover:border-light text-dark py-2 px-4 text-sm hover:bg-dark hover:text-light">Lire plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
