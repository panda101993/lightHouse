import {JUST_ACTION} from '../action/ActionTypes';


const initialState={
    name:"project",
}

export const InitialReducer = (state=initialState, action)=>{
    console.log("asdfadsf",action)
    switch(action.type){
        case(JUST_ACTION):{
            return {name:action.payload}
            break 
        }
        case 'persist/REHYDRATE':
            if(action.payload){
                return {
                    ...action.payload.InitialReducer,
                    }
            }
            else{
                return{...state
                }
            }

        default :   
            return {...state}
    }
}