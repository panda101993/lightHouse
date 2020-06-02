import { FIRSTACTION } from '../action/ActionTypes';


const initialState = {
    initialState:"FIRST"
}

export const FirstReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRSTACTION:
            return {
                ...state,
                initialState:action.payload

            }
        default: return { ...state }
    }
}