import Link from "next/link";

const Copyrights = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center flex-col bg-dark gap-3">
      <span className="xs:!text-xs text-light">
        Pensé & construit avec ❤️ par
        <Link className="text-light px-1 underline underline-offset-2 xs:!text-s" href="https://clement-felices-portfolio.vercel.app/" target="_blank">
          Clément FELICES
        </Link>
        pour
        <Link className="text-nemo px-1 underline underline-offset-2 xs:!text-s" href="https://www.nemosolutions.fr/" target="_blank">
          NEMO Solutions
        </Link>
      </span>
      <span className="text-light xs:!text-xs">
        {new Date().getFullYear()} &copy; Tous droits réservés <br />
      </span>
    </div>
  );
};

export default Copyrights;
