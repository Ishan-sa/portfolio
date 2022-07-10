import Image from "next/image";
import { useRouter } from "next/router";
import { ProjectItem } from "./ProjectItem";
// import fashoidImg from '/pp.jpg'

export const Projects = () => {
    const r = useRouter();
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-mainblue font-SourceCodePro'>
                    Projects
                </p>
                <div className="py-4 pb-6">
                    <h2 className='font-Inter border-b-[3px] inline border-mainblue'>
                        What I&apos;ve done so far
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title='Fashoid'
                        backroundImg='/fashoid.svg'
                        projectURL='/fashoid'
                    />
                    <ProjectItem
                        title='Fashoid'
                        backroundImg=''
                        projectURL='/fashoid'
                    />
                    <ProjectItem
                        title='Fashoid'
                        backroundImg=''
                        projectURL='/fashoid'
                    />
                    <ProjectItem
                        title='Fashoid'
                        backroundImg=''
                        projectURL='/fashoid'
                    />
                </div>
            </div>
        </div>
    )
}
