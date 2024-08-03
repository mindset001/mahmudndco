import Image from 'next/image'
import React from 'react'
import About from '../../../../public/images/about.png'

function Hero() {
  return (
    <main >
        <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[70%]'>
            <h1 className='text-[44px] font-[600]'>Why M.A Mahmud & Co.</h1>
            </div>
            
        </div>
        <Image src={About} alt=''/>
    </main>
  )
}

export default Hero