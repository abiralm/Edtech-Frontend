import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { FaBrain } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { FaVideo } from "react-icons/fa6";

export const Features = () => {
  return (
    <div className="p-4">
        <div className="flex flex-col items-center my-8 gap-y-4">
            <p className="text-4xl font-bold">Why Choose EdutechPro?</p>
            <p className="text-xl">Innovative features designed to enhance your learning experience</p>
        </div>
        <div className="my-10 mx-16 flex justify-between gap-x-8">

            <Card className="w-1/3 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] md:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] m-4 px-4">
                <CardHeader>
                <FaBrain className="text-5xl rounded-3xl p-2 bg-[#DBEAFE]" />
                </CardHeader>
                <CardContent>
                <p className="font-bold text-2xl text-[#1F2937]">AI-Powered Learning</p>
                </CardContent>
                <CardFooter>
                <p className="font-normal text-m text-[#4B5563]">Personalized learning paths adapted to your pace and style</p>
                </CardFooter>
            </Card>

            <Card className="w-1/3 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] md:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] m-4  px-4">
                <CardHeader>
                <FaVideo className="text-5xl rounded-3xl p-2 bg-[#DBEAFE]" />
                </CardHeader>
                <CardContent>
                <p className="font-bold text-2xl text-[#1F2937]">Live Sessions</p>
                </CardContent>
                <CardFooter>
                <p className="font-normal text-m text-[#4B5563]">Interactive classes with industry experts and mentors</p>
                </CardFooter>
            </Card>

            <Card className="w-1/3 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] md:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] m-4  px-4">
                <CardHeader>
                <TiStarburst className="text-5xl rounded-3xl p-2 bg-[#DBEAFE]" />
                </CardHeader>
                <CardContent>
                <p className="font-bold text-2xl text-[#1F2937]">Certified Courses</p>
                </CardContent>
                <CardFooter>
                <p className="font-normal text-m text-[#4B5563]">Industry-recognized certifications upon completion</p>
                </CardFooter>
            </Card>

        </div>
    </div>
    

  )
}
