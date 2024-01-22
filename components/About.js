import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id="about">
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">À propos de moi</h2>

      <div className="w-full flex flex-row xs:flex-col">
        <div className="w-1/3 xs:w-full flex items-center justify-center">
          <Image src="/assets/img/About/profil.jpg" alt="Photo de Rémy" width={281} height={176} />
        </div>
        <div className="w-2/3 xs:w-full p-8">
          <h3 className="text-2xl dark:text-light">Je suis Rémy Rodriguez</h3>
          <p className="text-xl dark:text-light">
            Natif de Gironde et résidant à Salles, je suis dédié à ma communauté du Val de l&apos;Eyre.< br/> Spécialisé dans
            l&apos;entretien de jardins, je propose mes services aux particuliers et professionnels.
            <br />
            <br />
            Confiez votre projet d&apos;aménagement à REMY’Z AUX VERTS, expert en création et entretien de jardins dans le Val de l&apos;Eyre. De la
            plantation aux aménagements extérieurs, je façonne des espaces verts harmonieux pour améliorer votre cadre de vie. Contactez-moi pour
            concrétiser vos idées et profiter de vos espaces tout au long de l&apos;année.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
