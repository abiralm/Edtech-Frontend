import { BiSolidCaptions } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Button } from "@/components/ui/button"


const CourseVideo = () => {
  return (
    <div>
        <div className="mb-4">
            <h1 className="text-2xl font-semibold">HTML Fundamentals</h1>
            <h4>Learn the basics of HTML structure and elements</h4>
        </div>
        
        <div className="my-4 lg:my-6">
            <img className="w-full rounded-xl" src="/design_1.jpg"/>
        </div>
        

        <div className="flex items-center justify-between my-1.5 lg:my-4">
            <Button className="text-xs lg:text-base p-2">Continue Learning</Button>
            <div className="flex items-center justify-evenly gap-1 lg:gap-4 ">
                <h4 className="text-xs lg:text-base">Duration: 15.30</h4>
                <BiSolidCaptions className="text-2xl"/>
                <IoMdSettings className="text-xl"/>
            </div>
        </div>
    </div>
  )
}

export default CourseVideo