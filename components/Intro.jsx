import { BsArrowDownCircle } from "react-icons/bs"
import { useRouter } from "next/router"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { SocialIcons } from "./SocialIcons"

export const First = () => {
    const r = useRouter();
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1300px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p data-aos='fade-up' className="uppercase text-sm tracking-widest text-active leading-10 font-Inter">
                        Let's build something together
                    </p>
                    <h1 data-aos='fade-down' className="py-2 font-Inter font-semibold">
                        Hi, I'm <span className="text-mainblue">Ishan.</span>
                    </h1>
                    <div className="flex items-center">
                        <img src="/imac.svg" alt="" />
                        <h1 className="py-2 font-Inter m-auto font-semibold">
                            A Front End Web <span className="text-mainblue">Developer.</span>
                        </h1>
                        <img src="/rocket.svg" alt="" />
                    </div>
                    <h2 className="py-2 font-semibold">and, a UI/UX <span className="text-mainblue font-Inter">Designer.</span></h2>
                    <p className="text-notactive py-4 max-w-[70%] m-auto font-Inter">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci hic ad error id cumque quo repudiandae voluptatem distinctio porro ut inventore exercitationem architecto officia quas necessitatibus. Reprehenderit, recusandae tenetur!</p>

                    {/* social icons start */}
                    <SocialIcons />
                    {/* social icons end */}

                    <div className="flex justify-center align-center pt-10 cursor-pointer">
                        <BsArrowDownCircle
                            size={'1.5em'}
                            onClick={
                                () => r.push('About')
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
