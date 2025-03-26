import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { FaGraduationCap } from "react-icons/fa6";
import Link from 'next/link'

const Login = () => {
  return (
    <div className="flex items-center  justify-center m-8">
        <Card className='w-3/10'>
            <CardHeader className='flex flex-col items-center'>
                <FaGraduationCap className='text-5xl'/>
                <CardTitle className='text-3xl font-bold'>Welcome Back</CardTitle>
                <CardDescription>Please enter your details to sign in</CardDescription>
            </CardHeader>
            <CardContent>


            </CardContent>
            <CardFooter className='flex flex-col items-center text-sm'>
                <p className="hover:underline hover:underline-offset-4 m-1"><Link href="/roles">Don't have an account?</Link></p>
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/instructor">Sign up as an instructor</Link></p>
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/courses">Enroll in a course</Link></p>
            </CardFooter>
        </Card>
    </div>

  )
}

export default Login