import { axiosInstance } from "@/axios/instance"
import { loginReqDataType, loginResDataType } from "@/types/auth_types"

export const login_api = async(data:loginReqDataType) : Promise<loginResDataType | null>=>{
    try{
        const response = await axiosInstance.post("/auth/login",data)
        if(response.status==200){
            return response.data
        }
        return null
    }catch(err){
        console.log(err)
        return null
    }
}


