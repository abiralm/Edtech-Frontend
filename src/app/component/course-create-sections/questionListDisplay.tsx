import { QuestionType } from '@/types'
import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import QuizQuestionsForm from './quizQuestionsForm'

interface QuestionListProps {
  question: QuestionType
  addQuestions: (questionData:QuestionType)=>void
  quiz_id: string
}

const QuestionListDisplay = ({ question, addQuestions, quiz_id }: QuestionListProps) => {

    const [showEditForm, setShowEditForm] = useState(false)

    const toggleEditForm = ()=>{
        setShowEditForm(!showEditForm)
    }
    if(showEditForm){
        return(
            <QuizQuestionsForm toggleQuizQuestions={toggleEditForm} addQuestions={addQuestions} quiz_id={quiz_id} question={question}/>
        )
    }

return (
<>
    {/* {questionList.map((question, index) => ( */}
    <div
    className='flex justify-between items-center border-2 p-2 my-3 gap-4 rounded-xl'
    >
        <div className='flex flex-col'>
            <p>{question.title}</p>
        </div>

        <div className='flex gap-4'>
            <MdEdit onClick={toggleEditForm} />
            <MdDelete onClick={() => console.log('Delete clicked', question)} />
        </div>
    </div>
    {/* ))} */}
</>
)
}

export default QuestionListDisplay
