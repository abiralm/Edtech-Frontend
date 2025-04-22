import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { FaBell } from "react-icons/fa";
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaBook } from "react-icons/fa";

const InstructorDashboardHome = () => {
  return (
    <div className='my-4 mx-8'>
      {/* top section */}

      <div className='flex justify-between items-center w-full gap-2 my-4' >
        <div>
          <p className='text-2xl font-bold'>Welcome Back, John!</p>
          <p className='text-sm font-light text-[#4B5563]'>Here's what's happening with your courses today.</p>
        </div>

        <div className='flex items-center gap-6'>
          <FaBell className='text-xl' />
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

      </div >

      <div className='grid grid-cols-4 gap-6 my-8'>
        <Card className='col-span-1'>
          <CardHeader className='flex justify-between items-center'>
            <div className='bg-[#DBEAFE] p-4 rounded-xl'><FaBook className='text-xl'/></div>
            <p className='text-[#10B981]'>12%</p>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-3xl'>24</p>
            <span className='text-[#4B5563]'>Total Courses</span>
          </CardContent>
        </Card>

        <Card className='col-span-1'>
          <CardHeader className='flex justify-between items-center'>
            <div className='bg-[#DBEAFE] p-4 rounded-xl'><FaBook className='text-xl'/></div>
            <p className='text-[#10B981]'>12%</p>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-3xl'>24</p>
            <span className='text-[#4B5563]'>Total Courses</span>
          </CardContent>
        </Card>

        <Card className='col-span-1'>
          <CardHeader className='flex justify-between items-center'>
            <div className='bg-[#DBEAFE] p-4 rounded-xl'><FaBook className='text-xl'/></div>
            <p className='text-[#10B981]'>12%</p>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-3xl'>24</p>
            <span className='text-[#4B5563]'>Total Courses</span>
          </CardContent>
        </Card>

        <Card className='col-span-1'>
          <CardHeader className='flex justify-between items-center'>
            <div className='bg-[#DBEAFE] p-4 rounded-xl'><FaBook className='text-xl'/></div>
            <p className='text-[#10B981]'>12%</p>
          </CardHeader>
          <CardContent>
            <p className='font-bold text-3xl'>24</p>
            <span className='text-[#4B5563]'>Total Courses</span>
          </CardContent>
        </Card>

      </div>

    </div >
  )
}

export default InstructorDashboardHome