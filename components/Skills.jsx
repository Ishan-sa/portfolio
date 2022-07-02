import Image from "next/image"
import { AiFillHtml5 } from "react-icons/ai"


export const Skills = () => {
    return (
        <div className='mainSkillsCont w-full h-screen'>
            <p className='font-SourceCodePro text-mainblue text-2xl uppercase tracking-widest pb-5'>Skills</p>
            <h2 className='font-Inter border-b-[3px] inline border-mainblue'>What I can do</h2>
            <div className='flex gap-2 align-center'>
                <p className='text-active'>Development</p>
                <p className='text-mainwhite'>/</p>
                <p className='text-notactive'>Graphic and UI/UX</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className='flex gap-40 items-center justify-center'>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/HTML5.svg" alt="" />
                        <p className="text-2xl">HTML</p>
                    </div>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/CSS3.svg" alt="" />
                        <p className="text-2xl">CSS</p>
                    </div>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/js.svg" alt="" />
                        <p className="text-2xl">JavaScript</p>
                    </div>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/react.svg" alt="" />
                        <p className="text-2xl">ReactJS</p>
                    </div>
                </div>
                <div className='flex gap-40 items-center justify-center'>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/github.svg" alt="" />
                        <p className="text-2xl">Github</p>
                    </div>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/wordpress.svg" alt="" />
                        <p className="text-2xl">Wordpress</p>
                    </div>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/MUI.svg" alt="" />
                        <p className="text-2xl">MUI</p>
                    </div>
                    <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
                        <img src="/tailwind.svg" alt="" />
                        <p className="text-2xl text-center">Tailwind<br />CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
