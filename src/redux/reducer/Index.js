import {combineReducers} from 'redux'
import {InitialReducer} from './InitialReducer'

const RootReducer = combineReducers({
    InitialReducer,
})

export default RootReducer;