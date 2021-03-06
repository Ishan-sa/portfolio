import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const GraphicCards = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos='fade-right' className='grid grid-cols-2 lg:grid-cols-3 gap-8 font-Inter text-center text-xl'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
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
                        <Image src='/notion.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Notion</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
