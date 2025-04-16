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
import LessonList from "./lessonList";

interface ChapterInfoProps {
    chapters: ChapterType[];
    addChapterInState: (chapterData: ChapterType) =>void
    deleteChapterFromState: (chapterData: ChapterType) =>void
    onAddLesson?: (lessonData:LessonType) => void;
    course_id: string
    addLessonToChapters: (lessonData :LessonType,chapter_id:string)=>void
}

const ChapterInfo = ({ chapters, addChapterInState,onAddLesson,deleteChapterFromState, course_id, addLessonToChapters }: ChapterInfoProps) => {


    // const [editing,setEditingLesson] = useState<{
    //     lesson:LessonType,
    //     chapterId:string
    // }>

    if (chapters.length === 0) {
        return null;
    }else{
        return(<div className="flex flex-col items-center justify-center">
            
            {chapters.map((chapter)=>(
                <Card className="w-full border-amber-300 my-4" key={chapter.chapter_id}>
                <CardHeader>
                    <ChapterTitle addChapterInState={addChapterInState} deleteChapterFromState={deleteChapterFromState} chapter={chapter} course_id={course_id}/>
                </CardHeader>
    
                <CardContent>
                    {chapter.lessons.length != 0 ? <div className="space-y-2">
                        {chapter.lessons.map((lesson) => (
                            <LessonList key={lesson.lesson_id} lesson={lesson} addLessonToChapters={addLessonToChapters} chapter_id={chapter.chapter_id} course_id={course_id}/>
                        ))}
                        </div> : null}
                    <AddNewContent addLessonToChapters={addLessonToChapters} chapter_id={chapter.chapter_id} course_id={course_id} order={chapter.lessons?.length}/>
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