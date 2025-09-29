import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type AnnouncementCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export function AnnouncementCard({ id, title, date, image }: AnnouncementCardProps) {
  return (
    <div className="flex justify-center items-center gap-l self-stretch">
        <div className="flex-1 relative aspect-[16/9]">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-md self-stretch">
            <div className="flex flex-col justify-center items-start gap-m py-m flex-1 self-stretch">
                <h3 className="headline-3 aka-text-subtitle-1">{title}</h3>
                <span className="body-reg aka-text-subtitle-2">{date}</span>
            </div>
            <Link
                href={`article/${id}`}                
                className="button-secondary hyperlink-txt"
            >
                READ MORE →
            </Link>
        </div>
    </div>
  )
}

export default AnnouncementCard