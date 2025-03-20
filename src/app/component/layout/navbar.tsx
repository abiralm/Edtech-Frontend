"use client"

import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <div className="mx-20 p-2 flex justify-between items-center bg-transparent">
        <div className="cursor-pointer text-3xl font-bold text-[#2563EB]" onClick={() => router.push(`/`)}>EduTech <span className='text-[#1F2937]'>Pro</span></div>

        <div className=' cursor-pointer flex m-4 gap-x-10 text-[#4B5563]'>
          <div>Features</div>
          <div onClick={() => router.push(`/courses`)}>Courses</div>
          <div>Testimonials</div>
          <div>Pricing</div>
        </div>

        <div className='cursor-pointer flex m-4 gap-x-4 text-[#4B5563]'>
          <button>Sign In</button>
          <button className='rounded-4xl py-2 px-4 bg-[#2563EB] text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar