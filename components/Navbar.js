import Image from "next/image";
import styled from 'styled-components';

const ContactBtn = styled.button`
    box-shadow: 0px 0px 40px rgba(176, 149, 255, 0.47);
    transition: 0.2s;
    &:hover{
        scale: 1.1;
        background-color: #4872b1;
    }
`

export const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2  2xl:px-16'>
                <Image src="/logo.svg" alt="/" width='245' height='30' />
                <div className="items-center">
                    <ul className="flex justify-between items-center gap-9">
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
                            Let's talk
                        </ContactBtn>
                    </ul>
                </div>
            </div>
        </div>
    )
}
