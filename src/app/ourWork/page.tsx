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
    <div className="bg-akasacara min-h-screen">
      <div className="self strech py-section px-container">
        <h1 className="title aka-text-title uppercase text-center">Our Works</h1>
      </div>
        {/* KATEGORI */}
      <div className="text-center py-section px-container">
        <div className="flex justify-center font-medium gap-xl">
          <div className="kategoriourwork non-act-filter non-act-hyperlink">
            Film Production
          </div>
          <div className="non-act-filter non-act-hyperlink">|</div>
          <div className="kategoriourwork non-act-filter non-act-hyperlink">
            Animation
          </div>
          <div className="non-act-filternon-act-hyperlink">|</div> 
          <div className="kategoriourwork non-act-filter non-act-hyperlink">
            Game
          </div>
          <div className="non-act-filter non-act-hyperlink">|</div>
          <div className="kategoriourwork non-act-filter non-act-hyperlink">
            Fisik
          </div>
        </div>
        {/* DAFTAR OUR WORKS */}
        <div className="flex flex-col gap-l mt-4xl">
          {ourWork.map((item) => (
            <OurWorkCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;