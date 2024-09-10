import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/med.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-ful flex justify-center items-center my-40'>
            <div className='w-[80%] flex justify-between'>
                <div className='w-[45%]'>
                    <div>
                        <h1 className='text-[20px] font-[600] capitalize'>UDZAHU MEDUGU LLB, BL, MBCL,</h1>
                        <h2 className='text-[20px] font-[600]'> Partner</h2>
                        <Divider className='bg-black w-[80%]'/>

                        <div>
                        <h1 className='text-[28px] font-[500]'>Background</h1>
                        <p className='font-[400] text-[16px] text-justify'>Udzahu holds a Bachelor of Law Degree from Ahmadu Bello University and was called to the Nigerian Bar in 2009. She further obtained a master in Business and Commercial Law from Bayero University Kano in 2014. She is also certified in Data Processing and Information Technology and has undergone continuing Legal Education Courses under the auspices of the Nigerian Bar Association. </p>
                             <p className='mt-4 font-[400] text-[16px] text-justify'>In her years of law practice, Udzahu has been opportune to garner experience from the following organizations: Currently Senior Counsel in Mahmud and Co (Legal Practitioners and Solicitors) Abuja, Counsel in F.J. Osimerha and Co (Legal Practitioners and Solicitors) Kano State, Volunteer/ Master Trainer in Mana Foundation for Grass Root Development, Adamawa State. Udzahu’s exposure to law practice has enabled her garner experience in building successful client relationships and she is passionate in providing appropriate and effective legal services to them.</p>
          
                        </div>
                    </div>
                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Ahmadu Bello University, LLB.</li>
                            <li>Nigerian Law School, BL.</li>
                            <li>Bayero University Kano, MBCL</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Election Petition</li>
                            <li>Civil Litigation</li>
                            <li>Criminal Litigation</li>
                            <li>Corporate Secretarial Services</li>
                            <li>Law Reporting and Case Management</li>
                            <li>Legal Research and Drafting.     </li>
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