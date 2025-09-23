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
    <div className="flex gap-[32px]">
        <div className="flex-1 h-[342px] bg-gray-200 relative shrink-0">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded"
            />
        </div>
        <div className="flex-1 flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
                <h3 className="font-plus-jakarta-sans text-[36px] font-[600] leading-snug">
                    {title}
                </h3>
                <span className="text-[24px] font-[400] text-gray-500 ">{date}</span>
            </div>
            <Link
                href={`article/${id}`}                
                className="text-[30px] font-[500] italic hover:underline"
            >
                READ MORE →
            </Link>
        </div>
    </div>
  )
}

export default AnnouncementCard