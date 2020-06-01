import {combineReducers} from 'redux'

import {FirstReducer} from './FirstReducer'
import {AuthReducer} from './AuthReducer'
import {appReducer} from './AppCreaterReducer'

const RootReducer = combineReducers({
    FirstReducer,AuthReducer,appReducer
})

export default RootReducer;