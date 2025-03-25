import React from 'react'

import { Button } from '@/components/ui/button'

export const Wallet = () => {
  return (
    <div>
      <h1 className="my-2">Payment Method</h1>
      <div className='flex justify-between border-2 p-2 my-4 items-center rounded-xl'>
            <div className='flex items-center gap-4'>
                <img src="design_1.jpg" className='w-[100px]'/>
                <h2>Pay with eSewa</h2>
            </div>
            <Button>Make Payment</Button>
        </div>
        <div className='flex justify-between border-2 p-2 my-4 items-center rounded-xl'>
            <div className='flex items-center gap-4'>
                <img src="design_1.jpg" className='w-[100px]'/>
                <h2>Pay with Khalti</h2>
            </div>
            <Button>Make Payment</Button>
        </div>
    </div>
  )
}
