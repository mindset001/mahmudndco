import React from 'react'
import Right from '../../../../public/images/right2.png'
import Man from '../../../../public/images/partner1.png'
import Man2 from '../../../../public/images/man2.png'
import Man3 from '../../../../public/images/man3.png'
import Man4 from '../../../../public/images/man4.png'
import Ayeye from '../../../../public/images/ayeye.png'
import Hauwa from '../../../../public/images/hauwa.png'
import Tukur from '../../../../public/images/tukur.png'
import Image from 'next/image'

function Talent() {
  return (
    <main className='flex flex-col items-center justify-center mt-20'>
        <div className='w-full px-5 md:px-0 md:w-[70%] flex justify-between items-center'>
            <h1 className='font-[600] text-[20px] md:text-[35px]'>Our Talents</h1>
            <button className='flex items-center gap-2 font-[700] '>
                    <p>Read More</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                 </button>
        </div>

        <div className='w-full flex mt-6 md:mt-16'>
            <div className='relative items-center flex md:w-1/2'>
                <div className='md:h-[440px] h-[280px] w-1/2  bg-[#FFF1C6] flex flex-col justify-center  pl-10 md:pl-40 gap-[2px]'>
                    <h1 className='text-[16px] md:text-[20px] font-[500]'>OKECHUKWU GEORGE EDEZE</h1>
                    <p  className='text-[10px] md:text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
                <div className='absolute left-[40%] md:w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='w-1/2'>
                    <Image src={Man} alt='' className='w-full md:h-[440px] h-[280px]'/>
                </div>
            </div>
            <div className='hidden relative md:flex w-1/2 items-center'>
                <div className='w-1/2 h-[440px]  bg-[#FFF1C6] flex flex-col justify-center pl-40 gap-[2px]'>

                    <h1 className='text-[20px] font-[500]'>DANJUMA G. AYEYE</h1>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='w-1/2'>
                    <Image src={Ayeye} alt='' className='w-full h-[440px] '/>
                </div>
            </div>
        </div>


        <div className='w-full flex '>
            <div className='hidden relative md:flex w-1/2 items-center'>
            <div className='w-1/2'>
                    <Image src={Hauwa} alt='' className='w-full h-[440px] '/>
                </div>

                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='h-[440px] w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-40 gap-[2px]'>
                    <h1 className='text-[20px] font-[500]'>HAUWA TUMAKA YUSUF</h1>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
               
            </div>
            <div className='flex md:w-1/2 items-center relative'>
            <div className='w-1/2 '>
                    <Image src={Tukur} alt='' className='w-full md:h-[440px] '/>
                </div>
                    <div className='absolute left-[40%] w-[60px] md:w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>

                <div className='md:h-[440px] h-[280px]  z-0 w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                    <h1 className='text-[16px] md:text-[20px] font-[500]'>HAMIDU MOHAMMED TUKUR</h1>
                    <p  className='text-[10px] md:text-[14px]  font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
               
            </div>
        </div>
    </main>
  )
}

export default Talent