import { Input } from 'antd'
import React from 'react'

function Newsletter() {
  return (
    <main className='bg-[#FFF1C6] my-20 flex justify-center items-center h-[250px]'>
        <div className='w-[80%] flex items-center justify-center'>
            <h1 className='text-[28px] font-[500] text-[#000]'>Subscribe to Newsletters</h1>
           
            <Input placeholder='Enter Email' className='rounded-[23px] pl-4 h-[51px] w-[271px] ml-6 mr-4 bg-transparent border border-[#000]'/>
            <button className='bg-[#000] rounded-[36px] px-8 py-4 font-[700] text-[16px] text-[#fff]'>Subscribe</button>
        </div>

    </main>
  )
}

export default Newsletter