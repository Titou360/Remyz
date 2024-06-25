'use client';
import Image from 'next/image';
import { useState } from 'react';

const FeaturesCards = ({ data }) => {
  const { title, cover, description, info } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Mobile & Tablet mode */}
      <div className="hidden lg:block h-96 w-96 m-auto lg:h-72 lg:w-72 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl">
          <Image
            src={cover}
            alt={`Image de ${title}`}
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            width={300}
            height={180}
          />
        </div>
        <div className="absolute xs:px-3 inset-0 h-full rounded-xl bg-black/40 px-12 text-center text-slate-200">
          <div className="flex min-h-full flex-col items-center justify-center gap-4">
            <h3 className="text-3xl font-bold text-light">{title}</h3>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>

      {/* Desktop mode */}
      <div className=" lg:hidden group h-96 w-96 lg:h-80 lg:w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <Image
              src={cover}
              alt={`Image de ${title}`}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 dark:shadow-light"
              width={300}
              height={180}
            />
          </div>
          <div className="absolute xs:px-3 inset-0 h-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center gap-4">
              <h3 className="text-3xl font-bold text-light">{title}</h3>
              <p className="text-lg">{description}</p>
              <button
                className="mt-2 rounded-md bg-light border-2 border-transparent hover:border-light text-dark py-2 px-4 text-sm hover:bg-dark hover:text-light"
                onClick={openModal}
              >
                Lire plus
              </button>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <Modal onClose={closeModal}>
            {/* Contenu de la modale */}
            <h2 className="text-xl underline -mt-5">{title}</h2>
            <ul>
              {info.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
    </>
  );
};

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex ">
      <div className="absolute inset-0 bg-black/50 rounded-lg" onClick={onClose}></div>
      <div className="bg-light p-8 z-10 w-full h-full border-2 border-dark flex justify-center items-center flex-col rounded-lg">
        {/* Contenu de la modale */}
        {children}
        <button
          className="mt-2 rounded-md bg-light border-2 border-dark hover:border-light text-dark py-2 px-4 text-sm hover:bg-dark hover:text-light"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default FeaturesCards;
