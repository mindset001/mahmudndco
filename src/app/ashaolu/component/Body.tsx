import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/bunmi.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-ful flex justify-center items-center my-40'>
            <div className='w-[80%] flex justify-between'>
                <div className='w-[45%]'>
                    <div>
                        <h1 className='text-[20px] font-[600] capitalize'>COMFORT BUNMI ASHAOLU LL.B B.L</h1>
                        <h2 className='text-[20px] font-[600]'> Senior Counsel</h2>
                        <Divider className='bg-black w-[80%]'/>

                        <div>
                        <h1 className='text-[28px] font-[500]'>Background</h1>
                        <p className='font-[400] text-[16px] text-justify'>Comfort obtained her LLB in the year 2013 from Igbinedion University Okada, BL, 2014. Comfort is well versed in trial preparation and research, effective at developing creative case strategies and writing persuasive briefs.  </p>
                             {/* <p className='mt-4 font-[400] text-[16px] text-justify'>He has been in full time legal practice since his call to Bar. He joined the prestigious law firm of Mahmud & Co in 2017.</p> */}
          
                        </div>
                    </div>
                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Igbinedion University Okada LLB</li>
                            <li>Nigerian Law School BL</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Civil Litigation</li>
                            <li>Legal Documents</li>
                            <li>Corporate Law</li>
                            <li>Legal Writing & Research</li>
                            <li>Legal Drafting</li>
                            <li>Advocacy</li>
                            <li>Dispute Resolution</li>
                            <li>Arbitration And Mediation</li>
                            <li>Contract Negotiation</li>
                            <li>Criminal Law</li>
                            <li>Real Estate Law</li>
                         
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