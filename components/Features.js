import data from '../public/data.json';
import FeaturesCards from './FeaturesCards';


const Features = () => {
  return (
    <section id="services" className='my-12'>
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-10 font-Spring">Mes services</h2>
      <div className="w-full grid grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-y-16 gap-px justify-items-center ">
        {data.services.map((service, index) => (
          <FeaturesCards key={index} data={service} />
        ))}
      </div>
    </section>
  );
};

export default Features;
