import data from 'public/data.json';
import PartnersCard from './PartersCard';



const Partners = () => {

  return (
    <section id="business">
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Partenaires</h2>
      <div className="w-3/4 m-auto gap-y-16 gap-px justify-items-center ">
          {data.partners.map((partner, index) => (
            <PartnersCard key={index} data={partner} />
          ))}
      </div>
    </section>
  );
}

export default Partners
