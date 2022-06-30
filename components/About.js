import Image from "next/image"

export const About = () => {
    return (
        // <div className="w-full md:h-screen p-2 flex items-center py-16">
        //     <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        //         <div className="col-span-2">
        //             <p className=" font-SourceCodePro text-mainwhite uppercase text-xl tracking-widest border-b-2 border-mainblue aboutMe inline">About Me</p>
        //             <h2 className="pt-4 text-mainwhite">Who I am</h2>
        //             <p className="font-SourceCodePro text-active py-1 pb-4">//Not your regular (developer);</p>
        //             <p className="text-mainwhite">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque nostrum doloribus sequi molestias? Nihil cumque nulla molestiae accusamus atque quaerat, architecto et laboriosam, earum praesentium, consectetur ullam temporibus libero.
        //                 Quaerat unde ullam consequuntur corporis pariatur eligendi inventore maxime, quos praesentium repellendus fugiat enim architecto optio ex beatae quo error debitis blanditiis necessitatibus! Alias, ad tempore! Tenetur nisi ullam similique!
        //             </p>
        //             <br />
        //             <p className="text-mainwhite">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque nostrum doloribus sequi molestias? Nihil cumque nulla molestiae accusamus atque quaerat, architecto et laboriosam, earum praesentium, consectetur ullam temporibus libero.
        //                 Quaerat unde ullam consequuntur corporis pariatur eligendi inventore maxime, quos praesentium repellendus fugiat enim architecto optio ex beatae quo error debitis blanditiis necessitatibus! Alias, ad tempore! Tenetur nisi ullam similique!
        //             </p>
        //             <p>Checkout some of my latest projects!</p>
        //             <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        //                 <img className="rounded-xl" src="/about.svg" alt="" />
        //                 {/* <Image src={'/About.svg'} width={100} height={100} /> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="aboutCont">
            <div className="contentAbout">
                <p className="font-SourceCodePro text-xl border-b-2 border-mainblue">About</p>
                <h2 className="text-mainwhite border-b-2 border-mainblue inline">Who I am?</h2>
                <p className="font-SourceCodePro text-active py-1 pb-4 pt-4">`//Not your regular (<span className="text-yellow">developer</span>)`</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius. Placeat animi minus laboriosam et in odit, dolorum itaque qui sed nisi  illum? Aliquam quaerat vel voluptatibus. Fugiat, consequatur excepturi.
                    Quae quisquam vel totam fugiat necessitatibus deserunt veritatis excepturi dignissimos possimus praesentium ipsam assumenda, labore eveniet eligendi aperiam nesciunt sequi itaque mollitia alias obcaecati, perferendis quas? Itaque saepe autem aliquid!
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores culpa veritatis quo eveniet corporis ipsam, architecto necessitatibus molestiae deserunt suscipit non accusantium, eos sint a odit? Laboriosam, molestias! Odit, laborum!
                    Ducimus aspernatur ex animi assumenda cum? Reprehenderit ut quibusdam natus magnam facere repudiandae debitis! Vitae alias harum officia repellendus corrupti. Voluptate qui similique quibusdam aspernatur ducimus deserunt, odit ullam incidunt?
                </p>
                <br />
                <p className="uppercase text-notactive underline">
                    Checkout some of my projects!
                </p>
            </div>
            <div className="imageAbout shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
                <img src="/about.svg" alt="" />
            </div>
        </div>
    )
} 
