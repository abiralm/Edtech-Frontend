"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="mx-8 lg:mx-20 px-2 py-4 bg-transparent flex flex-col">
      <div className="flex justify-between items-center">
        <div
          className="cursor-pointer text-xl sm:text-3xl font-bold text-[#2563EB]"
          onClick={() => router.push(`/`)}
        >
          EduTech <span className='text-[#1F2937]'>Pro</span>
        </div>

        <div className='hidden lg:flex cursor-pointer m-4 gap-x-10 text-[#4B5563]'>
          <div>Features</div>
          <div onClick={() => router.push(`/courses`)}>Courses</div>
          <div>Testimonials</div>
          <div>Pricing</div>
        </div>

        <div className='hidden lg:flex cursor-pointer m-4 gap-x-4 text-[#4B5563]'>
          <button>Sign In</button>
          <button className='rounded-4xl py-2 px-4 bg-[#2563EB] text-white'>Get Started</button>
        </div>

        <div className='lg:hidden cursor-pointer text-[#4B5563]'onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen?<RxCross2 />:<GiHamburgerMenu/>}
        </div>
      </div>

      {isMenuOpen && (
        <div className='flex flex-col lg:hidden mt-6 gap-y-4 text-[#4B5563] text-base'>
          <div className="text-sm sm:text-base">Features</div>
          <div className="text-sm sm:text-base" onClick={() => { setIsMenuOpen(false); router.push(`/courses`) }}>Courses</div>
          <div className="text-sm sm:text-base">Testimonials</div>
          <div className="text-sm sm:text-base">Pricing</div>
          {/* <div className="flex gap-x-4">
            <button>Sign In</button>
            <button className='rounded-4xl py-2 px-4 bg-[#2563EB] text-white'>Get Started</button>
          </div> */}
        </div>
      )}
    </div>
  )
}

export default Navbar;
