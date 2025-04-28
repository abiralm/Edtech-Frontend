export type CourseGetResType = {
    course_id:string,
    status:"draft" | "published",
    title:string
}

export type CourseGridType={
    course_id:string,
    category:string,
    title:string,
    instructor_name:string,
    price:string,
    rating:string,
    image:string,
    progressPercent?:string
}

export type CourseListType={
    data:CourseGridType[],
    page:string,
    size:string,
    total_count:number
} 