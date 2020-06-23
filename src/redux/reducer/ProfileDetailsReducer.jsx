import { RETAILER_PROFILE_ACTION } from '../action/ActionTypes';

const initialState = {
    
}
export const ProfileDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RETAILER_PROFILE_ACTION:
            return {
                ...state,
                profileData:action.payload,
                
            }
        break


        default: return { ...state }
    }
}