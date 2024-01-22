import Image from 'next/image';
import HeroBanner from '../public/assets/img/hero/hero.webp';
import Resume from './Resume';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center item-center w-full h-full lg:h-auto">
        <Image src={HeroBanner} alt="Bannière" className="w-full object-cover m-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <h1 className="text-7xl backdrop-blur-md p-20 text-primary font-Spring">Remy&apos;z aux Verts</h1>
          <Resume />
        </div>
      </div>
    </>
  );
};

export default Hero;
