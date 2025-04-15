import { axiosInstance } from "@/axios/instance"
import { ChapterReqType, ChapterResType, CourseReqType, CourseResType, LessonReqType, LessonResType } from "@/types/instructor_types"


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


export const edit_chapter_api = async (data:ChapterReqType, course_id: string,chapter_id:string): Promise<ChapterResType | null> =>{
    try{
        const response = await axiosInstance.put(`/courses/${course_id}/chapters/${chapter_id}`,data)
        if(response.status==200){
            return response.data
        }
        return null
    }catch(err){
        console.log(err)
        return null
    }
}


export const delete_chapter_api = async ( course_id: string,chapter_id:string) =>{
    try{
        const response = await axiosInstance.delete(`/courses/${course_id}/chapters/${chapter_id}`)
        if(response.status==200){
            return true
        }
        return false
    }catch(err){
        console.log(err)
        return false
    }
}

export const create_lesson_api = async (data:LessonReqType,course_id:string,chapter_id:string): Promise<LessonResType |null> => {
    try{
        const response =await axiosInstance.post(`/courses/${course_id}/chapters/${chapter_id}/lessons`,data)
        if(response.status==200){
            return response.data
        }
        return null
    }catch(err){
        console.log(err)
        return null
    }
}