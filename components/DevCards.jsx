import Image from "next/image"

export const DevCards = () => {
    return (
        <div className='development grid grid-cols-2 lg:grid-cols-4 gap-8 font-Inter text-center text-2xl'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        {/* <img src="/HTML5.svg" alt="" /> */}
                        <Image src='/HTML5.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        {/* <img src="/CSS3.svg" alt="" /> */}
                        <Image src='/CSS3.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto ml-[20px]'>
                        {/* <img src="/JS.svg" alt="" /> */}
                        <Image src='/JS.svg' width={40} height={40} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3 className="pr-6">JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/react.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>ReactJS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/github.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/wordpress.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>Wordpress</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/MUI.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>MUI</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-cardsbg'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/tailwind.svg' width={45} height={45} />
                    </div>
                    <div className='flex flex-col items-center justify-center text-xl'>
                        <h3>Tailwind CSS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
