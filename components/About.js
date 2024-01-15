import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id="about">
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">À propos de moi</h2>

      <div className="w-full flex flex-row xs:flex-col">
        <div className="w-1/3 xs:w-full flex items-center justify-center">
          <Image src="/assets/img/About/profil.jpg" alt="Profil image" width={200} height={200} />
        </div>
        <div className="w-2/3 xs:w-full p-8">
          <h3 className="text-2xl dark:text-light">Je suis Rémy Rodriguez</h3>
          <p className="text-xl dark:text-light">
            Je suis un garçon du Val de l&apos;Eyre ! Je suis né en Gironde et j&apos;ai grandi à Salles où j&apos;ai un engagement solide envers la
            communauté.
            <br />
            <br />
            Aujourd&apos;hui, je m&apos;occupe de vos jardins et propose mes services aux particuliers et professionnels du Val de l&apos;Eyre.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
