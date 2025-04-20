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
import { FaFilter } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import Side from "../component/layout/side";

import { useRouter } from 'next/navigation'
import { PageNav } from "../component/layout/pageNav"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


export default function Courses() {

    const router = useRouter()

    return (
        <div className="bg-[#F9FAFB] px-2 md:px-12 py-4">
            <div className="text-4xl font-bold m-2 md:m-4 px-4 py-0">All Courses</div>
            <div className="grid md:grid-cols-4 gap-4 m-0 md:m-4  p-2">

                {/* filter section */}
                <div className="hidden md:block md:col-span-1 border-2">
                    <Side />
                </div>

                {/* FIX WIDTH THIS FOR MOBILE SCREENS */}
                <div className="sm:hidden w-full flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            type="text"
                            id="search"
                            placeholder="Search courses"
                            className="w-full pl-10"
                        />
                    </div>
                    <FaFilter className="text-gray-600 w-5 h-5" />
                </div>


                {/* card section */}
                <div className='col-span-3'>

                    <div className='flex p-1 justify-between m-2 items-center'>
                        <div className="text-sm sm:text-base">Showing X of Y results</div>
                        {/* options */}
                        <div className='flex items-center gap-4'>
                            <div className="hidden">Sort By:</div>
                            <Select>
                                <SelectTrigger className="text-xs sm:text-sm">
                                    <SelectValue placeholder="Default Sorting" />
                                </SelectTrigger>
                                <SelectContent className="text-xs sm:text-sm">
                                    <SelectItem value="modified">Date Modified</SelectItem>
                                    <SelectItem value="created">Created</SelectItem>
                                    <SelectItem value="alphabetically">A-Z</SelectItem>
                                </SelectContent>
                            </Select>
                            <Toggle variant="outline" className="hidden">
                                <FaRegCircleQuestion />
                            </Toggle>
                            <Toggle variant="outline" className="hidden">
                                <TfiMenuAlt />
                            </Toggle>

                        </div>
                    </div>

                    {/* cards */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <Card className="relative mx-1.25 gap-y-4 pt-0 pb-4 " onClick={() => router.push(`/details/1`)}>

                            <Badge variant="outline" className="absolute top-2 left-2 z-10 bg-white px-2 py-1 rounded-md">
                                Development
                            </Badge>

                            <img className="w-full rounded-t-xl" src="/design_1.jpg" />

                            <CardHeader className="px-2 sm:px-2">
                                <CardTitle className="text-">Learning Javascript With Imagination</CardTitle>
                                <div className="flex gap-2 my-2 items-center">
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <CardDescription>By David Miller</CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="flex justify-between gap-2 px-2 sm:px-2">
                                <div className="flex items-center gap-2 ">
                                    <div className="flex">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-[#6B7280] text-sm">(2105)</p>
                                </div>

                                <div className="block sm:hidden text-center">
                                    <p className="text-base font-bold text-[#2563EB]">$15.00</p>
                                </div>
                            </CardContent>

                            <CardFooter className="px-2 sm:px-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
                                    {/* Visible only on sm and larger */}
                                    <div className="hidden sm:block text-center sm:text-left">
                                        <p className="text-base font-bold text-[#2563EB]">$15.00</p>
                                    </div>

                                    <Button className="bg-[#2563EB] w-full sm:w-auto">
                                        Enroll Now
                                    </Button>
                                </div>
                            </CardFooter>


                        </Card>

                        <Card className="relative mx-1.25 gap-y-4 pt-0 pb-4 " onClick={() => router.push(`/details/1`)}>

                            <Badge variant="outline" className="absolute top-2 left-2 z-10 bg-white px-2 py-1 rounded-md">
                                Development
                            </Badge>

                            <img className="w-full rounded-t-xl" src="/design_1.jpg" />

                            <CardHeader className="px-2 sm:px-2">
                                <CardTitle className="text-">Learning Javascript With Imagination</CardTitle>
                                <div className="flex gap-2 my-2 items-center">
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <CardDescription>By David Miller</CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="flex justify-between gap-2 px-2 sm:px-2">
                                <div className="flex items-center gap-2 ">
                                    <div className="flex">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-[#6B7280] text-sm">(2105)</p>
                                </div>

                                <div className="block sm:hidden text-center">
                                    <p className="text-base font-bold text-[#2563EB]">$15.00</p>
                                </div>
                            </CardContent>

                            <CardFooter className="px-2 sm:px-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
                                    {/* Visible only on sm and larger */}
                                    <div className="hidden sm:block text-center sm:text-left">
                                        <p className="text-base font-bold text-[#2563EB]">$15.00</p>
                                    </div>

                                    <Button className="bg-[#2563EB] w-full sm:w-auto">
                                        Enroll Now
                                    </Button>
                                </div>
                            </CardFooter>


                        </Card>

                        <Card className="relative mx-1.25 gap-y-4 pt-0 pb-4 " onClick={() => router.push(`/details/1`)}>

                            <Badge variant="outline" className="absolute top-2 left-2 z-10 bg-white px-2 py-1 rounded-md">
                                Development
                            </Badge>

                            <img className="w-full rounded-t-xl" src="/design_1.jpg" />

                            <CardHeader className="px-2 sm:px-2">
                                <CardTitle className="text-">Learning Javascript With Imagination</CardTitle>
                                <div className="flex gap-2 my-2 items-center">
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <CardDescription>By David Miller</CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="flex justify-between gap-2 px-2 sm:px-2">
                                <div className="flex items-center gap-2 ">
                                    <div className="flex">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="text-[#6B7280] text-sm">(2105)</p>
                                </div>

                                <div className="block sm:hidden text-center">
                                    <p className="text-base font-bold text-[#2563EB]">$15.00</p>
                                </div>
                            </CardContent>

                            <CardFooter className="px-2 sm:px-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
                                    {/* Visible only on sm and larger */}
                                    <div className="hidden sm:block text-center sm:text-left">
                                        <p className="text-base font-bold text-[#2563EB]">$15.00</p>
                                    </div>

                                    <Button className="bg-[#2563EB] w-full sm:w-auto">
                                        Enroll Now
                                    </Button>
                                </div>
                            </CardFooter>


                        </Card>

                    </div>

                    {/* pagination */}
                    <div>
                        <PageNav />
                    </div>

                </div>

            </div>
        </div>
    )
}

