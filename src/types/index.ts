
export type CourseType ={
    course_id:string,
    title:string,
    category: string,
    level: string,
    description: string,
    image_url :string
}

export type ChapterType ={
    chapter_id: string,
    title:string,
    description: string,
    order: number,
    lessons: LessonType[]
}

export type LessonType = {
    lesson_id: string, 
    order: number,
    type: string,
    video?: VideoType | undefined,
    pdf?: PDFType | undefined,
    quiz?:QuizType | undefined,
    is_completed?:boolean,
    notes?: string,
    preview?: boolean
  }


  export type VideoType = {
    title: string;
    content_url?: string;
  }
  
  export type PDFType ={
    title: string;
    content_url?: string;
  }
  
  export type QuizType ={
    quiz_id?: string,
    title: string,
    description: string,
    questions?:QuestionType[]
  }

  export type QuestionType = {
    question_id?: string;
    title: string;
    type:string;
    explanation: string;
    answers?:AnswerType[]
  }

  export type AnswerType = {
    answer_id?: string | undefined;
    answer: string;
    is_correct: boolean;
  }

export type mainCourseType = {
    course: CourseType,
    chapters: ChapterType[],
    status: 'draft' | 'published'
}

