import React from 'react'
import ProgBar from '@/app/component/layout/progBar';
import CourseVideo from '@/app/component/layout/courseVideo';
import Side from '@/app/component/layout/side';

const Videos = () => {
    return (
        <div>
            <div className=' py-4 lg:px-14 '>
                <div className="flex flex-col lg:flex-row items-center justify-between m-6 gap-4">
                    <h1 className="text-2xl font-bold text-left">
                        Advanced Web Development Course
                    </h1>

                    <div className="flex sm:flex-row items-center gap-2 sm:gap-4 w-full lg:w-1/3 flex-wrap sm:flex-nowrap">
                        <h2 className="text-sm sm:text-base whitespace-nowrap">Progress 45%</h2>
                        <div className="w-full">
                            <ProgBar />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-8 gap-2 lg:m-6'>
                    <div className="hidden lg:block border-2 col-span-2 p-4 m-4 gap-y-4">
                        <Side />
                    </div>
                    <div className='border-2 cols-span-1 lg:col-span-6 p-2 lg:p-4 m-3 lg:m-4 gap-y-4 rounded-2xl'>
                        <CourseVideo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos;