import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { Coursecard } from '../component/layout/courseCard'
import { Billing } from '../component/layout/billing'

const Checkout= () => {
  return (
    <div className='grid grid-cols-8 gap-4 m-8'>
        <div className='col-span-6 border-2 border-amber-300 p-4 m-4'>
            <h1>Payment Information</h1>
            <h4>Payment Method</h4>
            <Tabs defaultValue="account" className="w-full border-2">
                <TabsList  className="w-full border-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account"><Coursecard/></TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>

        <div className='col-span-2 border-2 border-blue-700 p-4 m-4'>
            <Coursecard/>
        </div>


    </div>
  )
}

export default Checkout
