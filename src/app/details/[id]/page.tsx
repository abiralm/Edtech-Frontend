import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { FaStar } from "react-icons/fa";
import { FaUserGroup,FaCheck  } from "react-icons/fa6";
import { Coursecard } from "@/app/component/layout/courseCard";
import { CourseContent } from "@/app/component/layout/courseContent";


export default function Details() {

  return (
    <div className='border-2 grid grid-cols-3 gap-y-2 gap-x- p-8 bg-[#F9FAFB] '>
      
        <div className=' px-2 py-4 m-2 col-span-3 bg-[#FFFFFF] rounded-xl '>

            <div className='grid grid-cols-2 gap-2 items-center justify-evenly'>
                
                <div className="px-8">

                  {/* badges */}
                  <div className="flex my-2 gap-2">
                    <Badge className="p-2 bg-blue-400">Development</Badge>
                    <Badge className="p-2 bg-green-400">Bestseller</Badge>
                  </div>

                  {/* text */}
                  <h2 className="text-3xl font-bold my-6">Complete Web Development Bootcamp 2025</h2>
                  <p className="my-6">Master web development from scratch: HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects.</p>
                  
                  {/* ratings */}
                  <div className="flex gap-4 my-4">

                    <div className="flex items-center gap-2">
                      <FaStar className="text-xl"/>
                      <p><span>4.8 </span>(2.5k reviews)</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUserGroup className="text-xl"/>
                      <span>15000 students</span>
                    </div>
                  </div>

                  {/* instructor */}
                  <div className="flex gap-2 my-2 items-center">
                      <Avatar className="w-12 h-12">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>David Miller</p>
                        <p>Software Developer</p>
                      </div>
                      
                  </div>

                </div>

                <div>
                  <img className="rounded-2xl" src="/design_1.jpg"/>
                </div>

            </div>
        </div>
        

        {/* left */}
        <div className='m-2 col-span-2 rounded-xl'>

            {/* course features */}
            <div className="col-span-2 p-8 m-2 bg-[#FFFFFF] rounded-xl border-2">
              <h2 className="text-3xl font-bold my-6">What You'll Learn</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-x-2">
                  <FaCheck/>
                </div>
              </div>
            </div>


            {/* margin needs adjustment here */}
            <div className='m-2 my-8 col-span-2 bg-[#FFFFFF] rounded-xl'>
              <CourseContent/>
            </div>
            
            {/* requirements */}
            <div className='p-8 m-2 col-span-2 bg-[#FFFFFF] rounded-xl'>
              <div>
                <h2 className="text-3xl font-bold my-6 ">Requirements</h2>
              </div>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>

          {/* </div> */}
        </div>

        <div className="p-2 m-2 flex justify-end items-start"> 
          <Coursecard/>
        </div>

    </div>
  )
}
