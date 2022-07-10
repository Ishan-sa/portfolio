import { useState, useEffect, useRef } from "react";
import { DevCards } from "./DevCards";
import { GraphicCards } from "./GraphicCards";
import Aos from "aos";
import 'aos/dist/aos.css';

export const Skills = () => {
    const [showGraphic, setshowGraphic] = useState(false);
    const [showDev, setshowDev] = useState(true);
    const colorRefGraphic = useRef(null);
    const colorRefDev = useRef(null);

    const changeGraphicColor = () => {
        colorRefGraphic.current.classList.remove('text-notactive');
        colorRefGraphic.current.classList.add('text-active');
        colorRefDev.current.classList.remove('text-active');
        colorRefDev.current.classList.add('text-notactive');
    }

    const changeDevColor = () => {
        colorRefDev.current.classList.remove('text-notactive');
        colorRefDev.current.classList.add('text-active');
        colorRefGraphic.current.classList.remove('text-active');
        colorRefGraphic.current.classList.add('text-notactive');
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
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
                        ref={colorRefDev}
                        onClick={() => [setshowDev(true), setshowGraphic(false), changeDevColor()]}
                        className='text-active development cursor-pointer transition duration-900'>Development</p>
                    <p className='text-mainwhite'>/</p>
                    <p
                        ref={colorRefGraphic}
                        onClick={() => [setshowGraphic(!false), setshowDev(false), changeGraphicColor()]}
                        className='text-notactive graphic cursor-pointer transition duration-900'>
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
                    showGraphic ? <GraphicCards data-aos='fade-dowm' />
                        : null
                }
                {/* cards end  */}

            </div>
        </div >
    )
}