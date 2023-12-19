import Image from 'next/image';
import React from 'react'
import profilPic from "../public/assets/img/About/profil.jpg"

const About = () => {
  return (
    <div id="about">
      <h2 className="text-3xl text-primary capitalize text-center my-4">À propos de moi</h2>

      <div className="w-full flex flex-row">
        <div className="w-1/3">
          <Image href={profilPic} alt="Profil image" width={200} height={200} />
        </div>
        <div className="w-2/3 p-8">
          <h3 className="text-2xl capitalize">Je suis Rémy Rodriguez</h3>
          <p>
            Je suis un garçon du Val de l&apos;Eyre ! Je suis né en Gironde mais j&apos;ai grandi à Salles où j&apos;ai eu un engagement solide envers la communauté.
            <br />
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
