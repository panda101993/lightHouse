import { LOGIN_ACTION ,SIGNUP_ACTION} from '../action/ActionTypes';


const initialState = {
    isLoggedIn:false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                isLoggedIn:true,
                userData:action.payload

            }
        break
        case("Logout"):{
            return {
                ...state,
                isLoggedIn:false,
                userData:{}

            }
        }
        case SIGNUP_ACTION:{
            return{...state,
                tempUserData:action.payload
            }
        }
        case("persist/REHYDRATE"):{
            if(action.payload!=undefined){
            return{
                ...action.payload.AuthReducer
            }
            }
        }
        default: return { ...state }
    }
}