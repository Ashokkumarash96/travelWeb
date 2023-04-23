import React from "react";

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16  lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Beautiful Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam esse
          nisi ex cupiditate architecto sunt molestias vero officia dignissimos
          officiis.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://media.istockphoto.com/id/1373238786/photo/hotel-room-breakfast-on-balcony-view-of-waikiki-beach-honolulu-hawaii-vacation-travel-morning.jpg?b=1&s=170667a&w=0&k=20&c=8xDU6vo_2hXGwxFjyUEQ8VLM7j8gvVig-iD4VHsMbGk='
          alt=''
        />
        <img
          className='object-cover w-full h-full'
          src='https://media.istockphoto.com/id/1158432503/photo/modern-design-white-bedroom-in-a-big-house.jpg?s=612x612&w=0&k=20&c=SIIRd0aM99_ZfjSWwTWWYsuYJqwJKyCCp1gty7i-Gto='
          alt=''
        />
      </div>
    </div>
  );
};

export default Rooms;
