import Image from 'next/image'
import React from 'react'
import { ImageGroup } from 'semantic-ui-react'
import { SocialIcons } from './SocialIcons'
import styled from 'styled-components'

const ContactBtn = styled.button`
    box-shadow: 0px 0px 40px rgba(176, 149, 255, 0.47);
    transition: 0.2s;
    &:hover{
        scale: 1.1;
        background-color: #4872b1;
    }
`

export const Contact = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-mainblue font-SourceCodePro'>
                    Contact
                </p>
                <div className="py-4 pb-6">
                    <p className='font-Inter border-b-[3px] inline border-mainblue uppercase text-active'>
                        Let&apos;s discuss about our next project together!
                    </p>
                </div>

                <div className='contactCont flex flex-row align-center font-Inter justify-between'>
                    <div className='formCont'>
                        <form action="submit" className='flex flex-col' id='contactForm'>
                            {/* <div className='flex flex-col'> */}
                            <label htmlFor='name' className='pb-1 tracking-wider'>Name</label>
                            <input type="text" placeholder='Your name' name='name' required className='rounded-[5px] py-2 px-4 bg-notactive text-mainwhite mb-4 placeholder-active' />
                            {/* </div> */}

                            <label htmlFor='email' className='pb-1 tracking-wider'>Email</label>
                            <input type="email" placeholder='Your email' name='email' className='rounded-[5px] py-2 px-4 bg-notactive text-mainwhite mb-4 placeholder-active' required />

                            <label htmlFor='name' className='pb-1 tracking-wider'>Message</label>
                            <textarea rows={5} cols={20} type="text" placeholder='Your message' name='name' className='rounded-[5px] py-2 px-4 bg-notactive text-mainwhite mb-4 placeholder-active' required />
                        </form>
                        <ContactBtn className='mt-4 submitBtn' formAction='submit' form='contactForm'>Submit</ContactBtn>
                    </div>
                    <div className='rightCont'>
                        <img src='/pp.jpg' width={310} height={395} className='pp rounded-[10px]' />
                        <p className='text-mainwhite text-center pt-7 text-2xl'>Ishan Sachdeva</p>
                        <p className='text-active uppercase tracking-widest text-center'>Front end developer</p>
                        <p className='pt-5 text-center uppercase text-lg text-notactive'>Connect with me</p>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}
