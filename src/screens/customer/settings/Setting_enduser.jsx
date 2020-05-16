
import React, { Component } from 'react'
import Header2 from '../../../components/Header2'
import Footer from '../../../components/Footer'
import { Switch, Route, Link  ,NavLink} from "react-router-dom" 
import ManageInfoEndUser from '../../../components/ManageInfoEndUser';
import ChangePasswordEndUser from '../../../components/ChangePasswordEndUser';
import MyWishlistEndUser from '../../../components/MyWishlistEndUser';
import MySavedCouponEndUser from '../../../components/MySavedCouponEndUser';
import Header4 from '../../../components/Header4';
import ManageInfostep2 from '../../../components/ManageInfostep2';

const ManageGeneralInfoUser = () => 
<div>
    {/* <ManageInfoEndUser />  */}
    <ManageInfostep2  /> 
  
</div>;

const ChangePasswordUser = () => 
<div>
    <ChangePasswordEndUser />
</div>;


const MyWishListUser = () => 
<div>
   <MyWishlistEndUser />
</div>


const MysavedCoupon = () =>
    <div>
       <MySavedCouponEndUser />
    </div>


class componentName extends Component { 
   constructor(props) {
     super(props)
   
     this.state = {
        UnActiveClass:"nav-link _settings"
     }
   }
   
   
  render()  
  {  const { path } = this.props.match;
    return (
      <div> <body> 
           {/* <Header2 />  */}
           <Header4 />
           <section>
         <div class="container-fluid">
            <div class="row save-coupon">
               <div class="col-lg-3 col-sm-12 mb-3">
                  <div class="manage">
                     <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     <NavLink to={`${path}/`} className="nav-link _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</NavLink>
                     <NavLink to={`${path}/ChangePasswordUser`}  className="nav-link _settings"  id="v-pills-profile-tab" data-toggle="pill" href="#Change-Password" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Password </NavLink>
                     <NavLink to={`${path}/MyWishListUser`}  className="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#My-Wishlist" role="tab" aria-controls="v-pills-messages" aria-selected="false">My Wishlist </NavLink>
                     <NavLink to={`${path}/MysavedCoupon`}    className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#My-Saved-Coupons" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Saved Coupons </NavLink>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-sm-12">
                  <div class="tab-content manage_genral" id="v-pills-tabContent">
                     {/* <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                     <ManageInfoEndUser />  
                     </div>
                    <div class="tab-pane fade" id="Change-Password" role="tabpanel" aria-labelledby="Change-Password-tab"> 
                    <ChangePasswordEndUser /> 
                     </div>
                     <div class="tab-pane fade" id="My-Wishlist" role="tabpanel" aria-labelledby="My-Wishlist-tab"> 
                          <MyWishlistEndUser />
                     </div>
                     <div class="tab-pane fade" id="My-Saved-Coupons" role="tabpanel" aria-labelledby="My-Saved-Coupons-tab"> 
                         <MySavedCouponEndUser />
                        </div>  */} 
                                    <Switch>
                                          
                                            <Route path={`${path}/`} exact component={ManageGeneralInfoUser} />
                                            <Route path={`${path}/ManageGeneralInfoUser`} exact component={ManageGeneralInfoUser} />
                                            <Route path={`${path}/ChangePasswordUser`} component={ChangePasswordUser} /> 
                                            <Route path={`${path}/MyWishListUser`} component={MyWishListUser} />
                                            <Route path={`${path}/MysavedCoupon`} component={MysavedCoupon} />
                                           
                                        </Switch>
                       
                       
                     
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

export default componentName
