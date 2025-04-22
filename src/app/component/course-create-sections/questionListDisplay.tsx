import { QuestionType } from '@/types'
import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import QuizQuestionsForm from './quizQuestionsForm'
import { delete_question_api } from '@/api/instructor_api'

interface QuestionListProps {
    question: QuestionType
    addQuestions: (questionData: QuestionType) => void,
    deleteQuestions: (question_id: string) => void;
    quiz_id: string
}

const QuestionListDisplay = ({ question, addQuestions, quiz_id, deleteQuestions }: QuestionListProps) => {

    const [showEditForm, setShowEditForm] = useState(false)

    const toggleEditForm = () => {
        setShowEditForm(!showEditForm)
    }
    if (showEditForm) {
        return (
            <QuizQuestionsForm toggleQuizQuestions={toggleEditForm} addQuestions={addQuestions} quiz_id={quiz_id} question={question} />
        )
    }

    const handleQuestionDelete = async () => {
        if (question.question_id) {
            try {
                const response = await delete_question_api(quiz_id, question.question_id)
                if (response) {
                    deleteQuestions(question.question_id)
                }
            }catch(err){
                console.log("Error in deletion",err)
            }
        }
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
                    <MdDelete onClick={handleQuestionDelete} />
                </div>
            </div>
            {/* ))} */}
        </>
    )
}

export default QuestionListDisplay
