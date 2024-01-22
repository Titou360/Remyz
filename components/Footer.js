import Link from 'next/link';
import IconNavbar from './IconNavbar';
import TimeSchedule from './TimeSchedule';
import Copyrights from './Copyrights';

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full p-4 flex flex-row items-start justify-around bg-primary dark:bg-darky gap-10 dark:border-top-solid dark:border-t-[2px] dark:border-light ">
        <div className="flex flex-col w-1/3 gap-4 pt-2">
          <h2 className="font-Spring text-3xl text-light font-bold dark:text-darkModePrimary ">Remy&apos;z Aux Verts</h2>
          <p className="text-light">
            Remy&apos;z aux Verts, votre jardinier en Val de l&apos;Eyre. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque
            deleniti dolore modi aperiam at magni saepe amet iusto necessitatibus vitae non, obcaecati veniam libero, architecto recusandae sapiente
            dolor delectus!.
          </p>
          <IconNavbar />
        </div>

        <div className="flex flex-col w-1/3 gap-4 pt-2">
          <h2 className="font-Spring text-3xl text-light font-bold dark:text-darkModePrimary">
            Liens utiles
          </h2>
          <Link href="https://www.nemosolutions.fr" className=" text-light underline">
            Nemo Solutions 🐙
          </Link>
        </div>

        <div className="flex flex-col w-1/3 gap-4 pt-2">
          <h2 className="font-Spring text-3xl text-light dark:text-darkModePrimary font-bold">Horaires d&apos;ouverture</h2>
          <TimeSchedule />
        </div>
      </footer>

      <Copyrights />
    </>
  );
};

export default Footer;
