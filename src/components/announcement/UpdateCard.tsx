import React from 'react'
import Image from 'next/image';

type AnnouncementCardProps = {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
};

function UpdateCard({ id, title, date, image, content }: AnnouncementCardProps) {
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
        <div className="flex flex-col items-start gap-l flex-1 self-stretch">
            <div className="flex flex-col py-m justify-center items-start gap-m flex-1 self-stretch">
                <div className="flex flex-col items-start gap-s self-stretch">
                    <span className="caption-reg aka-text-subtitle-2 self-stretch">{date}</span>
                    <span className="sub-heading-reg aka-text-title self-stretch">{title}</span>
                </div>
                <span className="body-light aka-text-subtitle-1 self-stretch">{content}</span>
            </div>
            <div className="flex items-center gap-s">
                <span className="button-secondary hyperlink-txt">READ MORE →</span>
            </div>
        </div>
    </div>
  )
}

export default UpdateCard