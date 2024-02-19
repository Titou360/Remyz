import data from 'public/data.json';
import PartnersCard from './PartersCard';

const Partners = () => {
  return (
    <section id="business">
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Partenaires</h2>
      <div className=" grid grid-cols-2 lg:grid-cols-1 w-full m-auto gap-y-1 gap-x-1 justify-items-center ">
        {data.partners.map((partner, index) => (
          <PartnersCard key={index} data={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
