import {JUST_ACTION} from './ActionTypes';

export const just_action =item=>dispatch=>{
    console.log("actionclicked")
    var pay=item=="Changed1"?"Project1":"Changed1"
    dispatch({type:JUST_ACTION, payload:pay })
}