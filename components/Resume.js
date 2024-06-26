import Link from 'next/link';
import React from 'react'
import Button from './Buttton'

const Resume = () => {
  return (
    <div className="w-full h-auto m-auto flex justify-center lg:items-center flex-row xs:flex-col gap-5 items-baseline border-solid border-4 bg-primary px-2 py-4">
      <blockquote className="text-md italic font-semibold text-white text-center ">
        <p className='text-center'>Obtenez un devis gratuit un devis gratuit</p>
      </blockquote>
      <Button href="/contact" title="Contactez-moi" />
    </div>
  );
}

export default Resume
