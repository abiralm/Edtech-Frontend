// CourseBuilder.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ChapterInfo from "./chapterInfo"
import { IoMdAdd } from "react-icons/io";
import { ChapterCreateType } from "@/types";
import { useState } from "react";
import ChapterForm from "./chapterForm";
import { VideoForm } from "./videoForm";

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

  // const [lessons,setLessons] =useState<Chapter

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
            <ChapterInfo chapters={chapters} onAddChapter={addChapter}/>
            {showCreateCourseForm?(<ChapterForm onAddChapter={addChapter} toggleForm={toggleCreateCourseForm}/>):null}
        </CardContent>

        <CardFooter className="justify-between">
                <Button onClick={()=>setshowCreateCourseForm(true)}>
                  <IoMdAdd /> 
                  Add New Chapter
                </Button>
            <Button onClick={handleBack}>Previous Step</Button>
            <Button onClick={handleForward}>Next Step</Button>
        </CardFooter>
      </Card>
    </div>
  )
};

export default CourseBuilder;