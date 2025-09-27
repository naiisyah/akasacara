"use client";

import { useState } from "react";
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
  {
    id: 5,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 6,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 7,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 8,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
  {
    id: 9,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    image: "/placeholder.png",
    link: "#",
  },
];

export default function Announcements() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(announcements.length / itemsPerPage);

  const currentItems = announcements.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-section px-container flex flex-col items-start gap-xl self-stretch">
      <div className="flex flex-col justify-end items-center self-stretch gap-xl">
        <h1 className="headline-1 uppercase akasacara-title self-stretch">
          Announcements
        </h1>

        <div className="flex flex-col items-start gap-l self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <span className="headline-2 aka-text-subtitle-1">Latest update</span>
            <div className="button-main uppercase akasacara-title">See all</div>
          </div>

          <div className="flex flex-col gap-l">
            {currentItems.map((item) => (
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

        <div className="flex items-center gap-m">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-colors ${
                page === i ? "h-6 w-6 bg-black" : "h-4 w-4 bg-[#4c4c4c]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
