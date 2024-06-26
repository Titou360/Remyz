'use client';
import { ArrowIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Buttton';
import SeoImage from '../../public/assets/img/SEO/Infographie-Remyz-aux-verts-jardinier-salles.png';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

    const [currentUrl, setCurrentUrl] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
      setCurrentUrl(window.location.href);
      setTitle(document.title);
    }, []);
  return (
    <section id="sitemap" className="w-full pt-14 flex flex-col items-center bg-light dark:bg-darky">
      <div className="w-full flex flex-col items-center justify-center gap-6 my-8">
        {/* H1 desktop */}
        <h1 className="lg:hidden text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">
          Remy&apos;z aux Verts : Jardinier à Salles
        </h1>
        {/* H1 mobile */}
        <h1 className="hidden lg:block lg:text-4xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">
          Remy&apos;z aux Verts
          <br /> Jardinier à Salles
        </h1>
      </div>

      <div className="w-5/6 lg:w-[95%] h-auto mx-auto bg-white rounded-t-lg border border-1 border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="m-12 lg:m-4">
          <p className="text-center">
            <span className="font-bold text-xl">Vous êtes à la recherche d’un jardinier professionnel reconnu à Salles ?</span>
            <br />
            <br />
            <span className="text-xl">Ne cherchez pas plus loin ! Vous êtes sur le bon site Internet !</span>
            <br />
            <br />
            <span className="text-xl">
              <span className="text-primary font-Spring text-2xl">Rémy&apos;Z Aux Verts</span> est là pour vous aider à l&apos;entretien de votre
              jardin et de vos espaces verts
            </span>
          </p>
          <div className="mt-12 flex items-center justify-center">
            <Button href="/#contact" title="Prendre contact" />
          </div>
          <div className="mt-12">
            <div className="flex items-center justify-between w-full border-2 bg-primary py-4 cursor-pointer" onClick={toggleOpen}>
              <h2 className="ml-4 text-xl text-white">Tables des matières</h2>
              <ArrowIcon
                className={`mr-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : '-rotate-90'}`}
                fill="white"
                width={24}
                height={24}
              />
            </div>
            <div
              ref={contentRef}
              className={`ml-4 mt-4 transition-all duration-300 ease-in-out overflow-hidden`}
              style={{
                maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
              }}
            >
              <ol className="list-decimal ml-4">
                <li>
                  <Link href="#necessites">La nécessité d&apos;un jardinier à Salles</Link>
                </li>
                <li>
                  <Link href="#competences">Nos compétences à Salles</Link>
                </li>
                <li>
                  <Link href="#services">Services proposés à Salles</Link>
                </li>
                <li>
                  <Link href="#budget">Budget estimé pour l&apos;entretien de son jardin à Salles</Link>
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-12" id="necessites">
            <h2 className="text-primary font-Spring text-4xl">La nécessité d&apos;un jardinier à Salles</h2>
            <p className="mt-8">
              Avoir un jardin bien entretenu est essentiel pour la beauté et la santé de votre espace extérieur.
              <br /> À Salles, un jardinier professionnel peut vous aider à maintenir votre jardin en parfait état tout au long de l&apos;année. Que
              ce soit pour l&apos;entretien régulier ou des projets de jardin.
              <br />
              Les terrains de Salles vont de quelques centaines de mètres carrés à plusieurs hectares.
              <br />
              Il faut pouvoir compter sur un jardinier professionnel, équipé avec du matériel de haute qualité et avec des compétences accrues dans ce
              domaine.
            </p>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <Button href="/#contact" title="Prendre contact" />
          </div>
          <div className="mt-12" id="competences">
            <h2 className="text-primary font-Spring text-4xl">Mes compétences à Salles</h2>
            <p className="mt-8">
              Un jardinier efficace à Salles c&apos;est avant tout : <br />
            </p>
            <ol className="list-decimal ml-8 mt-8">
              <li>
                <span className="font-bold">Connaissance des Plantes et des Techniques de Jardinage :</span>
                <br />
                - Identification et sélection des plantes : Un bon jardinier doit être capable d&apos;identifier une grande variété de plantes et
                savoir lesquelles sont les plus adaptées à un environnement spécifique.
                <br />
                - Techniques de plantation : Connaissance approfondie des méthodes de plantation, y compris les besoins en lumière, sol, eau et
                nutrition des différentes espèces végétales.
                <br />- Entretien des plantes : Techniques de taille, élagage, arrosage, fertilisation et protection des plantes contre les maladies
                et les parasites.
              </li>

              <li>
                <span className="font-bold">Gestion des Sols et Fertilisation</span>
                <br />
                - Analyse des sols : Capacité à analyser le type de sol et à ajuster le pH et la composition nutritive pour optimiser la croissance
                des plantes.
                <br />
                - Amélioration des sols : Techniques pour améliorer la structure et la fertilité du sol, comme l&apos;ajout de compost, de paillis ou
                d&apos;autres amendements.
                <br />- Fertilisation : Connaissance des types d&apos;engrais (organiques et inorganiques) et des techniques d&apos;application pour
                assurer une nutrition adéquate des plantes.
              </li>

              <li>
                <span className="font-bold">Conception et Aménagement Paysager</span>
                <br />
                - Planification des espaces verts : Compétence en design pour planifier et concevoir des jardins attrayants et fonctionnels en tenant
                compte des besoins et des préférences du client.
                <br />
                - Installation de structures paysagères : Savoir-faire pour installer des éléments tels que des terrasses, des allées, des clôtures,
                des systèmes d&apos;irrigation et des éclairages extérieurs.
                <br />- Création d&apos;écosystèmes équilibrés : Connaissance des principes d&apos;écologie pour créer des jardins qui favorisent la
                biodiversité et la durabilité environnementale.
              </li>
            </ol>
          </div>

          <div className="mt-12" id="services">
            <h2 className="text-primary font-Spring text-4xl">Services proposés à Salles</h2>
            <ol className="list-decimal ml-8 mt-8">
              <li>
                <span className="font-bold">Entretien de pelouse</span>
                <br />
                - Tonte de pelouse <br />
                - Aération des sols <br />- Fertilisation et désherbage
              </li>
              <li>
                <span className="font-bold">Plantation de fleurs et de plantes</span>
                <br />
                - Sélection et plantation de plantes annuelles, vivaces et arbustes <br />
                - Création de massifs fleuris <br />- Plantation d&apos;arbres
              </li>
              <li>
                <span className="font-bold">Taille et Élagage</span>
                <br />
                - Taille des haies et des arbustes
                <br />
                - Élagage des arbres pour enlever les branches mortes ou dangereuses <br />
                - Taille des plantes pour favoriser une croissance saine <br />
              </li>
              <li>
                <span className="font-bold">Aménagement Paysager</span>
                <br />
                - Conception et installation de jardins
                <br />
              </li>
              <li>
                <span className="font-bold">Gestion des Déchets Verts</span>
                <br />
                - Collecte et évacuation des déchets de jardinage
                <br />
                - Recyclage des déchets verts
                <br />
              </li>
              <li>
                <span className="font-bold">Traitement et Prévention des Maladies et Parasites</span>
                <br />
                - Diagnostic et traitement des maladies des plantes
                <br />
                - Application de produits phytosanitaires biologiques ou chimiques
                <br />- Conseils pour la prévention des infestations
              </li>
            </ol>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <Button href="/#contact" title="Prendre contact" />
          </div>
          <div className="mt-12" id="budget">
            <h2 className="text-primary font-Spring text-4xl">Budget estimé pour l&apos;entretien de son jardin à Salles</h2>
            <p className="mt-8">
              Le budget moyen pour l&apos;entretien de votre jardin varie selon plusieurs facteurs, tels que la taille et la complexité de votre
              espace vert, les types de services demandés (comme la tonte de pelouse, la taille des haies, ou l&apos;installation de systèmes
              d&apos;irrigation), et la fréquence des interventions nécessaires.
            </p>

            <p className="font-bold">
              Les tarifs pour un taillage de haie varie entre 7 € et 12€ le mètre linéaire, ceux pour une tonte entre 4€et 10€ le mètre carré.
              <br />
              Enfin pour un projet sur mesure, le coût peut dépasser les 900 €.
            </p>
          </div>
          <div className="my-12 flex items-center justify-center">
            <Image src={SeoImage} alt="Infographie-Remyz-aux-verts-jardinier-salles" />
          </div>

          <div>
            <h2>Partagez ceci autour de vous !</h2>
            <div className="flex items-center justify-center">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-button facebook"
              >
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
