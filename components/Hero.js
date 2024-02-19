import Image from 'next/image';
import HeroBanner from '../public/assets/img/hero/hero.webp';
import Resume from './Resume';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:justify-between item-center w-full h-full xl:h-auto z-0">
        <Image src={HeroBanner} alt="Bannière" className="w-full object-cover m-auto" />
        <div className="absolute lg:relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
          <h1 className="text-6xl lg:text-2xl md:mt-70 backdrop-blur-md p-20 lg:px-20 lg:py-5 text-primary font-Spring text-nowrap lg:hidden">
            Remy&apos;z aux Verts
          </h1>
          <Resume />
        </div>
      </div>
    </>
  );
};

export default Hero;
