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
    <div className="group h-96 w-96 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <Image src={cover} alt={title} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" width={300} height={180} />
        </div>
        <div className="absolute inset-0 h-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold text-light">{title}</h2>
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
          <h2 className='text-xl underline'>{title}</h2>
          <ul>
            {info.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

  const Modal = ({ onClose, children }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="bg-light p-8 rounded-md z-10">
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
