import Image from 'next/image'
import React from 'react'
import Why1 from '../../../../public/images/why.png'
function Why() {
  return (
   <main>
    <div className='flex items-center justify-center'>
        <div className='w-1/2 bg-[#FFF1C6] h-[100vh] px-40 py-40'>
            <h1 className='text-[35px] font-[500]'>Why M.A Mahmud & Co.</h1>
            <p className='text-[16px] font-[400] mt-10 w-[418px]'>Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.</p>
            <button className='border border-[#000000] rounded-[36px] px-8 py-4 font-[700] text-[16px] mt-10'>Read More</button>
        </div>
        <div className='w-1/2 h-[100vh]'>
            <Image src={Why1} alt='' className='h-[100vh]'/>
        </div>
    </div>
   </main>
  )
}

export default Why