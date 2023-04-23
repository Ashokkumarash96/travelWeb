import React from "react";

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_960_720.jpg'
        alt='contains map and required products'
      />

      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Hotels & Beaches
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eius quos voluptate illum excepturi quidem dolor
            nulla ratione repudiandae nisi.
          </p>
          <button>Book Now !</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
