import React from 'react';

const Beranda = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* START SHOWREEL */}
      <section className="showreel"></section>
      {/* END SHOWREEL */}

      {/* START ANNOUNCEMENT */}
      <section className="announcement"></section>
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
      <section className="bg-white-100 p-6 mb-8 px-20">
        <h2 className="font-plus-jakarta-sans text-heading-1 text-black mb-4">ABOUT US!</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src="/assets/aboutus.jpg" alt="About Us Akasacara" className="w-full md:w-1/2" />
          <p className="text-base text-black-500 leading-relaxed">
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