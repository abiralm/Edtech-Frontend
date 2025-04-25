import axios from "axios"
import { loginReqDataType, loginResDataType } from "@/types/auth_types"

export const login_api = async(data:loginReqDataType) : Promise<loginResDataType | null>=>{
    try{
        axios.defaults.baseURL = process.env.BASE_URL;

        const response = await axios.post("/auth/login",data)
        if(response.status==200){
            return response.data
        }
        return null
    }catch(err){
        console.log(err)
        return null
    }
}


