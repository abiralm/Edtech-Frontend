"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Link from 'next/link'
import { FaPlus } from "react-icons/fa";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { courseList } from '@/mocks/courses'

const page = () => {
    return (
        <div className='my-4 mx-8'>
            {/* top section */}

            <div className='flex justify-between items-center w-full gap-2 my-4'>
                <div>
                    <p className='text-2xl font-bold'>My Courses</p>
                    <p className='text-sm font-light text-[#4B5563]'>Manage your course catalog</p>
                </div>
                <div>
                    <Button className="bg-[#2563EB] text-white flex items-center gap-2">
                        <Link href="/createcourse" className="flex items-center gap-2">
                            <FaPlus />
                            <span>Create New Course</span>
                        </Link>
                    </Button>

                </div>
            </div>

            {/* searchbar */}
            <div className='flex gap-4 my-8'>
                <Input type="email" placeholder="Search for Courses" />

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>



            </div>

            <div>
                <Table>
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className='text-sm text-[#6B7280]'>
                            <TableHead className='text-sm text-[#6B7280]'>Course Title</TableHead>
                            <TableHead className='text-sm text-[#6B7280]'>Price</TableHead>
                            <TableHead className='text-sm text-[#6B7280]'>Status</TableHead>
                            <TableHead className='text-sm text-[#6B7280]'>Enrollments</TableHead>
                            <TableHead className='text-sm text-[#6B7280]'>Rating</TableHead>
                            <TableHead className='text-sm text-[#6B7280]'>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody className=''>
                        {courseList.map((c) => (
                            <TableRow key={c.course_id} className='border-y-2'>
                                <TableCell className="font-semibold">{c.course_name}</TableCell>
                                <TableCell className=''>{c.course_price}</TableCell>
                                <TableCell className=''>{c.status}</TableCell>
                                <TableCell className="">1200</TableCell>
                                <TableCell className=''>{c.rating}</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        {/* <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow> */}
                    </TableFooter>
                </Table>
            </div>

        </div>

    )
}

export default page