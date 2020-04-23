import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ChangePasswordEndUser from '../../components/ChangePasswordEndUser'
import ManageInfoEndUser from '../../components/ManageInfoEndUser'
import MySavedCouponEndUser from '../../components/MySavedCouponEndUser'
import { NavLink ,Link } from 'react-router-dom'
import MyWishlistEndUser from '../../components/MyWishlistEndUser'

// export class SettingEndUser extends Component { 
//     constructor(props) {
//       super(props)
    
//       this.state = {
         
//       }
//     }
    
//     render() {
//         return (
//             <div>
//             <body>
//             <Header />   
//             <section>
//          <div class="container-fluid">
//             <div class="row save-coupon">
//                <div class="col-lg-3 col-sm-12 mb-3">
//                   <div class="manage">
//                      <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//                         {/* <a class="nav-link active _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</a>
//                         <a class="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#Change-Password" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Password</a>
//                         <a class="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#My-Wishlist" role="tab" aria-controls="v-pills-messages" aria-selected="false">My Wishlist</a>
//                         <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#My-Saved-Coupons" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Saved Coupons</a> */}
//                        {/* <Link to='/settingsEndUser/ManageInfoEndUser' class="nav-link active _settings" id="v-pills-home-tab" data-toggle="pill" component= {ManageInfoEndUser}  aria-controls="v-pills-home" aria-selected="true" >Manage General Info </Link>
//                        <Link to='/settingsEndUser/ChangePasswordEndUser' class="nav-link active _settings"   id="v-pills-profile-tab" data-toggle="pill" component ={ChangePasswordEndUser}  aria-controls="v-pills-profile" aria-selected="false" >Change Password </Link>
//                        <Link to='/settingsEndUser/ManageInfoEndUser' class="nav-link active _settings"  component ={ ManageInfoEndUser} >My Wishlist </Link>
//                        <Link to='/settingsEndUser/MySavedCouponEndUser' class="nav-link active _settings"  component ={MySavedCouponEndUser} >My Saved Coupons </Link> */}
//                      </div>
//                   </div>
//                </div>
//                <div class="col-lg-9 col-sm-12">
//                   <div class="tab-content manage_genral" id="v-pills-tabContent"> 

//                   <ManageInfoEndUser />
//                     {/* <ChangePasswordEndUser /> 
//                     <ManageInfoEndUser />
//                    <MySavedCouponEndUser /> */}
                    
                     
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
          


//             <Footer />    
//             </body>
//             </div>
//         )
//     }
// }

// export default SettingEndUser

export class SettingEndUser extends Component {
   render() {
      return (
         <div>
          <body> 
          <Header /> 
          <section>
         <div class="container-fluid">
            <div class="row save-coupon">
               <div class="col-lg-3 col-sm-12 mb-3">
                  <div class="manage">
                     <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</a>
                        <a class="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#Change-Password" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Password</a>
                        <a class="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#My-Wishlist" role="tab" aria-controls="v-pills-messages" aria-selected="false">My Wishlist</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#My-Saved-Coupons" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Saved Coupons</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-sm-12">
                  <div class="tab-content manage_genral" id="v-pills-tabContent">
                     <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                     {/* <ManageInfoEndUser />  */}
                     {/* <MyWishlistEndUser /> */}
                     {/* <ChangePasswordEndUser />  */}
                     <MySavedCouponEndUser />
                     </div>
                    <div class="tab-pane fade" id="Change-Password" role="tabpanel" aria-labelledby="Change-Password-tab"> */}
                    <ChangePasswordEndUser /> 
                     </div>
                     <div class="tab-pane fade" id="My-Wishlist" role="tabpanel" aria-labelledby="My-Wishlist-tab"> 
                          <MyWishlistEndUser />
                     </div>
                     <div class="tab-pane fade" id="My-Saved-Coupons" role="tabpanel" aria-labelledby="My-Saved-Coupons-tab"> 
                         <MySavedCouponEndUser />
                        </div> 
                       
                       
                     
                     </div>
                  </div>
               </div>
            </div>
        
      </section>

          <Footer /> 
          </body>
         </div>
      )
   }
}

export default SettingEndUser
