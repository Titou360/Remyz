'use client';
import Image from 'next/image';



const PartnersCard = ({ data }) => {
  const { name, cover, description, type } = data;
  return (
    <div className="grid min-h-[120px] place-items-center rounded-lg p-6 lg:overflow-visible">
      <div className="relative flex w-3/4 xs:w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <Image src={cover} width={150} height={150} alt="image" className="object-cover w-full h-full" />
          {/* Black Friday Mega Offer */}
          {/* <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-xl">
                    <h2 className="text-4xl font-bold text-center"> Black Friday <br /> 
                    <span className="text-red-500"> 50% Off</span>
                    </h2>
                    </div> */}
          {/* End Black Friday Mega Offer */}
        </div>
        <div className="p-6">
          <h3 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-primary uppercase">
            Partenaire {type}
          </h3>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{name}</h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">{description}</p>
          <a className="inline-block" href="#">
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-primary uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Découvrir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersCard;
