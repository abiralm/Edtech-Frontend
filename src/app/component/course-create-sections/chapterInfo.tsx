import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

import CourseItems from "./courseItems"
import AddNewContent from "./addNewContent"
import ChapterTitle from "./chapterTitle";
import { ChapterSchema } from "@/schema";
import { z } from "zod";
import { useState } from "react";
import { ChapterType, LessonType } from "@/types";

interface ChapterInfoProps {
    chapters: ChapterType[];
    addChapterInState: (chapterData: ChapterType) =>void
    lessons?: LessonType[];
    onAddLesson?: (lessonData:LessonType) => void;
    course_id: string
}

const ChapterInfo = ({ chapters, addChapterInState,lessons,onAddLesson, course_id }: ChapterInfoProps) => {


    if (chapters.length === 0) {
        return null;
    }else{
        return(<div className="flex flex-col items-center justify-center">
            
            {chapters.map((chapter)=>(
                <Card className="w-full border-amber-300 my-4" key={chapter.chapter_id}>
                <CardHeader>
                    <ChapterTitle addChapterInState={addChapterInState} chapter={chapter} course_id={course_id}/>
                </CardHeader>
    
                <CardContent>
                    {chapter.lessons.length != 0 ? <CourseItems lessons={chapter.lessons}/> : null}
                    {/* <CourseItems lessons={lessons}/> */}
                    <AddNewContent/>
                </CardContent>
    
                <CardFooter className="justify-between">
                    
                    {/* <Button>
                        Save Changes
                    </Button> */}
                </CardFooter>
            </Card>
            ))}
        </div>
      )
    }
    
}

export default ChapterInfo