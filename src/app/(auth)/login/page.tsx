"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from 'next/link'
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

import { useRouter } from 'next/navigation'



const Login = () => {
    const router = useRouter()
    return (
    <div className="flex items-center  justify-center mx-6 my-12">
        <Card className='w-3/10'>
            <CardHeader className='flex flex-col items-center '>
                <CardTitle className='text-3xl font-bold'>Choose your role</CardTitle>
                <CardDescription>Select how you want to join our platform</CardDescription>
            </CardHeader>

            <CardContent onClick={() => router.push(`/login/instructor`)} >
                <div className="flex items-center gap-6 border-2 p-4 rounded-xl hover:bg-[#EEF4FF]">
                    <div className=" bg-amber-300 rounded-md">
                        <FaChalkboardTeacher className="text-4xl m-3"/>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h1 className="text-lg font-bold">Sign up as Instructor</h1>
                        <h4 className="text-sm">Create and manage courses, teach students</h4>
                    </div>
                    <IoIosArrowForward className="text-4xl"/> 
                </div>
            </CardContent>

            <CardContent onClick={() => router.push(`/login/student`)} >
                <div className="flex items-center justify-between gap-6 border-2 p-4 rounded-xl hover:bg-[#EEF4FF]">
                    <div className=" bg-amber-300 rounded-md">
                        <PiStudentFill className="text-4xl m-3"/>
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <h1 className="text-lg font-bold">Sign up as Student</h1>
                        <h4 className="text-sm text-wrap">Learn from expert instructors, access courses</h4>
                    </div>

                    <IoIosArrowForward className="text-4xl"/>
                    
                </div>
            </CardContent>

            <CardFooter className='flex flex-col items-center text-sm'>
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/signin">Back to Login</Link></p>
            </CardFooter>
        </Card>
    </div>

  )
}

export default Login