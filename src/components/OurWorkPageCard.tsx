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
                </div>
                <div >
                    <p className="font-rubik text-3xl text-black">
                        {description}
                    </p>
                </div>
                
            </div>
    </div>
  )
}

export default OurWorkCard