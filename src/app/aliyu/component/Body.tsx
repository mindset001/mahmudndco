import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/aliyu.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-full flex flex-col md:flex-row justify-center items-center my-10 md:my-40'>
        <div className='w-[80%] md:w-[80%] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start'>
            <div className='w-full md:w-[45%]'>
                <div>
                   <div className='hidden md:block'>
                   <h1 className='text-[28px] font-[500] capitalize'> ALIYU D. HUSSAIN LL.B, BL</h1>
                    <h2 className='text-[20px] font-[600]'>HOD</h2>
                    <Divider className='bg-black w-[80%]'/>
                   </div>

                    <div>
                    <h1 className='text-[28px] font-[500]'>Background</h1>
                    <p className='font-[400] text-[16px] text-justify'>Aliyu D. Hussain obtained his L.L.B from Ahmadu Bello University (A.B.U) Zaria, Kaduna State in 2007. He attended the Nigerian law School Agbani, Enugu State and was called to the Nigerian Bar in 2008.</p>
                         <p className='mt-4 font-[400] text-[16px] text-justify'>Aliyu commenced his career during his Youth Corp Service year in the office of Longe & Longe Associates (Agbeja Chambers) in Ikole-Ekiti, Ekiti State in 2009. He then proceeded to join the office of Hussaini Omar Garba & Co. (Halal Chambers) from 2010- January 2014. He is presently a legal practitioner with Mahmud & Co. and the coordinator of inferior courts.  Aliyu has under gone a wide range of training under the platform of the Legal Clinic, an initiative established to provide free legal advice to impecunious persons in need of legal services. He has also participated in numerous seminars organized by the National Drug Law Enforcement Agency (N.D.L.E.A) to curb the widespread abuse of substance by youths.</p>

                    </div>
                </div>
                <div>
                <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                    <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                        <li>Ahmadu Bello University (A.B.U), LLB.</li>
                        <li>Nigerian Law School, BL.</li>
                        
                    </ul>
                </div>

                <div>
                <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                    <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                        <li>Criminal Law and Litigation</li>
                        <li>Civil Litigation</li>
                        <li>Maritime Law</li>
                        <li>Corporate Practice</li>
                        <li>Appellate Practice</li>
                        <li>Arbitration And Other Adr Modes.</li>
                        
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-[45%] flex flex-col items-center md:items-start'>
            <div className='block md:hidden w-full'>
                   <h1 className='text-[28px] font-[500] capitalize'>  ALIYU D. HUSSAIN LL.B, BL</h1>
                    <h2 className='text-[20px] font-[600]'>HOD</h2>
                    <Divider className='bg-black w-[80%]'/>
                   </div>
                <Image src={Man} alt='' />
                <div className='hidden md:block'>
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
        <div className='block md:hidden w-[80%]'>
                <h1 className='text-[35px] font-[600] my-10'>Contact Lawyer</h1>
                <form action="" className='w-full'>
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
    </main>
    )
}

export default Body