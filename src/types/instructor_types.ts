import { AnswerType, PDFType, QuizType, VideoType } from "."

export type CourseReqType = {
    title: string,
    category: string,
    level: string,
    description: string,
    image_url :string
}


export type CourseResType = {
    course_id : string,
    message: string
}


export type ChapterReqType = {
    title:string,
    description:string,
    order?:number | undefined

}

export type ChapterResType = {
    chapter_id: string,
    message: string
}


export type LessonReqType = {
    type:string,
    order?:number | undefined
    pdf?:PDFType | undefined
    video?:VideoType | undefined
    quiz?: QuizType | undefined
}

export type LessonResType={
    lesson_id:string,
    message:string,
    quiz_id?: string
}


export type QuestionReqType = {
    title: string,
    type: string,
    answers:AnswerType[],
    explanation: string
}

export type QuestionResType = {
    message:string,
    question_id:string,
    answers:AnswerType[],

}

export type QuestionEditReqType = {
    title: string,
    type: string,
    answers:AnswerType[],
    deleted_answer_ids: string[],
    explanation: string
}