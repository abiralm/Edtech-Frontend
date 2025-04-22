import { axiosInstance } from "@/axios/instance"

export const get_course_list_api = async ()=>{
    try{
        const response = await axiosInstance.get(`/courses`)
        if (response.status==200){
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