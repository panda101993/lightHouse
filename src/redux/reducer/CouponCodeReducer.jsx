import { MyCoupon_Data} from '../action/ActionTypes';

const initialState = {
    
}

export const CouponCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MyCoupon_Data:
            return {
                ...state,
                // initialState:action.payload,
                userData:action.payload,
                
                

            }
            break
        default: return { ...state }
    }
}