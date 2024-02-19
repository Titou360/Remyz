import Link from "next/link";

const Copyrights = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center flex-col bg-dark gap-3">
      <span className="lg:text-center lg:!text-xs text-light">
        Pensé & construit avec ❤️ par
        <Link className="text-nemo px-1 underline underline-offset-2 lg:!text-s" href="https://www.nemosolutions.fr/" target="_blank">
          NEMO Solutions
        </Link>
      </span>
      <span className="text-light lg:!text-xs">
        2023 - {new Date().getFullYear()} &copy; Tous droits réservés <br />
      </span>
    </div>
  );
};

export default Copyrights;
