"use client";

import { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";

type Announcement = {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
};

const announcementsByMonth: Record<string, Announcement[]> = {
  "Januari 2025": [    
    {
      id: 1,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 2,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 3,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 4,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 5,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 6,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/placeholder.png",
      link: "#",
    },
  ],
  "Februari 2025": [
    {
      id: 7,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Februari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 8,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Februari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 9,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Februari 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 10,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Februari 2025",
      image: "/placeholder.png",
      link: "#",
    },
  ],
  "Maret 2025": [
    {
      id: 10,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Maret 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 11,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Maret 2025",
      image: "/placeholder.png",
      link: "#",
    },
    {
      id: 12,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Maret 2025",
      image: "/placeholder.png",
      link: "#",
    },
  ],
};

const months = Object.keys(announcementsByMonth);

export default function Announcements() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const currentMonth = months[currentMonthIndex];
  const announcements = announcementsByMonth[currentMonth] || [];

  // Pagination
  const totalPages = Math.ceil(announcements.length / itemsPerPage) || 1;
  const paginatedAnnouncements = announcements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Navigasi bulan
  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) =>
      prev === 0 ? months.length - 1 : prev - 1
    );
    setCurrentPage(1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) =>
      prev === months.length - 1 ? 0 : prev + 1
    );
    setCurrentPage(1);
  };

  // Navigasi halaman
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  return (
    <section className="py-[100px] px-[96px] gap-[48px]">
      <h2 className="font-plus-jakarta-sans text-[60px] font-[800] uppercase">
        Announcements
      </h2>

      <div className="flex flex-col gap-[32px]">
        <div className="flex justify-between items-center">
          <span className="font-plus-jakarta-sans text-[44px] font-[600]">
            Latest update
          </span>
          <div className="flex items-center gap-[16px] text-[32px] font-[400]">
            <button className="p-1" onClick={handlePrevMonth}>
              &lt;
            </button>
            <span>{currentMonth}</span>
            <button className="p-1" onClick={handleNextMonth}>
              &gt;
            </button>
          </div>
        </div>

        {/* Announcement List */}
        <div className="flex flex-col gap-[32px]">
          {paginatedAnnouncements.length > 0 ? (
            paginatedAnnouncements.map((item) => (
              <AnnouncementCard
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            ))
          ) : (
            <p className="text-xl">Belum ada pengumuman untuk bulan ini.</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      {announcements.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-[48px] text-[36px] font-[700]">
          <button onClick={handlePrevPage}>&lt;</button>
          <button onClick={handleNextPage}>&gt;</button>
        </div>
      )}
    </section>
  );
}
