import React from 'react'
import Image from 'next/image'
import ArticleCard from "@/components/ArticleCard";

type ArticleProps = {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
};

const announcements = [

    {
      id: 1,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/DarahNyai.png",
      link: "#",
    },
    {
      id: 2,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/DarahNyai.png",
      link: "#",
    },
    {
      id: 3,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/DarahNyai.png",
      link: "#",
    },
    {
      id: 4,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/DarahNyai.png",
      link: "#",
    },
]

function article({ id, title, date, image }: ArticleProps) {
  return (
    <div className="pb-[100px] bg-[#FDFDFD]">
        <div className="pb-[100px] h-[810px]">
            <Image
                src="/assets/DarahNyai.png"
                alt="gambar"
                fill
                className="object-cover rounded"
            />
        </div>
        <div className="px-[96px] gap-[16px]">
            <p className="font-plus-jakarta-sans text-[60px] font-[700] leading-[72px] text-black">Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025</p>
            <p className="text-[32px] font-[400] text-black">21 Juli 2025</p>
        </div>
        <div className="px-[96px] py-[100px] gap-[10px]">
            <p className="text-[32px] font-[400px] text-black leading-[42px] text-justify">Suara.com - Darah Nyai produksi Imaginarium Pictures dan Akasacara akan mulai tayang di bioskop pada 21 Agustus 2025. Film ini mengusung genre khas Horor Jagal Mistis (Mystic-Slasher) berdasar legenda Nyai Roro Kidul dari Laut Selatan.
                <br /><br />
                Memang sebuah tantangan tersendiri, memproduksi film horor di tengah begitu padatnya produksi dan penayangan film Indonesia bergenre horor. Di satu sisi, bagaimana supaya film ini tidak jadi sekadar latah. Di sisi lain, bagaimana agar film ini tidak asal beda juga, abai pada kegairahan menonton horor di negeri ini.
                <br /><br />
                Pendekatan kami di Imaginarium Pictures dan tim kreatif Darah Nyai adalah dengan menggabungkan moda produksi film B dengan tampilan (looks) seperti film-film B dari Indonesia dan Hongkong pada 1990-an dan film Giallo Italia 1970-an yang brutal dan penuh warna-warni kontras yang kuat, dengan cara produksi dan isu kekinian.
                <br /><br />
                Kami berangkat dari kecintaan yang keras kepala pada medium film dan genre horor, memilih subgenre yang jarang diproduksi di Indonesia, yakni jagal mistik atau mystic-slasher (dengan fokus pada torture atau penyiksaan), sekaligus keinginan mengajak penonton bersenang-senang bersama, memuaskan kebutuhan pelepasan terhadap berbagai ketidakadilan yang kini terjadi di dunia kita.</p>
        </div>
        <div className="px-[96px] h-[810px]">
            <Image
                src="/assets/DarahNyai.png"
                alt="gambar"
                fill
                className="object-cover rounded"
            />
        </div>
        <div className="px-[96px] py-[100px] gap-[10px]">
            <p className="text-[32px] font-[400px] text-black leading-[42px] text-justify">Moda produksi ini memang harus menghadapi banyak sekali keterbatasan. Tapi, ada juga banyak keleluasan dalam berkreasi dan berproduksi. Pilihan warna, gaya dialog, perlakuan kamera, editing, yang tidak melulu gaya “anak sekolahan film” walau jelas didasari pemahaman tentang bagaimana medium film bekerja. Tim kreasi dan tim produksi berproses secara kolektif, banyak masukan dari pemain dan sutradara di lapangan membentuk adegan dan dialog-dialog secara lebih jitu untuk film ini.
                <br /><br />
                Film Darah Nyai adalah film ketiga Yusron Fuadi (IG @filmtengkorak), yang mencuat karena film Tengkorak, Setan Alas! (The Draft), dan sedang menanti tayang film keempat, The Verdict/The Judgement. Ditulis oleh sutradara film-film cult, Azzam Firullah bersama Hikmat Darmawan, diproduseri Steve Wirawan, Rayner Wijaya. Dibintangi antara lain oleh Violla Georgie, Jessica Katharina, Rory Asyari, Vonny Anggraini, Nai Djenar Maisa Ayu.
                <br /><br />
                Film ini menyegarkan kembali legenda dan genre jagal mistik dengan visualisasi 90-an yang dikontemporerkan, membawa isu-isu terkini seperti perdagangan manusia (Human Trafficking) dan Eco-Horror (Horor Ekologis), korupsi, dan kekerasan terhadap perempuan (Femisida).
                <br /><br />
                Darah Nyai akan tayang di berbagai kota Indonesia. Walau diputar juga di Jakarta, kami memusatkan perhatian pada penayangan di luar Jakarta seperti Karawang, Bekasi, Yogyakarta, Surabaya, Probolinggo, Cibadak, Pekalongan, Klaten, Ungaran, Sukabumi, Cianjur, Subang, Indramayu, Pemalang, Salatiga, Gombong, Solo, Kediri, Nganjuk, Pasuruan, Cilacap, Kroya, Purwodadi, Brebes, Kudus, Demak, Rembang, Wonosobo, Sengkang, Purwokerto, Kediri, Tulung Agung, Bangka Belitung, Lampung, Denpasar, Pekanbaru, Mataram, Manado, Kotabaru, Poso dan seterusnya.</p>
        </div>
        <div className='gap-[48px] p-[100px] flex flex-col'>
            <div className="font-plus-jakarta-sans text-[40px] font-[600]">Latest Announcements</div>
            <div className='grid grid-cols-2 gap-[16px]'>
                {announcements.map((item) => 
                <ArticleCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    image={item.image}
                />
                )}
            </div>
        </div>
    </div>
  )
}

export default article