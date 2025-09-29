import React from 'react'
import styles from "./HighlightCard.module.css";
import Image from 'next/image';

type HighlightCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
};

function HighlightCard({ id, title, date, image }: HighlightCardProps) {
  return (
    <div className="flex items-center gap-m flex-1 self-stretch">
        <div className="flex-1 relative aspect-[16/9]">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <div className="flex flex-col items-start gap-s flex-1">
            <span className={styles.judul}>{title}</span>
            <span className="caption-reg aka-text-subtitle-2 self-stretch">{date}</span>
        </div>
    </div>
  )
}

export default HighlightCard