import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CourseItems from "./courseItems"
import AddNewContent from "./addNewContent"
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { Button } from "@/components/ui/button";

const ChapterInfo = () => {
  return (
    <div className="flex items-center justify-center m-6">
        <Card className='w-3/5'>
            <CardHeader className='flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <CardTitle className='text-2xl font-bold'>Chapter 1 : Introduction to Web Development</CardTitle>
                    <CardDescription>X Lessons • Y minutes total</CardDescription>
                </div>

                <Button>
                    <MdEdit /> 
                    Edit Chapter
                </Button>
                
            </CardHeader>

            <CardContent>
                <CourseItems/>
                <AddNewContent/>
            </CardContent>
            
            <CardFooter className="justify-between">
                <Button>
                    <IoMdAdd /> 
                    Add New Chapter
                </Button>
                <Button>
                    Save Changes
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ChapterInfo