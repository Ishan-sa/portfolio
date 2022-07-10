import { useRouter } from "next/router"

export const About = () => {
    const r = useRouter();
    return (
        <div className="aboutCont w-full h-screen max-w-[1240px]">
            <div className="contentAbout">
                <p className="font-SourceCodePro text-2xl uppercase tracking-widest text-mainblue pb-5">About</p>
                <div>
                    <h2 className="text-mainwhite border-b-[3px] border-mainblue inline pb-1">Who I am?</h2>
                </div>
                <p className="font-SourceCodePro text-active py-1 pb-4 pt-5">//Not your regular (<span className="text-yellow">developer</span>)</p>
                <p className="pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius. Placeat animi minus laboriosam et in odit, dolorum itaque qui sed nisi  illum? Aliquam quaerat vel voluptatibus. Fugiat, consequatur excepturi.
                    Quae quisquam vel totam fugiat necessitatibus deserunt veritatis excepturi dignissimos possimus praesentium ipsam assumenda, labore eveniet eligendi aperiam nesciunt sequi itaque mollitia alias obcaecati, perferendis quas? Itaque saepe autem aliquid!
                </p>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores culpa veritatis quo eveniet corporis ipsam, architecto necessitatibus molestiae deserunt suscipit non accusantium, eos sint a odit? Laboriosam, molestias! Odit, laborum!
                    Ducimus aspernatur ex animi assumenda cum? Reprehenderit ut quibusdam natus magnam facere repudiandae debitis! Vitae alias harum officia repellendus corrupti. Voluptate qui similique quibusdam aspernatur ducimus deserunt, odit ullam incidunt?
                </p>
                <br />
                <p onClick={
                    () => r.push('/')
                } className="uppercase text-notactive underline pt-5 cursor-pointer">
                    Checkout some of my projects!
                </p>
            </div>
            <div className="imageAboutCont rounded-xl p-4 hover:scale-105 ease-in duration-300">
                <img src="/about.svg" className="m-auto imgAbt" alt="" />
            </div>
        </div>
    )
} 
