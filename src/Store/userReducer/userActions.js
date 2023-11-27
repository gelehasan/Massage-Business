import { userTypes } from "./userReducer"

export const setUser = (userData)=>{

    return {type:userTypes.setCurrentUser, payload:userData}
}