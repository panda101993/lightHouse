// akhtar code here 
import React, { Component } from 'react'
import Header2 from "../../../components/Header2"
import Footer from "../../../components/Footer";
import CreateWebpage from "../../../components/CreateWebpage";
import ChangePasswordEndUser from "../../../components/ChangePasswordEndUser";
import ManageInfoRetailer from "../../../components/ManageInfoRetailer";
import ReferralCodeRetailer from "../../../components/ReferralCodeRetailer";
import CreditRetailer from "../../../components/CreditRetailer";
import CreditHistoryRetailer from "../../../components/CreditHistoryRetailer";
import RechargeRetailer from "../../../components/RechargeRetailer";
import RechargeHistoryRetailer from "../../../components/RechargeHistoryRetailer";
import CoupanViewHistoryRetailer from "../../../components/CoupanViewHistoryRetailer";
import PreviewWebpageRetailer from "../../../components/PreviewWebpageRetailer";
// import SidebarRetailer from "../../../components/SidebarRetailer";
import { Switch, Route, NavLink  ,Link} from "react-router-dom";
import Step2_retailer from '../../../components/Step2_retailer';



const ManageGeneralInfo = () => 
<div>
    {/* <ManageInfoRetailer />  */}
    <Step2_retailer /> 
    
</div>;


const MyReferralCode = () => 
<div>
    <ReferralCodeRetailer />
</div>;


const ChangePassword = () => 
<div>
    <ChangePasswordEndUser />
</div>;


const ManageWebpage = () => 
<div>
    <CreateWebpage /> 
    {/* <PreviewWebpageRetailer /> */}
</div>

const MyCredits = () => 
<div>
    <CreditRetailer />
</div>


const MyCreditHistory = () => 
<div>
    <CreditHistoryRetailer />
</div>


const Recharge = () => 
<div>
    <RechargeRetailer />
</div>

const MyRechargeHistory = () => 
<div>
    <RechargeHistoryRetailer />
</div>

const CouponViewHistory = () => 
<div>
    <CoupanViewHistoryRetailer />
</div>

const Preview = () =>
    <div>
        <PreviewWebpageRetailer />
    </div>;

export default class Setting_retailer extends Component { 
  
    
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <body>
                    <Header2 />
                    <section>
                        <div class="container-fluid">
                            <div class="coupn-setting my-5">
                                <ul>
                                    <li> 
                                    
                                        <Link to="/Coupon_template" > Create Coupon</Link> </li>
                                           
                                    <li ><Link to="/MyCoupanHistory" >Manage Coupons</Link></li>
                                    <li><Link to='/ManageOnetime'>Single Use Coupon</Link></li>
                                    <li><Link to={`${path}/ManageGeneralInfo`} class="active" href="77-settings-retailer.html">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="container-fluid">
                            <div class="row save-coupon">
                                {/* <SidebarRetailer /> */}
                                <div class="col-lg-3 col-sm-12 mb-3">
                                    <div class="manage">
                                        <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <NavLink to={`${path}/`} className="nav-link _settings" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">Manage General Info</NavLink>
                                            <NavLink to={`${path}/MyReferralCode`} className="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-referral" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Referral Code</NavLink>
                                            <NavLink to={`${path}/ChangePassword`} className="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</NavLink>
                                            <NavLink to={`${path}/ManageWebpage`} className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false">Manage Webpage</NavLink>
                                            <NavLink to={`${path}/MyCredits`} className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-credits" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Credits</NavLink>
                                            <NavLink to={`${path}/MyCreditHistory`} className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-earned" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Credit History</NavLink>
                                            <NavLink to={`${path}/Recharge`} className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-recharge" role="tab" aria-controls="v-pills-settings" aria-selected="false">Recharge</NavLink>
                                            <NavLink to={`${path}/MyRechargeHistory`} className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-history" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Recharge  History</NavLink>
                                            <NavLink to={`${path}/CouponViewHistory`} className="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-coupon" role="tab" aria-controls="v-pills-settings" aria-selected="false">Coupon View History</NavLink>
                                        </div>
                                    </div>
                                </div>



                                {/* ---------- */}
                                <div class="col-lg-9 col-sm-12">
                                    <div class="tab-content manage_genral" id="v-pills-tabContent">
                                        <Switch>
                                            <Route exact={true} path={`${path}/`}  component={ManageGeneralInfo} />
                                            <Route  exact={true} path={`${path}/ManageGeneralInfo`} exact component={ManageGeneralInfo} />
                                            <Route  exact={true} path={`${path}/Step2_retailer`} component={Step2_retailer} />
                                            <Route  exact={true} path={`${path}/MyReferralCode`} component={MyReferralCode} />
                                            <Route  exact={true} path={`${path}/ChangePassword`} component={ChangePassword} />
                                            <Route  exact={true} path={`${path}/ManageWebpage`} component={ManageWebpage} />
                                            <Route  exact={true} path={`${path}/PreviewWebpageRetailer`} component={PreviewWebpageRetailer} />
                                            <Route   exact={true} path={`${path}/MyCredits`} component={MyCredits} />
                                            <Route exact={true} path={`${path}/MyCreditHistory`} component={MyCreditHistory} />
                                            <Route  exact={true} path={`${path}/Recharge`} component={Recharge} />
                                            <Route  exact={true} path={`${path}/MyRechargeHistory`} component={MyRechargeHistory} />
                                            <Route  exact={true} path={`${path}/CouponViewHistory`} component={CouponViewHistory} />
                                            <Route  exact={true} path={`${path}/Preview`} exact component={Preview} />


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
