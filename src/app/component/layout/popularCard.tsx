import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

  
export const PopularCard = () => {
  return (
    <div className='w-full'>
        <Card className='pt-0 pb-4 rounded-2xl'>
            <img className="w-full rounded-t-2xl" src="/design_1.jpg"/>
            <CardHeader>
                <CardTitle>
                    Data Science Fundamentals
                </CardTitle>
                <CardDescription>
                    Learn the basics of data analysis and visualization
                </CardDescription>
            </CardHeader>
            <CardFooter >
                <div className='flex items-center justify-between w-full'>
                    <h1>$9.99</h1>
                    <Button>Enroll Now</Button>
                </div>
            </CardFooter>
        </Card>
    </div>
    

  )
}
