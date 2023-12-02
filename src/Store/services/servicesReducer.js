
const intialServiceData={
    isServiceLoading:true,
    Services:[]
}

export const serviceTypes={
    setLoadingState: "setLoadingState",
    setService:"setService" 
}



export const serviceReducer = (state=intialServiceData, action)=>{
    const {type,payload}= action;

    switch(type){
        case serviceTypes.setLoadingState:
            return {...state, isServiceLoading:payload}
        case serviceTypes.setService:
            return {...state, Services:payload}

        default:
            return state;
        }

}