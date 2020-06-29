import { RETAILER_PROFILE_ACTION } from './ActionTypes';
import Apirequest from "../../api/Apirequest";



export const retailerProfileAction = (credential) => dispatch => {
    console.log('SHOW_BIG_MARKER=>', credential);
   

    Apirequest(credential, "/retailer/profile", "GET",credential)
        .then((resp) => {
            console.log('/retailer/profile===>',resp);
            // dispatch({ type: LOGIN_ACTION, payload:resp.data.result})
            
            // navigationFunction()
            switch (resp.status) 
            {
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                    dispatch({ type: RETAILER_PROFILE_ACTION, payload:resp.data.result })
                    
                    }
                    else if(resp.data.responseCode==402)
                    {
                        // console.log("Invalid credentials")
                        alert("Invalid credentials")
                    }
                }
                    break
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






