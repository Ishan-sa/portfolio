import Image from "next/image";
import styled from 'styled-components';
import { AiFillLinkedin, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from "react";

const ContactBtn = styled.button`
    box-shadow: 0px 0px 40px rgba(176, 149, 255, 0.47);
    transition: 0.2s;
    &:hover{
        scale: 1.1;
        background-color: #4872b1;
    }
`

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    // const fadeOverlay = this.root.querySelector('.overlay');
    // function overlayClickHandler() {
    //     fadeOverlay.style.cssText = `pointer-events: none;`
    // }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100] z-999 bg-mainbg'>
            <div className='flex justify-between items-center w-full h-full px-2  2xl:px-16'>
                <Image src="/logo.svg" alt="/" width='245' height='30' className="logo" />
                <div className="items-center">
                    <ul className="justify-between items-center gap-9 mr-10 hidden md:flex">
                        <li className="font-Inter">
                            Home
                        </li>
                        <li className="font-Inter">
                            About
                        </li>
                        <li className="font-Inter">
                            Skills
                        </li>
                        <li className="font-Inter">
                            Projects
                        </li>
                        <li className="font-Inter">
                            Resume
                        </li>
                        <ContactBtn>
                            Let&apos;s talk
                        </ContactBtn>
                    </ul>
                    <div onClick={handleNav} className="pr-1 md:hidden cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* bg overlay */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70)' : ''}>
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#292D39] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className="flex w-full items-center justify-between logoAndClose">
                            <Image src='/logo.svg' alt='/' width='230' height='30' />
                            <div onClick={handleNav} className="rounded-[50%] shadow-lg shadow-[#3d4356] p-3 cursor-pointer closeCont">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-[#717B99] my-4">
                            <p className="pb-1 w-[85%] md:w-[90%] py-4">Let&apos;s build something legendary together</p>
                        </div>
                        <div>
                            <div className="py-4 flex flex-col">
                                <ul>
                                    <li className="py-4 text-sm">
                                        Home
                                    </li>
                                    <li className="py-4 text-sm">
                                        About
                                    </li>
                                    <li className="py-4 text-sm">
                                        Skills
                                    </li>
                                    <li className="py-4 text-sm">
                                        Projects
                                    </li>
                                    <li className="py-4 text-sm">
                                        Resume
                                    </li>
                                    <ContactBtn>
                                        Let&apos;s talk
                                    </ContactBtn>
                                </ul>
                                <div className="pt-40">
                                    <p className="uppercase tracking-widest text-[#68A4FF]">
                                        Let&apos;s connect
                                    </p>
                                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                        <div className="rounded-full mt-3 shadow-lg shadow-[#717B99] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <AiFillLinkedin />
                                        </div>
                                        <div className="rounded-full mt-3 shadow-lg shadow-[#717B99] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <FaGithub />
                                        </div>
                                        <div className="rounded-full mt-3 shadow-lg shadow-[#717B99] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                        <div className="rounded-full mt-3 shadow-lg shadow-[#717B99] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
