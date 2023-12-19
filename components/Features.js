import data from '../public/data.json';
import FeaturesCards from './FeaturesCards';


const Features = () => {
  return (
    <div className="w-full m-auto grid grid-cols-3 gap-4 justify-center items-center h-screen">
      {data.services.map((service, index) => (
        <FeaturesCards key={index} data={service} />
      ))}
    </div>
  );
};

export default Features;
