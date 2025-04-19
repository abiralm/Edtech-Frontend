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
    <div className='grid grid-cols-1 md:grid-cols-8 gap-4 m-4 sm:m-8'>

        <div className='col-span-1 md:col-span-6 md:p-2 md:mx-4 md:mt-2 gap-y-4'>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <CheckoutCourseDetails/>
            <div className=' bg-[#FFF] my-2 py-4 px-3 sm:px-4 border-2 rounded-2xl'>

                <h1 className="text-xl font-semibold">Payment Information</h1>
                

                <Tabs defaultValue="wallet" className="w-full my-4">
                    <TabsList  className="w-full gap-2 sm:gap-4 bg-none">
                        <TabsTrigger 
                            value="wallet" 
                            className="text-sm sm:text-base border-2 w-1/2  py-4 text-left flex items-center justify-start data-[state=active]:bg-[#DBEAFE] gap-1.5 sm:gap-2 ">
                            <FaWallet/>
                            Pay with Wallet
                        </TabsTrigger>

                        <TabsTrigger 
                            value="card" 
                            className="text-sm sm:text-base border-2 w-1/2  py-4 text-left flex items-center justify-start data-[state=active]:bg-[#DBEAFE]  gap-1.5 sm:gap-2 ">
                            <FaCreditCard className='p-0'/>
                            Pay with Card
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="wallet"><Wallet/></TabsContent>
                    <TabsContent value="card"><Creditcard/></TabsContent>
                </Tabs>

                {/* billing form */}
                <Billing/>
            </div>
            
        </div>

        {/* margin and padding needs to be propely arranged */}
        <div className='col-span-1 md:col-span-2 md:mt-12 gap-y-4'>
            <Coursecard/>
        </div>


    </div>
  )
}

export default Checkout
