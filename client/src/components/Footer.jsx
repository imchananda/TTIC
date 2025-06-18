import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary'>

        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/30 text-white'>

            <div>
                <img src={assets.logo_otp_100} alt="logo" className='w-32 sm:w-44'/>
                <p className='max-w-[410px] mt-6'>ศูนย์เทคโนโลยีสารสนเทศการขนส่งและจราจร มุ่งพัฒนาโซลูชันด้านระบบจราจรอัจฉริยะ เพื่อให้บริการประชาชนอย่างมีประสิทธิภาพ</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>

                {Array.isArray(footer_data) && footer_data.map((section, index) => (
                <div key={index}>
                    <h3 className='font-semibold text-base text-white md:mb-5 mb-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                    {section.links.map((link, i) => (
                        <li key={i}>
                            <Link 
                                to={link.path}
                                className ="relative inline-block text-white
                                            after:block after:h-[2px] after:scale-x-0 after:origin-left
                                            after:transition-transform after:duration-300
                                            after:bg-[#FFFFFF] hover:after:scale-x-100"
                            >
                            {link.label}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}

                {/* {Array.isArray(footer_data) && footer_data.map((section, index) => (
                <div key={index}>
                    <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((link, i) => (
                            <li key={i}>
                            <a href="#" className:'hover:underline transition'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                ))} */}
                {/* {footer_data.map((section, index)=>(
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>

                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i)=>(
                                <li key={i}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))} */}
            </div>

        </div>

       

        <div className='py-4 text-center text-sm md:text-base text-white'>
                <a href="#" >นโยบายเว็บไซต์ |</a>
                <a href="#" >นโยบายข้อมูลส่วนบุคคล |</a>
                <a href="#" >นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์ |</a>
                <a href="#" >นโยบายการใช้คุกกี้ |</a>
                <p>Copyright 2025 © ศูนย์เทคโนโลยีสารสนเทศการขนส่งและจราจร - All Right Reserved.</p> 
        </div>

    </div>
  )
}

export default Footer