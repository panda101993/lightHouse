import { RETAILER_PROFILE_ACTION } from '../action/ActionTypes';

const initialState = {
    
    profileData:{
        credit:0,
        shopName:''
    }
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