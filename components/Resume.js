import React from 'react'

const Resume = () => {
  return (
    <div className="w-full h-auto m-auto flex justify-center flex-row gap-5 items-baseline border-solid border-4 bg-primary px-2 py-4">
      <blockquote className="text-lg italic font-semibold text-white ">
        <p>Consultez notre liste de services pour votre jardin et obtenez un devis gratuit</p>
      </blockquote>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Contactez-moi
      </button>
    </div>
  );
}

export default Resume
