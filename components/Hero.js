import Image from 'next/image';
import HeroBanner from '../public/assets/img/hero/hero.webp';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center item-center w-full h-full lg:h-auto">
        <Image src={HeroBanner} alt="Bannière" className="w-4/5 m-auto" />
      </div>
    </>
  );
};

export default Hero;
