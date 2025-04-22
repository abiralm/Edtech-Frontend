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

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


import { courseList } from '@/mocks/courses'
import { Badge } from '@/components/ui/badge'

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
                                <TableCell className=''><Badge className={`${c.status === "Draft" ? "bg-[#FEF3C7] text-[#B45309]" : "bg-[#D1FAE5] text-[#047857]"}`}>
                                    {c.status}
                                </Badge></TableCell>
                                <TableCell className="">1200</TableCell>
                                <TableCell className=''>{c.rating}</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>


                        ))}
                    </TableBody>
                    <TableFooter>
                    </TableFooter>
                </Table>
            </div>



            {/* pagination spacing needs updating */}
            <div className="flex justify-between items-center">
                <span>Showing X to Y of Z entries</span>
                <Pagination className="flex w-1/4 m-0">
                    <PaginationContent className="flex items-center space-x-2">
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                className="px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="px-3 py-1 text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 transition"
                            >
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis className="text-gray-500" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                className="px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>


        </div>

    )
}

export default page