import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type OurWorkCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export function OurWorkCard({ id, title, description, image }: OurWorkCardProps) {
  return (
    <div className="flex items-start gap-l self-stretch">
        <div className="flex-1 h-[342px] bg-gray-200 relative shrink-0">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-m text-left">
            <div className="flex flex-col items-start gap-m self-stretch ">
                <h3 className="headline-3 aka-text-title">
                    {title}
                </h3>
            </div> 
            <p className="sub-heading-reg aka-text-subtitle-1">
                {description}
            </p> 
        </div>
    </div>
  )
}

export default OurWorkCard