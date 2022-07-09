import Image from "next/image";
import { useState } from "react";
import { DevCards } from "./DevCards";
import { GraphicCards } from "./GraphicCards";

export const Skills = () => {
    const [showGraphic, setshowGraphic] = useState(false);
    const [showDev, setshowDev] = useState(false);
    return (
        <div id='skills' className='w-full lg:h-screen p-2' >
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-mainblue font-SourceCodePro'>
                    Skills
                </p>
                <div className="py-4 pb-6">
                    <h2 className='font-Inter border-b-[3px] inline border-mainblue'>What I can do</h2>
                </div>
                <div className='flex gap-2 align-center pb-6'>
                    <p
                        onClick={() => setshowDev(true)}
                        className='text-active development cursor-pointer'>Development</p>
                    <p className='text-mainwhite'>/</p>
                    <p
                        onClick={() => setshowGraphic(true)}
                        className='text-notactive graphic cursor-pointer'>
                        Graphic and UI/UX
                    </p>
                </div>

                {/* cards start */}
                {/* Dev */}
                {
                    showDev ? <DevCards />
                        : null
                }

                {/* graphic and ui/ux */}
                {
                    showGraphic ? <GraphicCards />
                        : null
                }
                {/* cards end  */}

            </div>
        </div >
    )
}