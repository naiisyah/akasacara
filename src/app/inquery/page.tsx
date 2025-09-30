"use client";

import SelectProject from "@/components/SelectProject";

const Inquery = () => {
    
    return (
        <div className="bg-vfx py-section px-container">
            <div className="py-section inline-flex flex-col justify-center gap-md">
                <div className="headline-1 vfx-text-title">Start Your Project with Us, 
                    <br/> 
                    Transform Together.</div>
                <div className="sub-heading-reg vfx-text-subtitle-1">Great projects start with dialogue. Tell us your vision and challenges, and our expert VFX team will craft precise, creative solutions that bring extraordinary visuals to life.</div>
            </div>
            <div className="flex flex-col bg-akasacara py-section px-4xl rounded-[10px] gap-3xl">
                 <div className="w-full flex flex-col gap-10">
                    <div className="flex flex-col gap-m">
                        <h2 className="aka-text-title sub-heading-reg">Who You Are / Represent ?</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name or studio name"
                            className="w-full py-md px-md border-[2.5px] border-black rounded-[5px] body-reg aka-text-subtitle-2"
                        />
                    </div>
                     <div className="flex flex-col gap-m">
                        <h2 className="aka-text-title sub-heading-reg gap-m">Email</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your email address"
                            className="w-full py-md px-md border-[2.5px] border-black rounded-[5px] body-reg aka-text-subtitle-2"
                        />
                    </div>
                    <div className="flex flex-col gap-m">
                        <h2 className="aka-text-title sub-heading-reg gap-m">What's the Matter ?</h2>
                        <SelectProject/>
                    </div>
                    <div className="flex flex-col gap-m">
                        <h2 className="aka-text-title sub-heading-reg gap-m">Message / Idea / Question</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Write your idea, question, or project brief (3–5 lines)"
                            className="w-full py-md px-md border-[2.5px] border-black rounded-[5px] body-reg aka-text-subtitle-2"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="w-full bg-vfx py-md rounded-[5px] vfx-text-title button-main">
                        SUBMIT
                    </button>
                </div>
            </div>
            <div className="py-section inline-flex flex-col justify-center gap-2xl">
                <div className="flex flex-col pt-section gap-m">
                    <div className="headline-1 vfx-text-title">
                        FOLLOW US
                    </div>
                    <div className="sub-heading-reg vfx-text-subtitle-1">
                        Stay Conected With Our Latest Update 
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-md">
                        <div className="headline-3 vfx-text-title">
                           LodhongKrupuk
                            VFX 
                        </div>
                        <div className="border-b-3 border-white pb-md"></div>
                        <div className="flex gap-md">
                            <span className="icon-[tdesign--logo-instagram-filleed]"></span>
                            <span className="icon-[tdesign--logo-youtube-filleed]"></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquery;
