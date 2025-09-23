"use client";

import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {
    id: 1,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 2,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 3,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 4,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
];

export default function Announcements() {
  return (
    <section className="py-[100px] px-[96px] gap-[48px]">

      <h2 className="font-plus-jakarta-sans text-[60px] font-[800] uppercase">Announcements</h2>
      
      <div className="flex flex-col gap-[32px]">
        <div className="flex justify-between items-center">
          <span className="font-plus-jakarta-sans text-[44px] font-[600]">Latest update</span>
          <div className="flex items-center gap-[16px] text-[32px] font-[400]">
            <button className="p-1">&lt;</button>
            <span>Januari 2025</span>
            <button className="p-1">&gt;</button>
          </div>
        </div>
        
        {/* Announcement List */}
        <div className="flex flex-col gap-[32px]">
            {announcements.map((item) => (
                <AnnouncementCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    image={item.image}
                />
            ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-[48px] text-[36px] font-[700]">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </section>
  );
}
