export type ChapterCreateType = {
    title: string,
    description: string,
    // order:number| null

}

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
    video: VideoType | undefined,
    pdf: PDFType | undefined,
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
  }

export type mainCourseType = {
    course: CourseType,
    chapters: ChapterType[],
    status: 'draft' | 'published'
}