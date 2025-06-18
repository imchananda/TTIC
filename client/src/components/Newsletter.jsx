import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>ข้อมูลข่าวสาร</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>ติดตามข้อมูลข่าวสาร ศูนย์เทคโนโลยีสารสนเทศการขนส่งและจราจร</p>
        <form className='flex item-center justofy-between max-w-2xl w-full md:h-13 h-12'>
            <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='อีเมล' required/>
            <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>สมัคร</button>
        </form>
    </div>
  )
}

export default Newsletter