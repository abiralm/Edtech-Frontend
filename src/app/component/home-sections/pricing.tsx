
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { FaCheck } from "react-icons/fa6"

export const Pricing = () => {
  return (
    <div className="p-12 bg-[#F9FAFB]">
        <div className="flex flex-col items-center gap-y-4">
        <p className="text-2xl text-center sm:text-4xl font-bold">Pricing</p>
            <p className="text-base sm:text-xl text-center">Flexible plans for every learning journey</p>
        </div>
    
        <div className="p-10 flex gap-x-8 justify-around">
            <Card className=" max-w-[395px] w-full md:w-[50%] lg:w-[395px] aspect-[395/224]">
                <CardHeader className="flex items-center">
                    <div>
                        <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                        <CardDescription className="font-bold"><span className="text-4xl ">$29</span>/month</CardDescription>
                    </div> 
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full rounded-4xl">Get Started</Button>
                </CardFooter>
            </Card>

            <Card className=" max-w-[395px] w-full md:w-[50%] lg:w-[395px] aspect-[395/224]">
                <CardHeader className="flex items-center">
                    <div>
                        <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                        <CardDescription className="font-bold"><span className="text-4xl ">$29</span>/month</CardDescription>
                    </div> 
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full rounded-4xl">Get Started</Button>
                </CardFooter>
            </Card>

            <Card className=" max-w-[395px] w-full md:w-[50%] lg:w-[395px] aspect-[395/224]">
                <CardHeader className="flex items-center">
                    <div>
                        <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                        <CardDescription className="font-bold"><span className="text-4xl ">$29</span>/month</CardDescription>
                    </div> 
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <FaCheck/>
                        <p>Access to 50+ courses</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full rounded-4xl">Get Started</Button>
                </CardFooter>
            </Card>

        </div>    
    
    </div>
  )
}

