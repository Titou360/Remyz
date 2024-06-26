'use client';
import data from '../public/data.json';
import Slider from 'react-slick';
import PartnersCard from './PartersCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function simpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section id="business" className='my-12'>
      <h2 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Partenaires</h2>
      <div className='block'>
        <Slider {...settings}>
          {data.partners.map((partner, index) => (
            <PartnersCard key={index} data={partner} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default simpleSlider;
