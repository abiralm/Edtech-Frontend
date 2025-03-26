"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Toggle } from "@/components/ui/toggle"
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import Side from "../component/layout/side";

import { useRouter } from 'next/navigation'
import { PageNav } from "../component/layout/pageNav"


export default function Courses() {

const router = useRouter()

  return (
    <div className="bg-[#F9FAFB] px-12 py-4">
        <div className="text-4xl font-bold m-4 px-4 py-0">All Courses</div>
        <div className="grid grid-cols-4 gap-4 m-4 p-2">
            
            {/* filter section */}
            <Side/>

            {/* card section */}
            <div className='col-span-3 border-2'>

                <div className='flex p-1 justify-between m-2 items-center'>
                    <div>Showing X of Y results</div>
                    {/* options */}
                    <div className='flex items-center gap-4'>
                        <div>Sort By:</div>
                        <Select>
                            <SelectTrigger className="w-[150px] text-m">
                                <SelectValue placeholder="Default Sorting" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="modified">Date Modified</SelectItem>
                                <SelectItem value="created">Created</SelectItem>
                                <SelectItem value="alphabetically">A-Z</SelectItem>
                            </SelectContent>
                        </Select>
                        <Toggle variant="outline">
                            <FaRegCircleQuestion />
                        </Toggle>
                        <Toggle variant="outline">
                            <TfiMenuAlt />
                        </Toggle>

                    </div>
                </div>
                
                {/* cards */}
                <div className='grid grid-cols-3 gap-4 '>
                    <Card className="relative mx-2 gap-y-4 pt-0 pb-4 " onClick={() => router.push(`/details/1`)}>
                        
                        <Badge variant="outline" className="absolute top-2 left-2 z-10 bg-white px-2 py-1 rounded-md">
                            Development
                        </Badge>

                        <img className="w-full rounded-t-xl" src="/design_1.jpg" />

                        <CardHeader>
                            <CardTitle>Learning Javascript With Imagination</CardTitle>
                            <div className="flex gap-2 my-2 items-center">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <CardDescription>By David Miller</CardDescription>
                            </div>
                        </CardHeader>

                        <CardContent className="flex items-center gap-2 ">
                            <div className="flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-[#6B7280]">(2105 reviews)</p>
                        </CardContent>

                        <CardFooter>
                            <div className="flex items-center justify-between w-full">
                                <Button className="bg-[#2563EB]">Enroll Now</Button>
                                <div className="flex gap-3">
                                    <p>$15.00</p>
                                    <p>$15.00</p>
                                </div>
                            </div>
                        </CardFooter>

                    </Card>
                </div>

                {/* pagination */}
                <div>
                    <PageNav/>  
                </div>

            </div>

        </div>
    </div>
  )
}

