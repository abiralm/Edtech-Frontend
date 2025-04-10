import { axiosInstance } from "@/axios/instance"
import { ChapterReqType, ChapterResType, CourseReqType, CourseResType } from "@/types/instructor_types"


export const create_course_api = async (data:CourseReqType): Promise<CourseResType | null> =>{
    try{
        const response = await axiosInstance.post ("/courses",data)
        if(response.status==200){
            return response.data
        }
        return null
    }catch (err){
        console.log(err)
        return null
    }
}

export const create_chapter_api = async (data:ChapterReqType, course_id: string): Promise<ChapterResType | null> =>{
    try{
        const response = await axiosInstance.post (`/courses/${course_id}/chapters`,data)
        if(response.status==200){
            return response.data
        }
        return null
    }catch (err){
        console.log(err)
        return null
    }
}