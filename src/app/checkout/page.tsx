import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaWallet,FaCreditCard } from "react-icons/fa";

import { Coursecard } from '../component/layout/courseCard'
import { Billing } from '../component/layout/billing'
import CheckoutCourseDetails from '../component/layout/checkoutCourseDetails'
import { Wallet } from '../component/layout/wallet';
import { Creditcard } from '../component/layout/creditCard';

const Checkout= () => {
  return (
    <div className='grid grid-cols-8 gap-4 m-8'>
        <div className='col-span-6 p-4 m-4 gap-y-4'>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <CheckoutCourseDetails/>
            <div className=' bg-[#FFF] my-2 p-4 border-2 rounded-2xl'>

                <h1 className="text-xl font-semibold">Payment Information</h1>
                

                <Tabs defaultValue="wallet" className="w-full my-4">
                    <TabsList  className="w-full gap-4 bg-none">
                        <TabsTrigger 
                            value="wallet" 
                            className="border-2 w-1/2 p-5 text-left flex items-center justify-start data-[state=active]:bg-[#DBEAFE] gap-2 ">
                            <FaWallet />
                            Pay With Wallet
                        </TabsTrigger>

                        <TabsTrigger 
                            value="card" 
                            className="border-2 w-1/2 p-5 text-left flex items-center justify-start data-[state=active]:bg-[#DBEAFE] gap-2 ">
                            <FaCreditCard />
                            Pay With Card
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="wallet"><Wallet/></TabsContent>
                    <TabsContent value="card"><Creditcard/></TabsContent>
                </Tabs>

                {/* billing form */}
                <Billing/>
            </div>
            
        </div>

        <div className='col-span-2 border-2 border-blue-700 p-4 m-4'>
            <Coursecard/>
        </div>


    </div>
  )
}

export default Checkout
