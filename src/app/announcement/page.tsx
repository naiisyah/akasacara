"use client";

import HighlightCard from '@/components/announcement/HighlightCard'
import UpdateCard from '@/components/announcement/UpdateCard'
import React from 'react'
import Image from 'next/image';
import { useState } from "react";

const announcements = [
  {
    id: 1,
    title:
      "Setan Alas: Film Horor Karya Kolaboratif Sekolah Vokasi UGM",
    date: "21 Juli 2025",
    content: "Film Setan Alas hasil kolaborasi antarfakultas, yang juga melibatkan siswa dari berbagai SMK",
    image: "/assets/setan_alas.png",
    link: "#",
  },
  {
    id: 2,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
    date: "21 Juli 2025",
    content: "Film ini menyegarkan kembali legenda dan genre jagal mistik dengan visualisasi 90-an yang dikontemporerkan,",
    image: "/assets/setan_alas2.png",
    link: "#",
  },
  {
    id: 3,
    title:
      "Film “Setan Alas” Berhasil Menangi 3 Kategori dalam Kompetisi Indonesian Screen Awards di Jogja-Netpac Asian Film Festival",
    date: "21 Juli 2025",
    content: "Di tengah sorotan industri film yang semakin berkembang di Indonesia, sebuah kolaborasi yang menarik antara talenta-talenta muda dari berbagai kalangan pendidikan telah berhasil menciptakan keajaiban di layar lebar.",
    image: "/assets/tengkorak.png",
    link: "#",
  },
  {
    id: 4,
    title:
      "'Tengkorak': A brilliant Indonesian science-fiction",
    date: "21 Juli 2025",
    content: "The film is both visually stunning and simplistic without the need for expensive bombast or faux intellect.",
    image: "/assets/setan_alas2.png",
    link: "#",
  },
];

const highlight = [
  {
    id: 1,
    title:
      "Karya Kolaboratif Sekolah Vokasi UGM Setan Alas",
    date: "21 Juli 2025",
    image: "/assets/setan_alas.png",
  },
  {
    id: 2,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman",
    date: "21 Juli 2025",
    image: "/assets/menyakiti_laut2.png",
  },
  {
    id: 3,
    title:
      "Film “Setan Alas” Berhasil Menangi Kompetisi",
    date: "21 Juli 2025",
    image: "/assets/setan_alas2.png",
  },
  {
    id: 4,
    title:
      "'Tengkorak': A brilliant Indonesian sci-fi",
    date: "21 Juli 2025",
    image: "/assets/tengkorak.png",
  },
  {
    id: 5,
    title:
      "Menyakiti Laut dan Saatnya Penghakiman",
    date: "21 Juli 2025",
    image: "/assets/menyakiti_laut2.png",
  },
  {
    id: 6,
    title:
      "Film “Setan Alas” Berhasil Menangi Kompetisi",
    date: "21 Juli 2025",
    image: "/assets/setan_alas2.png",
  },
  {
    id: 7,
    title:
      "'Tengkorak': A brilliant Indonesian sci-fi",
    date: "21 Juli 2025",
    image: "/assets/tengkorak.png",
  },
];

function Announcement() {
    const [page, setPage] = useState(0);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(highlight.length / itemsPerPage);

    const currentItems = highlight.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
    );

  return (
    <div className="flex flex-col items-start bg-akasacara">
        <div className="py-section px-4xl flex flex-col items-start gap-md self-stretch">
            <div className="flex p-xl justify-center items-end self-stretch aspect-16/9" style={{
                backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 68.13%, #000 100%), url('/assets/private_screening.png')",
            }}>
                <div className="flex flex-col flex-1 items-start gap-s">
                    <span className="headline-2 vfx-text-title self-stretch">Sekolah Vokasi UGM Gelar Private Screening Film “Setan Alas” (The Draft!)</span>
                    <div className="flex flex-col justify-center items-end gap-l self-stretch">
                        <span className="button-main vfx-text-title text-right">READ MORE →</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-section px-container flex flex-col items-start gap-l self-stretch">
            <span className="headline-1 hyperlink-txt self-stretch">HIGHLIGHT</span>
            <div className="flex items-start gap-m self-stretch">
                <div className="flex flex-col w-highlight items-start gap-m aspect-1015/901">
                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            src="/assets/menyakiti_laut.jpg"
                            alt="menyakiti laut"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex justify-end items-start gap-m self-stretch">
                        <span className="headline-3 hyperlink-txt flex-1">Menyakiti Laut dan Saatnya Penghakiman</span>
                        <div className="aka-text-subtitle-2">21 Juli 2025</div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-md flex-1 self-stretch">
                    <div className="flex flex-col h-side-highlight py-s justify-center items-start gap-m self-stretch">
                        {currentItems.map((item) => (
                            <HighlightCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                date={item.date}
                                image={item.image}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-m self-stretch">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`rounded-full transition-colors ${
                                page === i ? "h-4 w-4 bg-black" : "h-3 w-3 bg-[#4c4c4c]"
                            }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="py-section px-container flex flex-col items-start gap-xl self-stretch">
            <div className="flex justify-between items-center self-stretch">
                <span className="headline-1 aka-text-subtitle-1">LATEST UPDATE</span>
            </div>
            {announcements.map((item) => (
                <UpdateCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    date={item.date}
                    image={item.image}
                />
            ))}
        </div>
    </div>
  )
}

export default Announcement