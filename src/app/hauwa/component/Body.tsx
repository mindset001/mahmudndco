import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/hauwa.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-ful flex justify-center items-center my-40'>
            <div className='w-[80%] flex justify-between'>
                <div className='w-[45%]'>
                    <div>
                        <h1 className='text-[20px] font-[600] capitalize'>HAUWA TUMAKA YUSUF LL.B, BL</h1>
                        <h2 className='text-[20px] font-[600]'> Senior Counsel</h2>
                        <Divider className='bg-black w-[80%]'/>

                        <div>
                        <h1 className='text-[28px] font-[500]'>Background</h1>
                        <p className='font-[400] text-[16px] text-justify'>Hauwa attended the University of Abuja as a pioneer student of the Law faculty where she is obtained her L.L.B. (Hons) in 1995. She also obtained her B.L from the prestigious Nigerian Law School Lagos in the year 1996.</p>
                             <p className='mt-4 font-[400] text-[16px] text-justify'>Hauwa Commenced her career with the Federal Ministry of Justice as a Corp member seconded to the International Law Department where she gained some valuable experience in International Law. She was in the employment of Sam Ologunrisa Unic Chambers at Inade House, Garki, Abuja, as a Counsel from 2005 to 2009. She joined the prestigious Mahmud SAN & Co. in 2021 where she hopes to bring to the firm her share of experience and contribute to its growth and success.</p>
                             <p className='mt-4 font-[400] text-[16px] text-justify'>Hauwa is an enthusiastic lawyer, who is eager to learn and contribute mean fully to an issue at hand. She is organised, pays attention to details, passionate about legal research, and enjoys Litigation.</p>
                        </div>
                    </div>
                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>University of Abuja LLB (Hons)</li>
                            <li>Nigerian Law School, BL</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Litigation</li>
                            {/* <li>Election Related Matters</li>
                            <li>Criminal Litigation</li>
                            <li>Corporate Practice</li>
                            <li>Appellate Practice</li>
                            <li>Arbitration And Other Adr Modes. </li> */}
                        </ul>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <Image src={Man} alt='' />
                    <div>
                        <h1 className='text-[35px] font-[600] my-10'>Contact Lawyer</h1>
                        <form action="" className='w-[80%]'>
                            <div className='w-full flex gap-4'>
                                <input type='text' placeholder='Type your name...' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />

                                <input type='email' placeholder='Type your email...' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />
                            </div>
                            <div className='mt-6'>
                                <p className='text-[#C3BDBD] text-[16px] font-[400]'>Area Advisory</p>

                                <div className='w-full h-[40px] rounded-[50px] mt-4'>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    className='w-full h-[40px] rounded-[50px]'
                                    options={[
                                        { value: '1', label: 'Business Law' },
                                        { value: '2', label: 'Lucy' },
                                        { value: '3', label: 'Tom' },
                                    ]}
                                />
                                </div>
                                <div className='mt-6'>
                                    <textarea placeholder='Type Something' className='border w-full h-[148px] rounded-[23px] p-2'>

                                    </textarea>
                                </div>

                                <button className='bg-black rounded-[50px] text-[#fff] p-4 mt-6 w-[155px] h-[55px]'>Book Now</button>
                            </div>

                            <div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body