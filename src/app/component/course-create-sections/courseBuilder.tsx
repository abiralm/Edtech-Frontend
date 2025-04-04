// CourseBuilder.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ChapterInfo from "./chapterInfo"
import { IoMdAdd } from "react-icons/io";
import { HiArrowSmLeft,HiArrowSmRight } from "react-icons/hi";

import { ChapterCreateType } from "@/types";
import { useState } from "react";
import ChapterForm from "./chapterForm";

interface BasicProps {
    handleBack: () => void;
    handleForward: () => void; 
    step: number;
}

const CourseBuilder = ({ handleBack, handleForward, step }: BasicProps) => {

  const [chapters, setChapters] = useState<ChapterCreateType[]>([]);

  const addChapter = (chapterData: ChapterCreateType) => {
    setChapters([...chapters, chapterData])
  }

  const [lessons,setLessons] =useState<ChapterCreateType[]>([]);
  
  const addLesson = (lessonData: ChapterCreateType) => {
    setLessons([...lessons, lessonData])
  }

  const [showCreateCourseForm,setshowCreateCourseForm] =useState<boolean>(true)

  const toggleCreateCourseForm = ()=>{
      setshowCreateCourseForm(!showCreateCourseForm)
  }

  return (
    <div className="flex items-center justify-center m-6">
      <Card className='w-3/5'>
        <CardHeader className='flex flex-col items-center'>
            <CardTitle className='text-3xl font-bold'>Course Builder</CardTitle>
            <CardDescription>Add lessons to your chapters</CardDescription>
        </CardHeader>
        
        <CardContent>
            <ChapterInfo chapters={chapters} onAddChapter={addChapter} lessons={lessons} onAddLesson={addLesson}/>
            {showCreateCourseForm?(<ChapterForm onAddChapter={addChapter} toggleForm={toggleCreateCourseForm}/>):null}
        </CardContent>

        <CardFooter className="justify-between">
                <Button onClick={()=>setshowCreateCourseForm(true)} className="bg-[#2563EB]">
                  <IoMdAdd /> 
                  Add New Chapter
                </Button>
            <div className="flex gap-4">
              <Button onClick={handleBack}><HiArrowSmLeft />Previous Step</Button>
              <Button onClick={handleForward}>Next Step<HiArrowSmRight /></Button>
            </div>
            
        </CardFooter>
      </Card>
    </div>
  )
};

export default CourseBuilder;