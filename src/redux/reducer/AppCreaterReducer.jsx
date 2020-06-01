import { APP_CREATOR_ACTION} from '../action/ActionTypes';

const initialState = {
    appData:null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_CREATOR_ACTION:
            return {
                ...state,
                appData:action.payload

            }
            case("persist/REHYDRATE"):{
                if(action.payload!=undefined){
                return{
                    ...action.payload.appReducer
                }
            }
            }
        default: return { ...state }
    }
}