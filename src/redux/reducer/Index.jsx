
import {combineReducers} from 'redux'
import {CouponCodeReducer} from './CouponCodeReducer'
import {FirstReducer} from './FirstReducer'
import {AuthReducer} from './AuthReducer'
import {appReducer} from './AppCreaterReducer'
import {ProfileDetailsReducer} from './ProfileDetailsReducer'
import {EndUserProfileReducer} from './EndUserProfileReducer';

const RootReducer = combineReducers({
    FirstReducer,AuthReducer,appReducer,CouponCodeReducer,ProfileDetailsReducer,EndUserProfileReducer
})

export default RootReducer;