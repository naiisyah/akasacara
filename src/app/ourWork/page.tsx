import { div } from "framer-motion/client";
import OurWorkCard from "@/components/OurWorkPageCard";

const ourWork = [
  {
    id: 1,
    title:
      "GANYANG SETAN ALAS",
    description: "Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films,",
    image: "/placeholder.png",
  },
  {
    id: 2,
    title:
      "GANYANG SETAN ALAS",
    description: "Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films,",
    image: "/placeholder.png",
  },
  {
    id: 3,
    title:
      "GANYANG SETAN ALAS",
    description: "Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films,",
    image: "/placeholder.png",
  },
  {
    id: 4,
    title:
      "GANYANG SETAN ALAS",
    description: "Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films,",
    image: "/placeholder.png",
  },
  
];

const OurWork = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
        <h1 className="font-plus-jakarta-sans text-6xl text-black text-center mb-8">Our Works</h1>
        {/* KATEGORI */}
        <div className="text-center mb-12">
            <ul className="flex justify-center space-x-6 font-medium">
                <div>
                    <li className="hover:italic hover:underline font-semibold">Film Production</li>
                </div>
                <div>
                    <li className="hover:italic hover:underline font-semibold">Animation</li>
                </div>
                <div>
                    <li className="hover:italic hover:underline font-semibold">Game</li>
                </div>
                 <div>
                    <li className="hover:italic hover:underline font-semibold">Fisik</li>
                </div>
            </ul>
        </div>

        {/* DAFTAR OUR WORKS */}
        <section className="px-8 md:px-20 space-y-12">
            {ourWork.map((item) => (
                <OurWorkCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                />
            ))}
        </section>
    </div>
  );
};

export default OurWork;