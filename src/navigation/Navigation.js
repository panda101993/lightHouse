import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    // Link,
    // Switch,
} from 'react-router-dom'
//Customer screen
import LoginCustomer from '../screens/customer/authentication/LoginCustomer';
import SignupCustomer from '../screens/customer/authentication/SignupCustomer';
import OtpScreenUser from '../screens/customer/authentication/OtpScreenUser';
import ForgotPassword from '../screens/customer/authentication/Forgotpassword';
import ForgotPasswordOtp from '../screens/customer/authentication/ForgotpasswordOtp';
import ResetPassword from '../screens/customer/authentication/Resetpassword';
// import SignupOtp from '../screens/customer/authentication/SignupOtp';
import OTPScreen from '../screens/customer/authentication/Otp';
// import Mywishlist from '../screens/customer/settings/Mywishlist';
import CouponsBySearch from '../screens/customer/couponsBySearch/CouponsBySearch';
//import ForgotpasswordRetailer from '../screens/Retailer/authentication/ForgotpasswordOtpRetailer'; 
import ForgotpasswordRetailer from "../screens/Retailer/authentication/ForgotpasswordRetailer" ;

import Setting_enduser from '../screens/customer/settings/Setting_enduser';

//Retailer screen
import LoginRetailer from '../screens/Retailer/authentication/LoginRetailer';
import SignupRetailer from '../screens/Retailer/authentication/SignupRetailer';
import SignupOtpRetailer from '../screens/Retailer/authentication/SignupOtp';
import Setting_retailer from '../screens/Retailer/settings/Setting_retailer';
import OtpScreenRetailer from '../screens/Retailer/authentication/OtpScreenRetailer';
import ResetpasswordRetailer from '../screens/Retailer/authentication/ResetpasswordRetailer';



import CreateWebpageInitialSignupProcess from '../screens/create_webpage(initial_signup_process)/CreateWebpageInitialSignupProcess';
import NotificationScreens from '../screens/notificationScreens/NotificationScreens';
import NotificationScreensRetailer from '../screens/notificationScreensRetailer/NotificationScreensRetailer';


// import { createBrowserHistory } from 'history';

//settings routes
// import Settings from '../screens/settings/Settings';
// import PasswordUpdate from '../screens/settings/PasswordUpdateForm';
// import ProfileUpdate from '../screens/settings/ProfileUpdateForm';

import LandingScreen from '../screens/dashboard/LandingScreen'
import LandingScreenGuestUser from '../screens/dashboard/LandingScreenGuestUser';
// import SettingEndUser from '../screens/settings/SettingEndUser';
import WebsiteRetailer from '../screens/Retailer/WebsiteRetailer';
import WebsiteMart from '../screens/Retailer/WebsiteMart';
import AllRetailers from '../screens/Retailer/AllRetailers';
import  subCategories  from '../screens/Retailer/subCategories';
import AllCouponsRetailers from '../screens/Retailer/AllCouponsRetailers';
import AllCouponsShare from '../screens/Retailer/AllCouponsShare';
import CouponslistPopup from '../screens/Retailer/CouponslistPopup';
import ItemList from '../screens/Retailer/ItemList';
 
import How_It_Works from "../screens/How_It_Works";
import About from '../screens/About';
import TermsCondition from '../screens/TermsCondition';
import Policy from '../screens/PrivacyPolicy';
import Contact_us from '../screens/Contact_us';
import FAQs from '../screens/FAQs';
import Coupon_template from '../screens/Retailer/Coupon_Template/Coupon_template';
import MyCoupanHistory from '../screens/myCoupanHistory/MyCoupanHistory';
import ManageOnetime from '../screens/Retailer/Manage_Coupons/ManageOnetime';
import CreateCouponform from '../screens/Retailer/Coupon_Template/CreateCouponform';


export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div> 
                    {/* <Route exact path="/" component= {SignupCustomer} /> */} 
                    <Route exact path="/" component= {LandingScreenGuestUser} />
                    <Route exact path="/CreateWebpageInitialSignupProcess" component= {CreateWebpageInitialSignupProcess} />
                    <Route path="/SignupCustomer" component= {SignupCustomer} />
                    <Route  path="/LandingScreen"  component={ LandingScreen } /> 

                    <Route path="/LoginCustomer" component= {LoginCustomer} />
                    <Route path="/OtpScreenUser" component= {OtpScreenUser} />
                    <Route path="/Otp" component= {OTPScreen} />
                    <Route path="/SignupRetailer" component= {SignupRetailer} />
                    <Route path="/LoginRetailer" component= {LoginRetailer} />
                    <Route path='/SignupOtp' component= {SignupOtpRetailer} />
                    <Route path='/OtpScreenRetailer' component= {OtpScreenRetailer} />
                    <Route path='/CouponsBySearch' component= {CouponsBySearch} />
                    {/* settings EndUser */}
                   {/* <Route path="/SettingEndUser"  component ={SettingEndUser } /> */}
                     <Route path='/Setting_enduser' component={Setting_enduser} />
                    {/* <Route path='/settings' component= {Settings} /> */}
                    <Route path="/Setting_retailer" component= {Setting_retailer} />
                 
                    <Route path="/NotificationScreens" component={NotificationScreens} />
                    <Route path="/NotificationScreensRetailer" component={NotificationScreensRetailer} />
                     
                    <Route path="/ForgotpasswordRetailer" component={ForgotpasswordRetailer} />


                    <Route path='/ForgotPassword' component= {ForgotPassword} />  
                     <Route path='/ForgotPasswordOtp' component ={ForgotPasswordOtp} />
                    <Route  path="/WebsiteRetailer" component ={WebsiteRetailer} /> 
                 <Route path="/WebsiteMart" component ={WebsiteMart } /> 
                 <Route path="/AllRetailers" component ={AllRetailers } />
                    
                  <Route path="/subCategories" component ={subCategories} />  
                  <Route path="/AllCouponsRetailers" component={AllCouponsRetailers} />
                  <Route path="/AllCouponsShare" component={AllCouponsShare} /> 
                  <Route path="/CouponslistPopup" component={CouponslistPopup} />
                 
                 <Route path="/ItemList" component={ItemList} /> 

                 <Route path='/How_It_Works' component ={How_It_Works}/>
                    <Route path='/About' component= {About}/>
                    <Route path='/TermsCondition' component={TermsCondition}/>
                    <Route path='/Policy' component= {Policy}/>
                    <Route path='/Contact_us' component= {Contact_us}/>
                    <Route path='/FAQs' component= {FAQs}/>
                  
                  <Route path='/Coupon_template' component={Coupon_template} /> 
                  <Route path='/CreateCouponform/:id' component={CreateCouponform} />  


                  <Route path='/MyCoupanHistory' component={MyCoupanHistory} />  
                  <Route path='/ManageOnetime' component={ManageOnetime} />
                <Route path='/ResetPassword' component={ResetPassword} /> 
                <Route path="/ResetpasswordRetailer" component={ResetpasswordRetailer} />
                
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

