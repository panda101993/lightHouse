import { ENDUSER_PROFILE_ACTION } from '../action/ActionTypes';

const initialState = {
    
}

export const EndUserProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENDUSER_PROFILE_ACTION:
            return {
                ...state,
                // initialState:action.payload,
                endUserProfileData:action.payload,
                
                

            }
            break
        default: return { ...state }
    }
}