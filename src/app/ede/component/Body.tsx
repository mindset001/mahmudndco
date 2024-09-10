import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/ede.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-ful flex justify-center items-center my-40'>
            <div className='w-[80%] flex justify-between'>
                <div className='w-[45%]'>
                    <div>
                        <h1 className='text-[20px] font-[600] capitalize'>EDE UKO, ESQ LL.B, BL</h1>
                        <h2 className='text-[20px] font-[600]'>Senior Counsel</h2>
                        <Divider className='bg-black w-[80%]'/>

                        <div>
                        <h1 className='text-[28px] font-[500]'>Background</h1>
                        <p className='font-[400] text-[16px] text-justify'>Ede Uko Esq., is a focus, confident and committed Legal Practitioner of 15 years post call experience. He attended Benue State University, Makurdi, where he obtained LL.B [Hons] - Bachelor of Laws Degree in 2007. Thereafter, he proceeded to the Prestigious Nigerian Law School, Bwari Abuja and obtained Certificate of Call to The Bar in 2009 and was called to Nigerian Bar as Barrister and Solicitor of the Supreme Court of Nigeria in 2009.</p>
                             <p className='mt-4 font-[400] text-[16px] text-justify'>Upon called to Nigerian Bar, Ede Uko, Esq had worked in the law firm of J.S. Okutepa and Co before joining the Mahmud SAN and Co in 2021, and since then he has remain in active private practice of law.</p>
          
                        </div>
                    </div>
                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Benue State University, LLB.</li>
                            <li>Nigerian Law School, BL</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Civil And Criminal Litigation</li>
                            <li>Corporate Law Practice</li>
                            <li>Property And Conveyancing Law</li>
                            <li>Equity And Trust</li>
                            <li>Human Rights and Public Interest Litigation,</li>
                            <li>Pre and Post-Election Litigation </li>
                            <li>Constitutional Law and Jurisprudence,</li>
                            <li>International Law</li>
                            <li>Diplomacy, and Humanitarian Law </li>
                            <li>Intellectual Property/Technology Transfer Law</li>
                            <li>Maritime/Admiralty Law</li>
                            <li>Legal Research and Drafting. </li>
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