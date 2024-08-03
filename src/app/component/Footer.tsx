import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/logo.png'
import Linked from '../../../public/images/linked.png'
import Twit from '../../../public/images/twit.png'
import Facebook from '../../../public/images/facebook.png'
import Insta from '../../../public/images/insta.png'
import { Divider } from 'antd'

function Footer() {
  return (
   <main>
        <div className='w-full flex flex-col items-center justify-center mt-20 my-10'>

            <div className='w-[80%] flex justify-between items-center'>
                <Image src={Logo} alt='' className='w-[180px] h-[180px]'/>
                <div className='h-[0.5px] w-[80%] bg-[#000000]'></div>
                
            </div>
            <div className='w-[60%] flex justify-between ml-[15%]'>
                <div className='w-1/3'>
                    <h1 className='text-[20px] font-[600]'>Quick Links</h1>
                    <div className='flex flex-col gap-6 mt-6'>
                    {Nav.map((item, i) => (
                        <ul className='font-[400] text-[14px] uppercase'>
                            <li>{item.name}</li>
                        </ul>
                    ))}
                </div>
                </div>

                <div className='w-1/3'>
                    <h1 className='text-[20px] font-[600]'>Practice Area</h1>
                    <div className='flex flex-col gap-6 mt-6'>
                    {Nav2.map((item, i) => (
                        <ul className='font-[400] text-[14px] '>
                            <li>{item.name}</li>
                        </ul>
                    ))}
                   
                </div>
                </div>

                <div className='w-1/3'>
                    <h1 className='text-[20px] font-[600]'>Contact Us</h1>
                    <div className='flex flex-col gap-6 mt-6'>
                    {Nav3.map((item, i) => (
                        <ul className='font-[400] text-[14px] '>
                            <li>{item.name}</li>
                        </ul>
                    ))}
                     <div className='flex gap-6'>
                        <Image src={Facebook} alt='' className='w-[18px] h-[18px]'/>
                        <Image src={Insta} alt='' className='w-[18px] h-[18px]'/>
                        <Image src={Linked} alt='' className='w-[18px] h-[18px]'/>
                        <Image src={Twit} alt='' className='w-[18px] h-[18px]'/>
                    </div>
                </div>
                </div>

            </div>
            <div className='w-[80%]'>
            <Divider className='bg-black font-[700] mt-40'/>
            <p className='text-center'>Copyright © 2023 Asteria. All rights reserved.</p>
            </div>
        </div>
   </main>
  )
}

export default Footer

const Nav = [
    {name:'NEWS', link: ''},
    {name:'OUR TALENT', link: ''},
    {name:'ABOUT US', link: ''},
    {name:'NEWSLETTERS', link: ''},
    {name:'PRIVACY POLICY', link: ''},
]

const Nav2 = [
    {name:'General Litigation', link: ''},
    {name:'Energy Law', link: ''},
    {name:'Financial Services', link: ''},
    {name:'Human Right', link: ''},
    {name:'Intellectual Property', link: ''},
]

const Nav3 = [
    {name:'No. 9 Bozoum Close, Off Adetokunbo Ademola, Behind AP Plaza,  Wuse II,  Abuja.', link: ''},
    {name:' (+234) 8033 1171 97', link: ''},
    {name:'rahusachamberssan@gmail.com rahusachambers@yahoo.com', link: ''},
  
]