import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { PopularCard } from "../layout/popularCard"
export const Popular = () => {
  return (
    <div className="p-12 bg-[#F9FAFB] ">
        <div className="flex flex-col items-center gap-y-4">
            <p className="text-4xl font-bold">Popular Courses</p>
            <p className="text-xl">Start your journey with our top-rated courses</p>
        </div>
    
        <div className="flex justify-around m-8 gap-8">
          <PopularCard/>
          <PopularCard/>
          <PopularCard/>
        </div>    
    
    </div>
  )
}
