import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/man.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-ful flex justify-center items-center my-40'>
            <div className='w-[80%] flex justify-between'>
                <div className='w-[45%]'>
                    <div>
                        <h1 className='text-[28px] font-[500]'>Isa Abbas</h1>
                        <h2 className='text-[20px] font-[600]'>Principal Partner</h2>
                        <Divider className='bg-black w-[80%]'/>

                        <div>
                        <h1 className='text-[28px] font-[500]'>Background</h1>
                        <p className='font-[400] text-[16px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu lorem ultricies arcu. Fusce sed enim venenatis, interdum lorem eget, semper dolor. Praesent nisi diam, varius et pretium in, venenatis sed enim. Nullam feugiat euismod nulla, nec eleifend eros tincidunt et. Nulla mattis lacus nec nulla auctor, in tempus velit iaculis. Praesent risus libero, sodales id risus nec, rutrum consectetur quam.
                             Curabitur tincidunt est eget nulla semper elementum. Nam vulputate fringilla ligula ac commodo.</p>
                             <p className='mt-4 font-[400] text-[16px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu lorem ultricies arcu. Fusce sed enim venenatis, interdum lorem eget, semper dolor. Praesent nisi diam, </p>
                        </div>
                    </div>
                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>General Litigation</li>
                            <li>Human Rights</li>
                            <li>Financial Services</li>
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