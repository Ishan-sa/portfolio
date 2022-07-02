import { AiOutlineMail } from "react-icons/ai"
import { BsArrowDownCircle, BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Router, { useRouter } from "next/router"
import Image from "next/image"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

export const First = () => {
    const r = useRouter();
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="w-full h-screen text-center">
            {/* <div className="relative z-999 top-20 left-10">
                <Image
                    src='/imac.svg'
                    width={223}
                    height={167}
                />
            </div> */}
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p data-aos='fade-up' className="uppercase text-sm tracking-widest text-active leading-10 font-Inter">
                        Let's build something together
                    </p>
                    <h1 data-aos='fade-down' className="py-2 font-Inter">
                        Hi, I'm <span className="text-mainblue">Ishan.</span>
                    </h1>
                    <h1 className="py-2 font-Inter">
                        A Front End Web <span className="text-mainblue">Developer.</span>
                    </h1>
                    <h2 className="py-2">and, a UI/UX <span className="text-mainblue font-Inter">Designer.</span></h2>
                    <p className="text-notactive py-4 max-w-[70%] m-auto font-Inter">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci hic ad error id cumque quo repudiandae voluptatem distinctio porro ut inventore exercitationem architecto officia quas necessitatibus. Reprehenderit, recusandae tenetur!</p>

                    {/* social icons start */}
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full mt-3 shadow-lg shadow-[#515970] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedin onClick={
                                () => r.push('https://linkedin.com')
                            } />
                        </div>
                        <div className="rounded-full mt-3 shadow-lg shadow-[#515970] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub onClick={
                                () => r.push('https://github.com/Ishan-sa')
                            } />
                        </div>
                        <div className="rounded-full mt-3 shadow-lg shadow-[#515970] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail onClick={
                                () => r.push('mailto:contact@infocuscreation.com')
                            } />
                        </div>
                        <div className="rounded-full mt-3 shadow-lg shadow-[#515970] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram onClick={
                                () => r.push('https://instagram.com/infocus_creations')
                            } />
                        </div>
                    </div>
                    {/* social icons end */}

                    <div className="flex justify-center align-center pt-10">
                        <BsArrowDownCircle size={'1.5em'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
