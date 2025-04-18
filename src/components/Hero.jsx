import React from 'react';
import heroImg from '../../images/desktop/image-hero.jpg'

const Hero = () => {
  return (
    <section
      className="relative hero-image h-100 bg-cover bg-center flex items-center justify-center text-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute top-60% left-21 border-1 text-white px-6 py-6 max-w-90 text-left">
        <h1 className="text-4xl font-josefin font-light">
          IMMERSIVE EXPERIENCES THAT DELIVER 
        </h1>
      </div>
    </section>
  );
};

export default Hero;
