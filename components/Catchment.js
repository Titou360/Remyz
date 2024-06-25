import React from 'react'
import Image from 'next/image';
import CatchmentCard from "../public/assets/img/catchment/catch.webp"

const Catchment = () => {
  return (
    <section id="catchment" className="my-12">
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Zone d&apos;intervention</h2>
      <figure>
        <Image src={CatchmentCard} alt="Carte de chalandise" className="w-full" />
        <figcaption className="font-bold italic text-xl text-center dark:text-light h-20">
          Au-delà des deux zones en surbrillance, merci de me contacter via le formulaire{' '}
        </figcaption>
      </figure>
    </section>
  );
}

export default Catchment
