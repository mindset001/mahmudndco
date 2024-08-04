import React from 'react'
import Lady from '../../../../public/images/hair.png'
import Image from 'next/image'
import { title } from 'process'

function Mission() {
  return (
    <main className='flex justify-center items-center mt-20'>
        <div className='w-[80%] flex justify-between items-center'>
            <div className='w-[40%]'>
            <div>
                <h1 className='text-[35px] font-[600]'>Our Mission</h1>
                <div className='flex flex-col gap-10 mt-6'>
                    {Miss.map((item, i) => (
                        <div key={i}>
                            <ul className='flex'>
                                <li className='list-disc gap-4 text-[18px] font-[400]' >{item.title}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-[35px] font-[600]'>Our Vision</h1>
                <div className='flex flex-col gap-10 mt-6'>
                    {Viss.map((item, i) => (
                        <div key={i}>
                            <ul className='flex'>
                                <li className='list-disc gap-4 text-[18px] font-[400]' >{item.title}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <div>
                <Image src={Lady} alt='' className='w-[502px] '/>
            </div>
        </div>
    </main>
  )
}

export default Mission


const Miss = [
    {title: 'A one-stop top notch legal service provider '},
    {title: 'Providing exceptional tailored legal services '},
    {title: 'Pioneering positive change in legal industry'},
    {title: 'To build a formidable team with highly analytical skills. '},
    {title: 'Customer driven law firm providing timely and efficient services'},
    {title: 'Professional poise'},
    {title: 'Efficient service delivery and customer satisfaction.'},

]

const Viss = [
    {title: 'A one-stop top notch legal service provider '},

]