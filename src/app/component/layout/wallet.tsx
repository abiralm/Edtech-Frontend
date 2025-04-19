import React from 'react'

import { Button } from '@/components/ui/button'

export const Wallet = () => {
  return (
    <div>
      <h1 className="my-2">Payment Method</h1>
      <div className='flex justify-between border-2 p-2 my-4 items-center rounded-xl'>
            <div className='flex items-center gap-4'>
                <img src="design_1.jpg" className='hidden sm:block w-[100px]'/>
                <h2 className='text-sm sm:text-base'>Pay with eSewa</h2>
            </div>
            <Button className='text-sm sm:text-base p-1.5 sm:p-4 bg-[#10B981]'>Make Payment</Button>
        </div>
        <div className='flex justify-between border-2 p-2 my-4 items-center rounded-xl'>
            <div className='flex items-center gap-4'>
                <img src="design_1.jpg" className='hidden sm:block w-[100px]'/>
                <h2 className='text-sm sm:text-base'>Pay with Khalti</h2>
            </div>
            <Button className='text-sm sm:text-base p-1.5 sm:p-4 bg-[#8B5CF6]'>Make Payment</Button>
        </div>
    </div>
  )
}
