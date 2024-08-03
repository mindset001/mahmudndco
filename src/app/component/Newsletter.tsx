import { Input } from 'antd'
import React from 'react'

function Newsletter() {
  return (
    <main className='hero-news my-20 flex justify-center items-center'>
        <div className='w-[80%] flex items-center justify-center'>
            <h1 className='text-[28px] font-[500] text-[#CDA233]'>Subscribe to Newsletters</h1>
           
            <Input placeholder='Enter Email' className='rounded-[23px] pl-4 h-[51px] w-[271px] ml-6 mr-4 bg-transparent border border-[#CDA233]'/>
            <button className='bg-[#CDA233] rounded-[36px] px-8 py-4 font-[700] text-[16px]'>Subscribe</button>
        </div>

    </main>
  )
}

export default Newsletter