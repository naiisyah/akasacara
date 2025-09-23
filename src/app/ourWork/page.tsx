import { div } from "framer-motion/client";

const OurWork = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
        <h1 className="font-plus-jakarta-sans text-6xl text-black text-center mb-8">Our Works</h1>
        {/* KATEGORI */}
        <div className="text-center mb-12">
            <ul className="flex justify-center space-x-6 font-medium">
                <div>
                    <li className="hover:italic font-semibold">Film Production</li>
                </div>
                <div>
                    <li>Animation</li>
                </div>
                <div>
                    <li>Game</li>
                </div>
                 <div>
                    <li>Fisik</li>
                </div>
            </ul>
        </div>

        {/* DAFTAR OUR WORKS */}
        <section className="px-8 md:px-20 space-y-12">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="flex-1 w-100 h-auto md:w-1/2" />
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">GANYANG SETAN ALAS</h3>
                    <p className="font-rubik text-3xl text-black">
                        Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
                        Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <img src="/assets/DarahNyai.png" alt="About Us Akasacara" className="flex-1 w-100 h-auto md:w-1/2" />
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">GANYANG SETAN ALAS</h3>
                    <p className="font-rubik text-3xl text-black">
                        Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
                        Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="flex-1 w-100 h-auto md:w-1/2" />
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">GANYANG SETAN ALAS</h3>
                    <p className="font-rubik text-3xl text-black">
                        Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.
                        Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, 
                    </p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default OurWork;