import { PopularCard } from "../layout/popularCard"
export const Popular = () => {
  return (
    <div className="p-2 md:p-12 bg-[#F9FAFB] ">
        <div className="flex flex-col items-center gap-y-4">
            <p className="text-2xl text-center sm:text-4xl font-bold">Popular Courses</p>
            <p className="text-base sm:text-xl text-center">Start your journey with our top-rated courses</p>
        </div>
    
        <div className="flex flex-col md:flex-row justify-around m-8 gap-8">
          <PopularCard/>
          <PopularCard/>
          <PopularCard/>
        </div>    
    
    </div>
  )
}
