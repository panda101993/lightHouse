import { ENDUSER_PROFILE_ACTION } from './ActionTypes';
import apiRequest from '../../api/Apirequest';



export const endUserProfileAction = (credential) => dispatch => {
    console.log('endUserProfileAction=>', credential);
   

    // Apirequest({} ,"/user/myProfile", "GET",credential)
    apiRequest(credential, '/user/myProfile', 'GET',credential)
        .then((resp) => {
            console.log('responseheaderforprofile=>',resp);
            // dispatch({ type: LOGIN_ACTION, payload:resp.data.result})
            
            // navigationFunction()
            switch (resp.status) 
            {
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                    dispatch({ type: ENDUSER_PROFILE_ACTION, payload:resp.data.result })
                    
                    }
                    else if(resp.data.responseCode==401)
                    {
                        // console.log("Invalid credentials")
                        alert(resp.data.responseMessage)
                    }
                    else if(resp.data.responseCode==402)
                    {
                        // console.log("Invalid credentials")
                        alert(resp.data.responseMessage)
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






