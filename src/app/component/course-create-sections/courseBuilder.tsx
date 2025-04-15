// CourseBuilder.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ChapterInfo from "./chapterInfo"
import { IoMdAdd } from "react-icons/io";
import { HiArrowSmLeft,HiArrowSmRight } from "react-icons/hi";
import { ChapterType, LessonType } from "@/types";
import { useState } from "react";
import ChapterForm from "./chapterForm";

interface BasicProps {
    handleBack: () => void;
    handleForward: () => void; 
    step: number;
    course_id: string;
    addChapterInState: (chapterData: ChapterType) =>void
    deleteChapterFromState: (chapterData: ChapterType) =>void
    chapters: ChapterType[]
    addLessonToChapters: (lessonData :LessonType,chapter_id:string)=>void
}

const CourseBuilder = ({ handleBack, handleForward, step, course_id, addChapterInState,deleteChapterFromState, chapters, addLessonToChapters}: BasicProps) => {

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
            <ChapterInfo chapters={chapters} addChapterInState={addChapterInState} deleteChapterFromState={deleteChapterFromState} course_id={course_id} addLessonToChapters={addLessonToChapters}/>
            {showCreateCourseForm?(<ChapterForm toggleForm={toggleCreateCourseForm} addChapterInState={addChapterInState} course_id={course_id} order={chapters.length}/>):null}
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