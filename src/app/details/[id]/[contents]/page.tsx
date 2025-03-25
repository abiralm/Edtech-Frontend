import React from 'react'
import ProgBar from '@/app/component/layout/progBar';
import CourseVideo from '@/app/component/layout/courseVideo';
import Side from '@/app/component/layout/side';

const Videos = () => {
  return (
    <div>
        <div className='border-2 py-4 px-14 '>
            <div className='flex items-center justify-between m-6 '>
                <h1 className='text-2xl font-bold'>Advanced Web Development Course</h1>
                <div className='flex items-center justify-end gap-4 w-1/3'>
                    <h2>Progress 45%</h2>
                    <ProgBar/>
                </div>
                
            </div>
            <div className='grid grid-cols-8 gap-2 m-6'>
                <div className='border-2 col-span-2 p-4 m-4 gap-y-4'>
                    <Side/>
                </div>
                <div className='border-2 col-span-6 p-4 m-4 gap-y-4 rounded-2xl'>
                    <CourseVideo/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videos;