import Link from "next/link";

const Copyrights = () => {
  return (
    <div className="w-full px-4 h-20 flex items-center justify-between flex-row bg-dark gap-3">
      <span className="text-light lg:!text-xs">
        {new Date().getFullYear()} Remy&apos;z Aux Verts &copy; Tous droits réservés <br />
      </span>
      <span className="lg:text-center lg:!text-xs text-light">
        Pensé & construit avec ❤️ par
        <Link className="text-nemo px-1 underline underline-offset-2 lg:!text-s" href="https://www.nemosolutions.fr/" target="_blank">
          NEMO Solutions
        </Link>
      </span>
    </div>
  );
};

export default Copyrights;
