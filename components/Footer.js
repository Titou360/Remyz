import Link from 'next/link';
import Social from './Social';

const Footer = () => {
  return (
    <footer className="w-full h-full p-4 flex flex-row items-start justify-around bg-primary gap-10 dark:border-top-solid dark:border-t-[2px] dark:border-light ">
      <div className="flex flex-col w-1/3 gap-4 pt-2">
        <h2 className="font-Spring text-3xl text-light font-bold">Remy&apos;z Aux Verts</h2>
        <p className=" text-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam voluptatibus natus consectetur expedita velit, incidunt, facilis
          eligendi nemo vel voluptatem quod, ullam rem sunt! Perspiciatis aperiam quos nihil voluptatem?
        </p>
        <Social />
      </div>

      <div className="flex flex-col w-1/3 gap-4 pt-2">
        <h2 className="font-Spring text-3xl text-light font-bold">Liens utiles</h2>
        <Link href="#" className=" text-light">
          Nemo Solutions 🐙
        </Link>
      </div>

      <div className="flex flex-col w-1/3 gap-4 pt-2">
        <h2 className="font-Spring text-3xl text-light font-bold">Horaires d&apos;ouverture</h2>
      </div>
    </footer>
  );
};

export default Footer;
