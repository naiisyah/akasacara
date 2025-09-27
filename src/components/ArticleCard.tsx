import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ArticleCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export function ArticleCard({ id, title, date, image }: ArticleCardProps) {
  return (
    <div className="flex gap-[16px]">
        <div className="flex-1 h-[168.75px] bg-gray-200 relative shrink-0">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded"
            />
        </div>
        <div className="flex-1 flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
                <h3 className="font-plus-jakarta-sans text-[24px] font-[500] leading-snug">
                    {title}
                </h3>
                <span className="text-[16px] font-[500] text-black ">{date}</span>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard