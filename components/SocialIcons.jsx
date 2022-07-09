import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Router, { useRouter } from "next/router"
import Aos from 'aos';
import 'aos/dist/aos.css';

export const SocialIcons = () => {
    const r = useRouter();
    return (
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
    )
}
