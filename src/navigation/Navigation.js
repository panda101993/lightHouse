import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch,
} from 'react-router-dom'
//Customer screen
import LoginCustomer from '../screens/customer/authentication/LoginCustomer';
import SignupCustomer from '../screens/customer/authentication/SignupCustomer';
import OtpScreenUser from '../screens/customer/authentication/OtpScreenUser';
import ForgotPassword from '../screens/customer/authentication/Forgotpassword';
import ForgotPasswordOtp from '../screens/customer/authentication/ForgotpasswordOtp';
import ResetPassword from '../screens/customer/authentication/Resetpassword';
import SignupOtp from '../screens/customer/authentication/SignupOtp';
import OTPScreen from '../screens/customer/authentication/Otp';
import Mywishlist from '../screens/customer/settings/Mywishlist';
import ForgotpasswordRetailer from '../screens/Retailer/authentication/ForgotpasswordOtpRetailer';

//Retailer screen
import LoginRetailer from '../screens/Retailer/authentication/LoginRetailer';
import SignupRetailer from '../screens/Retailer/authentication/SignupRetailer';
import SignupOtpRetailer from '../screens/Retailer/authentication/SignupOtp';
import Setting_retailer from '../screens/Retailer/settings/Setting_retailer';
import OtpScreenRetailer from '../screens/Retailer/authentication/OtpScreenRetailer';
import Create_webpage from '../screens/Retailer/dashboard/Create_webpage';


import CreateWebpageInitialSignupProcess from '../screens/create_webpage(initial_signup_process)/CreateWebpageInitialSignupProcess';
import NotificationScreens from '../screens/notificationScreens/NotificationScreens';
import NotificationScreensRetailer from '../screens/notificationScreensRetailer/NotificationScreensRetailer';


import { createBrowserHistory } from 'history';

//settings routes
import Settings from '../screens/settings/Settings';
import PasswordUpdate from '../screens/settings/PasswordUpdateForm';
import ProfileUpdate from '../screens/settings/ProfileUpdateForm';

import LandingScreen from '../screens/dashboard/LandingScreen'
import SettingEndUser from '../screens/settings/SettingEndUser';
import WebsiteRetailer from '../screens/Retailer/WebsiteRetailer';
import WebsiteMart from '../screens/Retailer/WebsiteMart';
import AllRetailers from '../screens/Retailer/AllRetailers';
import  subCategories  from '../screens/Retailer/subCategories';
import AllCouponsRetailers from '../screens/Retailer/AllCouponsRetailers';
import AllCouponsShare from '../screens/Retailer/AllCouponsShare';
import CouponslistPopup from '../screens/Retailer/CouponslistPopup';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div> 
                   {/* <Route exact path='/' component= {Create_webpage} /> */}
                    {/* <Route exact path="/" component= {SignupCustomer} /> */} 
                    <Route exact path="/" component= {CreateWebpageInitialSignupProcess} />
                    <Route path="/SignupCustomer" component= {SignupCustomer} />
                    <Route  path="/LandingScreen"  component={ LandingScreen } /> 

                    <Route path="/LoginCustomer" component= {LoginCustomer} />
                    <Route path="/OtpScreenUser" component= {OtpScreenUser} />
                    <Route path="/Otp" component= {OTPScreen} />

                    <Route path="/SignupRetailer" component= {SignupRetailer} />
                    <Route path="/LoginRetailer" component= {LoginRetailer} />
                    <Route path='/SignupOtp' component= {SignupOtpRetailer} />
                    <Route path='/OtpScreenRetailer' component= {OtpScreenRetailer} />
                    
                    {/* settings EndUser */}
                   <Route path="/SettingEndUser"  component ={SettingEndUser } />

                    <Route path='/settings' component= {Settings} />
                    <Route path="/Setting_retailer" component= {Setting_retailer} />
                 
                    <Route path="/NotificationScreens" component={NotificationScreens} />
                    <Route path="/NotificationScreensRetailer" component={NotificationScreensRetailer} />
                   
                    <Route path='/ForgotPassword' component= {ForgotPassword} />  

                    <Route  path="/WebsiteRetailer" component ={WebsiteRetailer} /> 
                 <Route path="/WebsiteMart" component ={WebsiteMart } /> 
                 <Route path="/AllRetailers" component ={AllRetailers } />
                    
                  <Route path="/subCategories" component ={subCategories} />  
                  <Route path="/AllCouponsRetailers" component={AllCouponsRetailers} />
                  <Route path="/AllCouponsShare" component={AllCouponsShare} /> 
                  <Route path="/CouponslistPopup" component={CouponslistPopup} />

                </div>
            </Router>
        )
    }

}

// var history = createBrowserHistory();

// function App() {
//   return (

// <Router history={history}>
// <BrowserRouter>
{/* <Switch> */ }
{/* <Signup/> */ }
{/* <OTPScreen/> */ }
{/* <Create_webpage/> */ }
{/* <Setting_retailer/> */ }
{/* <SignupOtp/> */ }
{/* <ForgotPasswordOtp/> */ }
{/* <SignupRetailer/> */ }
{/* <Settings/> */ }
{/* <Navigation/> */ }

{/* <Route path='/PasswordUpdateForm' component={PasswordUpdate} /> */ }
{/* <Route path='/ProfileUpdateForm' component={ProfileUpdate} /> */ }


{/* </Switch>  */ }
//   </BrowserRouter>
// </Router>
//   );
// }

export const SettingsRoutes = [
    {
        layout: '/settings',
        path: '/change-password',
        name: 'Change Passowrd',
        Component: PasswordUpdate,

    },
    {
        layout: '/settings',
        path: '/update-profile',
        name: 'Update Profile',
        Component: ProfileUpdate,
    }
]