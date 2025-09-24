import React from 'react';
import Announcements from '@/components/Announcements';

const Beranda = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* START SHOWREEL */}
      <section className="showreel relative w-screen h-screen overflow-hidden">
        <video 
          src="/assets/showreel.mp4" 
          autoPlay 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute top-6 left-6 z-10">
          <img 
            src="/assets/logo.png" 
            alt="Akasacara Film Logo" 
            className="w-64 h-15"
          />
        </div>
      </section>
      {/* END SHOWREEL */}

      {/* START ANNOUNCEMENT */}
      <section className="announcement">
        <Announcements/>
      </section>
      {/* END ANNOUNCEMENT */}

      {/* START OUR WORK */}
      <section className="bg-white-100 p-6 mb-8 px-20">
        <h2 className="font-plus-jakarta-sans text-heading-3 mb-4">OUR WORK!</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="w-full md:w-1/2" />
          <p className="text-base text-black-500 leading-relaxed">
            Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
            Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
          </p>
        </div>
         <div className="flex flex-col md:flex-row gap-6 items-center">
          <p className="text-base text-black-500 leading-relaxed">
            Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
            Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
          </p>
           <img src="/assets/DarahNyai.png" alt="About Us Akasacara" className="w-full md:w-1/2" />
        </div>
         <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="w-full md:w-1/2" />
          <p className="text-base text-black-500 leading-relaxed">
            Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
            Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
          </p>
        </div>
      </section>
      {/* END OUR WORK */}

      {/* START ABOUTE US */}
      <section className="g-white-100 pt-24 pr-[78px] pb-[78px] pl-[78px] mb-8">
        <h2 className="font-plus-jakarta-sans text-[60px] font-[800] uppercase mb-12">About Us!</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img src="/assets/aboutus.jpg" alt="About Us Akasacara" className="w-full md:w-1/2" />
          <p className="font-rubik text-3xl text-black">
            Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
            Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
          </p>
        </div>
      </section>
      {/* END ABOUTE US  */}
    </div>
  );
};

export default Beranda;