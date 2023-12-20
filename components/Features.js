import data from '../public/data.json';
import FeaturesCards from './FeaturesCards';


const Features = () => {
  return (
    <section id="services">
      <h2 className="text-3xl text-primary capitalize text-center my-4">Mes services</h2>
      <div className="w-full grid grid-cols-3 gap-y-16 gap-px justify-items-center">
        {data.services.map((service, index) => (
          <FeaturesCards key={index} data={service} />
        ))}
      </div>
    </section>
  );
};

export default Features;
