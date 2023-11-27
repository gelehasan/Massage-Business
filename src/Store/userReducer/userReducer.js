


const InitialUserState={
    currentUser:null
}

const userTypes={
    setCurrentUser:"setCurrentUser"
}

export const userReducer = (state=InitialUserState, action)=>{

    const {type,payload}= action;

    switch(type){
        case userTypes.setCurrentUser:
            return{...state, currentUser:payload}
        
        default:
            return state
    }
}