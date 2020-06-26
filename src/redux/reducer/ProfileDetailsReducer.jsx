import { RETAILER_PROFILE_ACTION } from '../action/ActionTypes';

const initialState = {
<<<<<<< HEAD
    
=======
    profileData:{
        credit:0
    }
>>>>>>> e73cf6bcb080baa2d6e4a849abe76df3aa93b4f0
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