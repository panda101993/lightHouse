import { MyCoupon_Data } from './ActionTypes';
import Apirequest from "../../api/Apirequest";

export const myCouponData = (credential) => dispatch => {
    // console.log('SHOW_BIG_MARKER=>', credential);
    // console.log('navigationFunction=>', navigationFunction);

    Apirequest(credential, "/user/getRetailerAndCouponByMart", "POST")
        .then((resp) => {
            // console.log('resprespMart===>',resp);
            dispatch({ type: MyCoupon_Data, payload:resp.data.Data})
            
            // navigationFunction()
            switch (resp.status) 
            {              
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                    dispatch({ type: MyCoupon_Data, payload:resp.data.Data })
                    // navigationFunction()
                    }
                    else if(resp.data.responseCode==402)
                    {
                        // console.log("Invalid credentials")
                        alert("Invalid credentials")
                    }
                }
                    break;
                default: {
                    alert(resp.data.error)
                }
            }
        }
        )
        .catch(err => {
            console.log("respresp---", err)
        }
        )
}