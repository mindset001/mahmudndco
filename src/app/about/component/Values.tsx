import React from 'react'
import Lady from '../../../../public/images/value.png'
import Image from 'next/image'
import { title } from 'process'

function Values() {
  return (
    <main className='flex justify-center items-center mt-20'>
        <div className='w-[80%] flex justify-between items-center'>
        <div>
                <Image src={Lady} alt='' className='w-[560px] '/>
            </div>
            <div>
            <div className=''>
                <h1 className='text-[35px] font-[600]'>Our Values</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    {data.map((item, i )=> (
                        <div
                            key={i}
                          
                        >
                            <div className='group flex gap-2'>
                                <div className='w-[8px] bg-[#FFF1C6] hidden group-hover:block'></div>

                               <div className='group-hover:bg-[#FFF1C680] flex gap-2 p-4'>
                                <div>
                                    <h3 className='text-[#000] text-[28px] font-[500] group-hover:text-[#000]'>{item.title}</h3>
                                    <p className='text-[#000] text-[14px] font-[400] w-[531px] group-hover:text-[#000] mt-4'>{item.description}</p>
                                </div>
                               </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
         
            </div>
           
        </div>
    </main>
  )
}

export default Values


const data = [
    { id: '01', title: 'Integrity', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    { id: '01', title: 'Competence', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    { id: '01', title: 'Diligence', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    { id: '01', title: 'Professionalism', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    
];

