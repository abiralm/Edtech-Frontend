
import { login_api } from "@/api/auth_api";
import { loginReqDataType, loginResDataType } from "@/types/auth_types";
import { create } from "zustand";

interface AuthStore {
    token: string | null;
    login: (loginData: loginReqDataType) => Promise<boolean>; //login and stores values in zustand store
}

const useAuthStore = create<AuthStore>((set)=>({
    token: localStorage.getItem('access_token'),
    
    login: async (loginData: loginReqDataType): Promise<boolean> => {
        try{
            const response:loginResDataType | null = await login_api(loginData)
            if(!response){
                return false
            }
            // set token in local storage
            localStorage.setItem("access_token",response.token)
            //set token in zustand
            set({token:response.token})
            return true
        }catch(err){
            console.log(err)
            return false
        }
    },
    
}))
export default useAuthStore;