import { LessonType } from '@/types'
import React, { useState } from 'react'
import { FaVideo, FaFilePdf } from 'react-icons/fa'
import { MdQuiz, MdEdit } from 'react-icons/md'
import PdfForm from './pdfForm'
import QuizQuestionsForm from './quizQuestionsForm'
import { Button } from '@/components/ui/button'
import VideoForm from './videoForm'
import QuizForm from './quizForm'


interface LessonListProps {
    lesson: LessonType
    addLessonToChapters: (lessonData :LessonType,chapter_id:string)=>void
    chapter_id: string
    course_id: string
}

const LessonList = ({lesson, addLessonToChapters, chapter_id, course_id}: LessonListProps) => {

    const [showQuizQuestions,setshowQuizQuestions] =useState<boolean>(true);

    const [showEditLesson, setShowEditLesson] = useState(false)

    const toggleEditLessonForm = () =>{
        setShowEditLesson(!showEditLesson)
    }

    const Quizfunction = ()=>{
        // toggleForm()
        console.log(showQuizQuestions)
        setshowQuizQuestions(!showQuizQuestions)
    }

    if(showEditLesson){
        switch (lesson.type){
            case "pdf":
                return(
                    <PdfForm lesson={lesson} toggleForm={toggleEditLessonForm} showAddLessonForm={false} addLessonToChapters={addLessonToChapters} chapter_id={chapter_id} course_id={course_id} order={lesson.order}/>
                )
            
            case "video":
                return(
                    <VideoForm lesson={lesson} toggleForm={toggleEditLessonForm} showAddLessonForm={false} addLessonToChapters={addLessonToChapters} chapter_id={chapter_id} course_id={course_id} order={lesson.order}/>
                )

            case "quiz":
                return(
                    <QuizForm lesson={lesson} toggleForm={toggleEditLessonForm} showAddLessonForm={false} addLessonToChapters={addLessonToChapters} chapter_id={chapter_id} course_id={course_id} order={lesson.order}/>
                )
        }
        
    }

  return (
    <div className='bg-[#F9FAFB] p-3 rounded-md'>
        <div 
            key={lesson.lesson_id} 
            className="flex gap-2 justify-between items-center"
        >
            <div className="flex gap-2 items-center">
            {lesson.type === "video" ? (
                <FaVideo />
            ) : lesson.type === "pdf" ? (
                <FaFilePdf />
            ) : lesson.type === "quiz" ? (
                <MdQuiz />
            ) : null}
            <p>
                {lesson.type === "video"
                    ? (lesson.video?.title || "Untitled Video")
                    : lesson.type === "pdf"
                    ? (lesson.pdf?.title || "Untitled PDF")
                    : lesson.type === "quiz"
                    ? (lesson.quiz?.title || "Untitled Quiz")
                    : "Untitled Lesson"}
            </p>
            </div>
            <div className="flex gap-2 items-center">
            1:00
            <MdEdit className="text-md cursor-pointer" 
                onClick={toggleEditLessonForm}
            />
            {/* <SlOptionsVertical 
                className="text-md cursor-pointer" 
                onClick={() => console.log("Options clicked for lesson:", lesson.lesson_id)}
            /> */}
            </div>
        </div>
        {lesson.type == 'quiz' && (showQuizQuestions? <QuizQuestionsForm showQuizQuestions={showQuizQuestions} toggleQuizQuestions={Quizfunction}/>:<Button onClick={Quizfunction}>Add Question</Button>)}
    </div>
  )
}

export default LessonList