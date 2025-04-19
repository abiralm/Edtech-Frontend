import { LessonType, QuestionType } from '@/types'
import React, { useState } from 'react'
import { FaVideo, FaFilePdf } from 'react-icons/fa'
import { MdQuiz, MdEdit } from 'react-icons/md'
import PdfForm from './pdfForm'
import QuizQuestionsForm from './quizQuestionsForm'
import { Button } from '@/components/ui/button'
import VideoForm from './videoForm'
import QuizForm from './quizForm'
import QuestionListDisplay from './questionListDisplay'


interface LessonListProps {
    lesson: LessonType
    addLessonToChapters: (lessonData :LessonType,chapter_id:string)=>void
    chapter_id: string
    course_id: string
}

const LessonList = ({lesson, addLessonToChapters, chapter_id, course_id}: LessonListProps) => {
    const [showQuizQuestions,setshowQuizQuestions] =useState<boolean>(true);
    const [questionList,setQuestionList] = useState<QuestionType[]>([]);
    const [showEditLesson, setShowEditLesson] = useState(false)

    const toggleEditLessonForm = () =>{
        setShowEditLesson(!showEditLesson)
    }

    const Quizfunction = ()=>{
        // toggleForm()
        console.log(showQuizQuestions)
        setshowQuizQuestions(!showQuizQuestions)
    }

    //this functionlaity need to be modified - update
    const addQuestions = (questionData:QuestionType)=>{
        // setQuestionList(prev=>[...prev,questionData])

        setQuestionList((prev)=>{
            const questionIndex = prev.findIndex((q)=>q.question_id==questionData.question_id)

            if (questionIndex >=0){
                const updatedList = [...prev];
                updatedList[questionIndex] = questionData;
                return updatedList;
            } else {
                return [...prev, questionData];
            }
        })
        
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

        {questionList.length>0 ? questionList.map((question, index)=>(lesson.quiz?.quiz_id && <div key={index}><QuestionListDisplay question={question} addQuestions={addQuestions} quiz_id={lesson.quiz?.quiz_id}/></div>)):<></>}
        {lesson.type == 'quiz' && ((showQuizQuestions && lesson.quiz?.quiz_id) ? 
        <QuizQuestionsForm toggleQuizQuestions={Quizfunction} addQuestions={addQuestions} quiz_id={lesson.quiz?.quiz_id}/>
        :
        <Button onClick={Quizfunction}>Add Question</Button>)}
    </div>
  )
}

export default LessonList