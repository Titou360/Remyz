import Link from 'next/link';
import Copyrights from './Copyrights';
import IconNavbar from './IconNavbar';
import TimeSchedule from './TimeSchedule';

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full p-4 flex flex-row lg:flex-col items-start justify-around bg-primary dark:bg-darky gap-10 dark:border-top-solid dark:border-t-[2px] dark:border-light ">
        <div className=" flex flex-col w-1/3 lg:w-full gap-4 pt-2">
          <h2 className="font-Spring tracking-wider text-4xl text-light font-bold dark:text-darkModePrimary text-left lg:text-left">
            Remy&apos;z Aux Verts
          </h2>
          <p className="text-light">
            Remy&apos;z aux Verts, votre jardinier en Val de l&apos;Eyre. <br />
            Je vous propose mon excellence dans l&apos;entretien de votre jardin.
            <br /> Je me déplace pour les particuliers, les professionnels et les associations selon la zone de chalandise définie. Devis gratuit.
          </p>
          <IconNavbar />
        </div>

        <div className="flex flex-col w-1/3 lg:w-full gap-4 pt-2 place-items-center justify-center lg:items-start">
          <h2 className="font-Spring tracking-wider text-4xl text-light font-bold dark:text-darkModePrimary text-center lg:text-left">
            Liens utiles
          </h2>
          <ul className="flex flex-col items-center justify-center">
            <li>
              <Link href="https://www.nemosolutions.fr" className="text-light" target="_blank">
                Nemo Solutions 🐙
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="text-light">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-1/3 lg:w-full lg:items-start gap-4 pt-2 ">
          <h2 className="font-Spring tracking-wider text-4xl text-light dark:text-darkModePrimary font-bold text-right lg:text-left">
            Horaires d&apos;ouverture
          </h2>
          <TimeSchedule />
        </div>
      </footer>

      <Copyrights />
    </>
  );
};

export default Footer;
