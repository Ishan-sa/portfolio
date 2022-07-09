import Image from "next/image";
import { useState } from "react";

export const Skills = () => {
    // const [setActiveDevSkills, setActiveDevSkills] = useState()
    return (
        // <div className='mainSkillsCont w-full h-screen'>
        //     <div className="flex flex-col items-start pb-3">
        //         <p className='font-SourceCodePro text-mainblue text-2xl uppercase tracking-widest pb-5'>Skills</p>
        //         <h2 className='font-Inter border-b-[3px] inline border-mainblue'>What I can do</h2>
        //         <div className='flex gap-2 align-center'>
        //             <p className='text-active'>Development</p>
        //             <p className='text-mainwhite'>/</p>
        //             <p className='text-notactive'>Graphic and UI/UX</p>
        //         </div>
        //     </div>
        //     <div className="flex flex-col gap-10">
        //         <div className='flex gap-40 items-center justify-center'>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/HTML5.svg" alt="" />
        //                 <p className="text-2xl">HTML</p>
        //             </div>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/CSS3.svg" alt="" />
        //                 <p className="text-2xl">CSS</p>
        //             </div>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/js.svg" alt="" />
        //                 <p className="text-2xl">JavaScript</p>
        //             </div>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/react.svg" alt="" />
        //                 <p className="text-2xl">ReactJS</p>
        //             </div>
        //         </div>
        //         <div className='flex gap-40 items-center justify-center'>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/github.svg" alt="" />
        //                 <p className="text-2xl">Github</p>
        //             </div>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/wordpress.svg" alt="" />
        //                 <p className="text-2xl">Wordpress</p>
        //             </div>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/MUI.svg" alt="" />
        //                 <p className="text-2xl">MUI</p>
        //             </div>
        //             <div className="skillCards bg-cardsbg rounded-[12px] flex justify-center items-center gap-5 font-SourceCodePro hover:scale-105 ease-in duration-300 w-[226px] h-[104px]">
        //                 <img src="/tailwind.svg" alt="" />
        //                 <p className="text-2xl text-center">Tailwind<br />CSS</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div id='skills' className='w-full lg:h-screen p-2' >
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-mainblue font-SourceCodePro'>
                    Skills
                </p>
                {/* <h2 className='py-4 font-Inter underline decoration-mainblue'>What I Can Do</h2> */}
                <div className="py-4 pb-6">
                    <h2 className='font-Inter border-b-[3px] inline border-mainblue'>What I can do</h2>
                </div>
                <div className='flex gap-2 align-center pb-6'>
                    <p className='text-active development cursor-pointer'>Development</p>
                    <p className='text-mainwhite'>/</p>
                    <p
                        // onClick={ }
                        className='text-notactive graphic cursor-pointer'>
                        Graphic and UI/UX
                    </p>
                </div>

                {/* cards start */}
                <div className='development grid grid-cols-2 lg:grid-cols-4 gap-8 font-Inter text-center text-2xl'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="/HTML5.svg" alt="" /> */}
                                <Image src='/HTML5.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="/CSS3.svg" alt="" /> */}
                                <Image src='/CSS3.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto ml-[20px]'>
                                {/* <img src="/JS.svg" alt="" /> */}
                                <Image src='/JS.svg' width={40} height={40} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3 className="pr-6">JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="/react.svg" alt="" /> */}
                                <Image src='/react.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="/github.svg" alt="" /> */}
                                <Image src='/github.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="/wordpress.svg" alt="" /> */}
                                <Image src='/wordpress.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>Wordpress</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="MUI.svg" alt="" /> */}
                                <Image src='/MUI.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>MUI</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {/* <img src="tailwind.svg" alt="" /> */}
                                <Image src='/tailwind.svg' width={45} height={45} />
                            </div>
                            <div className='flex flex-col items-center justify-center text-xl'>
                                <h3>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cards end  */}


                {/* graphic and ui/ux */}
                <div className="graphic hidden">
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 font-SourceCodePro text-center text-2xl'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {/* <img src="/HTML5.svg" alt="" /> */}
                                    <Image src='/figma.svg' width={45} height={45} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Figma</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {/* <img src="/CSS3.svg" alt="" /> */}
                                    <Image src='/ai.svg' width={45} height={45} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Illustrator</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto ml-[20px]'>
                                    {/* <img src="/JS.svg" alt="" /> */}
                                    <Image src='/ps.svg' width={45} height={45} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className="pr-6">Photoshop</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {/* <img src="/react.svg" alt="" /> */}
                                    <Image src='/ae.svg' width={45} height={45} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>After Effects</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {/* <img src="/github.svg" alt="" /> */}
                                    <Image src='/pr.svg' width={45} height={45} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Premiere Pro</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {/* <img src="/wordpress.svg" alt="" /> */}
                                    <Image src='/notion.svg' width={45} height={45} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Notion</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}