export const ProjectItem = ({ title, backgroundImg, projectURL }) => {
    backgroundImg = "/fashoid.svg",
        projectURL = "/vercel",
        title = "Projects"
    return (
        <div className="prCont relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group">
            <img className="fashoid rounded-xl group-hover:opacity-10" src={backgroundImg} alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-SourceCodePro text-center tracking-wider uppercase">{title}</h3>
                <p className="text-center font-SourceCodePro pb-4 pt-2 font-semibold text-mainbg">NextJS</p>
                <p
                    className="text-center font-Inter px-3 py-2 rounded-lg text-mainwhite] bg-[#272727] text-sm cursor-pointer"
                    onClick={
                        () => r.push({ projectURL })
                    }>More info
                </p>
            </div>
        </div >
    )
}
