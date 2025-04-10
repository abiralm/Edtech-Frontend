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
    order:number | undefined

}

export type ChapterResType = {
    chapter_id: string,
    message: string
}