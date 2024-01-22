import Link from 'next/link';
import errorImage from "../public/assets/img/Errorpage/error.jpg"
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center gap-8">
      <Image src={errorImage} alt="Photo d'un tracteur en panne" widht={500} height={500} className="rounded-lg" />
      <div className="flex flex-col items-start">
        <h1 className="text-6xl font-bold text-center dark:text-light">Page non trouvée</h1>
        <p className="text-lg mt-4 text-center dark:text-light">Oops! Vous essayez d&apos;accéder à une page qui n&apos;existe pas</p>
        <Link legacyBehavior href="/">
          <a className="text-primary mt-4 text-xl underline">Retour à l&apos;acceuil</a>
        </Link>
      </div>
    </div>
  );
};

