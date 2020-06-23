import {combineReducers} from 'redux'
import {CouponCodeReducer} from './CouponCodeReducer'
import {FirstReducer} from './FirstReducer'
import {AuthReducer} from './AuthReducer'
import {appReducer} from './AppCreaterReducer'

const RootReducer = combineReducers({
    FirstReducer,AuthReducer,appReducer,CouponCodeReducer
})

export default RootReducer;