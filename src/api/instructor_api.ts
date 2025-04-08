import { axiosInstance } from "@/axios/instance"
import { CourseReqType, CourseResType } from "@/types/instructor_types"


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