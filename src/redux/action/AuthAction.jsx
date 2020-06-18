import { LOGIN_ACTION, SIGNUP_ACTION, MyCoupon_Data } from './ActionTypes';
import Apirequest from "../../api/Apirequest";



export const loginAction = (credential,navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>', credential);
    console.log('navigationFunction=>', navigationFunction);

    Apirequest(credential, "/user/login", "POST")
        .then((resp) => {
            console.log('respresp===>',resp);
            dispatch({ type: LOGIN_ACTION, payload:resp.data.result})
            
            // navigationFunction()
            switch (resp.status) 
            {
                
                
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                    dispatch({ type: LOGIN_ACTION, payload:resp.data.result })
                    navigationFunction()
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
// export const logoutAction = (credential,navigationFunction) => dispatch => {
//                     dispatch({ type: "Logout", payload:false })
//                     navigationFunction()
// }



export const signupAction = (credential, navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>Signup', credential);

    Apirequest(credential, "/user/signUp", "POST")
        .then((resp) => {
            dispatch({ type: SIGNUP_ACTION, payload: credential })

            switch (resp.status) {
                
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                        dispatch({ type: SIGNUP_ACTION, payload: credential })
                    navigationFunction()
                    }
                    else if(resp.data.responseCode==404)
                    {
                        // console.log("Invalid credentials")
                        alert("This Email/Mobile number already exists")
                    }
                }
                    break
                default: {
                    alert(resp.data.error)
                }
            }
            console.log("respppp-->",resp)
        }
        )

}


export const loginActionRetailer = (credential,navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>', credential);
    // console.log('navigationFunction=>', navigationFunction);

    Apirequest(credential, "/retailer/login", "POST")
        .then((resp) => {
            console.log('respresp===>',resp);
            dispatch({ type: LOGIN_ACTION, payload:resp.data.result})
            
            // navigationFunction()
            switch (resp.status) 
            {
                
                
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                    dispatch({ type: LOGIN_ACTION, payload:resp.data.result })
                    navigationFunction()
                    }
                    else if(resp.data.responseCode==404)
                    {
                        // console.log("Invalid credentials")
                        alert("No data found")
                    }
                    else if(resp.data.responseCode==500)
                    {
                        // console.log("Invalid credentials")
                        alert("Internal Server Error")
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

export const signupActionRetailer = (credential, navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>Signup', credential);

    Apirequest(credential, "/retailer/signUp", "POST")
        .then((resp) => {
            dispatch({ type: SIGNUP_ACTION, payload: credential })

            switch (resp.status) {
                
                case (200): {
                    // console.log("responseCode",resp.data.responseCode)
                    if(resp.data.responseCode==200)
                    {
                        dispatch({ type: SIGNUP_ACTION, payload: credential })
                    navigationFunction()
                    }
                    else if(resp.data.responseCode==404)
                    {
                        // console.log("Invalid credentials")
                        alert("This Email/Mobile number already exists")
                    }
                }
                    break
                default: {
                    alert(resp.data.error)
                }
            }
            console.log("respppp-->",resp)
        }
        )

}


// export const completeSignupAction = (profileDetail, navigationFunction) => dispatch => {
//     console.log('SHOW_BIG_MARKER=>completeSignupProfile', profileDetail);

//     Apirequest(profileDetail, "CompleteYourProfile", "POST")
//         .then((resp) =>{
//             console.log("signupResponse", resp)
//             switch (resp.status) {
//                 case (200): {
//                     dispatch({ type: SIGNUP_ACTION,})
//                     navigationFunction()
//                 }
//                     break
//                 default: {
//                     alert("Something went wrong!")
//                 }
//             }
//         }
//         )
//     // dispatch({ type: SIGNUP_ACTION, payload: profileDetail })
// }


// export const forgotPasswordAction = (profileDetail, navigationFunction) => dispatch => {
//     console.log('SHOW_BIG_MARKER=>forgotPasswordAction', profileDetail);

//     Apirequest(profileDetail, "forgot", "GET")
//         .then((resp) =>
//             console.log("signupResponse", resp))
//         //     switch (resp.data.Code) {
//         //         case ("200"): {
//         //             dispatch({ type: SIGNUP_ACTION, payload: credential })
//                     navigationFunction()
//         //         }
//         //             break
//         //         default: {
//         //             alert("Something went wrong!")
//         //         }
//         //     }
//         // }

//     dispatch({ type: SIGNUP_ACTION, payload: profileDetail })
// }

// export const forgotOTPAction = (profileDetail, navigationFunction) => dispatch => {
//     console.log('SHOW_BIG_MARKER=>forgotOTPAction', profileDetail);

//     Apirequest(profileDetail, "forgot", "GET")
//         .then((resp) =>
//             console.log("signupResponse", resp))
//         //     switch (resp.data.Code) {
//         //         case ("200"): {
//         //             dispatch({ type: SIGNUP_ACTION, payload: credential })
//                     navigationFunction()
//         //         }
//         //             break
//         //         default: {
//         //             alert("Something went wrong!")
//         //         }
//         //     }
//         // }

//     dispatch({ type: SIGNUP_ACTION, payload: profileDetail })
// }

// export const ResetPasswordAction = (resetDetail, navigationFunction) => dispatch => {
//     console.log('SHOW_BIG_MARKER=>ResetPasswordAction', resetDetail);

//     Apirequest(resetDetail, "forgot", "GET")
//         .then((resp) =>
//             console.log("signupResponse", resp))
//         //     switch (resp.data.Code) {
//         //         case ("200"): {
//         //             dispatch({ type: SIGNUP_ACTION, payload: credential })
//                     navigationFunction()
//         //         }
//         //             break
//         //         default: {
//         //             alert("Something went wrong!")
//         //         }
//         //     }
//         // }

//     dispatch({ type: SIGNUP_ACTION, payload: resetDetail })
// }