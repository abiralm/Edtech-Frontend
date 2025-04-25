import { axiosInstance } from "@/axios/instance"
import { CourseGetResType } from "@/types/course_types"

export const get_course_list_api = async ():Promise<CourseGetResType[] |null>=>{
    try{
        const response = await axiosInstance.get(`/courses`)
        if (response.status==200){
            console.log(response)
            return response.data
        }
        else{
            return null
        }
    }catch(err){
        console.log("Error in fetching course list",err)
        return null
    }
}


