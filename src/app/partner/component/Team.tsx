import React from 'react'
import Right from '../../../../public/images/right.png'
import Man from '../../../../public/images/partner1.png'
import Man2 from '../../../../public/images/ayeye.png'
import Man3 from '../../../../public/images/hauwa.png'
import Man4 from '../../../../public/images/tukur.png'
import Man5 from '../../../../public/images/adedeji.png'
import Man6 from '../../../../public/images/badmos.png'
import Man7 from '../../../../public/images/bunmi.png'
import Man8 from '../../../../public/images/clement.png'
import Image from 'next/image'
import Link from 'next/link'

function Team() {
  return (
   <main className='flex flex-col justify-center items-center'>
     <div className='w-[80%] mt-20 '>
                <div className='mb-20'>
                    <h1 className='text-[20px] md:text-[28px] font-[500]'>We are a market-leading, nationally-recognised firm for all your legal needs. Our lawyers provide customer centric advice to corporations and individuals across the world.</h1>
                </div>

            </div>
     <div className='w-full'>
        <div className='w-full flex flex-col md:flex-row mt-16'>
            <div className='relative items-center flex md:w-1/2'>
                <div className=' h-[265px] md:h-[440px] w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                   <Link href='/george'> <h1 className='text-[20px] font-[500]'>Okechukwu George</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='w-1/2'>
                    <Image src={Man} alt='' className='w-full md:h-[440px] h-[265px]'/>
                </div>
            </div>
            <div className='relative flex flex-row-reverse md:flex-row md:w-1/2 items-center'>
                <div className='w-1/2  h-[265px]  md:h-[440px]  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>

                <Link href='/ayeye'>  <h1 className='text-[20px] font-[500]'> DANJUMA G. AYEYE</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='w-1/2'>
                    <Image src={Man2} alt='' className='w-full  h-[265px] md:h-[440px] '/>
                </div>
            </div>
        </div>


        <div className='w-full flex flex-col md:flex-row'>
            <div className='relative flex flex-row-reverse md:flex-row md:w-1/2 items-center'>
            <div className='w-1/2'>
                    <Image src={Man3} alt='' className='w-full  h-[265px] md:h-[440px] '/>
                </div>

                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className=' h-[265px] md:h-[440px] w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                <Link href='/hauwa'>  <h1 className='text-[20px] font-[500]'> HAUWA TUMAKA</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
               
            </div>
            <div className='flex md:w-1/2 items-center relative'>
            <div className='w-1/2 '>
                    <Image src={Man4} alt='' className='w-full  h-[265px] md:h-[440px] '/>
                </div>
                    <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>

                <div className=' h-[265px] md:h-[440px]   z-0 w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                <Link href='/hamidu'> <h1 className='text-[20px] font-[500]'> HAMIDU MOHAMMED</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
               
            </div>
        </div>
     </div>


     <div className='w-full'>
        <div className='w-full flex flex-col md:flex-row'>
            <div className='relative items-center flex md:w-1/2'>
                <div className=' h-[265px]  md:h-[440px] w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                <Link href='/adedeji'> <h1 className='text-[20px] font-[500]'> RIDWANULLAHI ADEDEJI</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='w-1/2'>
                    <Image src={Man5} alt='' className='w-full  h-[265px]  md:h-[440px] '/>
                </div>
            </div>
            <div className='relative flex flex-row-reverse md:flex-row md:w-1/2 items-center'>
                <div className='w-1/2  h-[265px] md:h-[440px]  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>

                <Link href='/badmos'>    <h1 className='text-[20px] font-[500]'>ABDULKABIR ABIODUN</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className='w-1/2'>
                    <Image src={Man6} alt='' className='w-full  h-[265px] md:h-[440px] '/>
                </div>
            </div>
        </div>


        <div className='w-full flex flex-col md:flex-row'>
            <div className='relative flex flex-row-reverse md:flex-row md:w-1/2 items-center'>
            <div className='w-1/2'>
                    <Image src={Man7} alt='' className='w-full  h-[265px]  md:h-[440px] '/>
                </div>

                <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>
                <div className=' h-[265px] md:h-[440px] w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                <Link href='/ashaolu'> <h1 className='text-[20px] font-[500]'> COMFORT BUNMI</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
               
            </div>
            <div className='flex md:w-1/2 items-center relative'>
            <div className='w-1/2 '>
                    <Image src={Man8} alt='' className='w-full  h-[265px] md:h-[440px] '/>
                </div>
                    <div className='absolute left-[40%] w-[153px] z-10 h-[1px] bg-[#5C5A5A] '></div>

                <div className=' h-[265px] md:h-[440px]   z-0 w-1/2  bg-[#FFF1C6] flex flex-col justify-center pl-10 md:pl-40 gap-[2px]'>
                   <Link href='/clement'> <h1 className='text-[20px] font-[500]'>CLEMENT OPU</h1></Link>
                    <p  className='text-[14px] font-[400]'>Lawyer</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                </div>
               
            </div>
        </div>
     </div>
   </main>
  )
}

export default Team