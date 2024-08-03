'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../public/images/logo.png';
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (index: number) => {
    setDropdownOpen({ ...dropdownOpen, [index]: true });
  };

  const handleMouseLeave = (index: number) => {
    setDropdownOpen({ ...dropdownOpen, [index]: false });
  };

  return (
    <main className='px-20 py-6 z-10'>
      <div className='flex justify-between items-center'>
        <div className='flex w-[70%] justify-between items-center'>
          <Link href='/'><Image src={Logo} alt='' className='w-[120px] h-[120px]' /></Link>
          <div className='flex gap-6'>
            {Nav.map((item, i) => (
              <div
                className='font-[700] text-[16px] relative'
                key={i}
                onMouseEnter={() => item.submenu && handleMouseEnter(i)}
                onMouseLeave={() => item.submenu && handleMouseLeave(i)}
              >
                <Link href={item.link}>
                  <p>{item.name}</p>
                </Link>
                {item.submenu && dropdownOpen[i] && (
                  <ul className='absolute top-full left-0 mt-0 p-2 w-48 bg-white shadow-lg border z-20'>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className='py-2 px-4 hover:bg-gray-100'>
                        <Link href={subItem.link}>
                          <p>{subItem.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-[-20px]'>
          <button className='bg-[#CDA233] rounded-[36px] px-8 py-4 font-[700] text-[16px]'>Hire Us</button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

const Nav = [
  { name: 'About Us', link: '/about' },
  { name: 'Why M.A Mahmud & Co.', link: '/why' },
  {
    name: 'Our Talents', link: '', submenu: [
      { name: 'Principal Partners', link: '/principal' },
      { name: 'Partners', link: '/partner' },
      { name: 'Head of Department', link: '/hod' },
      { name: 'Senior Counsel', link: '/senior-counsel' },
      { name: 'Counsel', link: '/counsel' },
    ]
  },
  { name: 'Our Practice Areas', link: '/practice' },
  {
    name: 'Insights', link: '', submenu: [
      { name: 'News', link: '/news' },
      { name: 'Publications', link: '/publications' },
      { name: 'Career', link: '/career' },
      { name: 'Newsletter', link: '/newsletter' },
    ]
  },
  { name: 'Contact Us', link: '/contact' },
];
