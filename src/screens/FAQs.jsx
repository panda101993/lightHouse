import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Switch, Route, NavLink  ,Link} from "react-router-dom";
import FAQComponent from '../components/FAQComponent';


const Loging = () => 
<div>
   <FAQComponent />
    
</div>;

const LocationSettings= () => 
<div>
 
   <FAQComponent /> 
</div>;

const Settings = () => 
<div>
   <FAQComponent />
    
</div>;
export default class FAQs extends Component {
 
    render() {
      const { path } = this.props.match;
        return (
            // <div>
      
   <body>
       <Header/>
     
      <section class="wrapper">
         <div class="container-fluid">
            <div class="row save-coupon">
               <div class="col-lg-3 col-md-12 col-sm-12 mb-3">
                  <div class="manage manage-faq">
                     <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {/* <a class="nav-link active _settings" id="v-pills-faq-tab" data-toggle="pill" href="#v-pills-faq" role="tab" aria-controls="v-pills-faq" aria-selected="true">Loging</a>
                        <a class="nav-link _settings" id="v-pills-faq2-tab" data-toggle="pill" href="#v-pills-faq2" role="tab" aria-controls="v-pills-faq2" aria-selected="false">Location Settings</a>
                         <a class="nav-link _settings" id="v-pills-faq3-tab" data-toggle="pill" href="#v-pills-faq3" role="tab" aria-controls="v-pills-faq3" aria-selected="false">Settings</a> */}
                           <NavLink to={`${path}/`} className="nav-link _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-faq" role="tab" aria-controls="v-pills-home" aria-selected="false">Loging</NavLink>
                           <NavLink to={`${path}/LocationSettings`} className="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-referral" role="tab" aria-controls="v-pills-profile" aria-selected="false">Location settings</NavLink>
                           <NavLink to={`${path}/Settings`} className="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-messages" aria-selected="false">Settings</NavLink>
                     </div>
                  </div>
               </div>
                {/* <div class="col-lg-9 col-md-12 col-sm-12">
                  <div class="tab-content" id="v-pills-tabContent">
                     <div class="tab-pane fade show active" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-faq-tab">
                        <div class="cover-accordion">
                           <div class="accordion frequently freqr" id="accordionExample">
                              <div class="card">
                                 <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingsix">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfour">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfive">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     {/* <div class="tab-pane fade" id="v-pills-faq2" role="tabpanel" aria-labelledby="v-pills-faq2-tab">
                        <div class="cover-accordion">
                           <div class="accordion frequently freqr" id="accordionExample">
                              <div class="card">
                                 <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div> */}
                              {/* <div class="card">
                                 <div class="card-header" id="headingsix">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfour">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfive">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="v-pills-faq3" role="tabpanel" aria-labelledby="v-pills-faq3-tab">
                        <div class="cover-accordion">
                           <div class="accordion frequently freqr" id="accordionExample">
                              <div class="card">
                                 <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingsix">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfour">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfive">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>  */} 
            <Switch>
                                            <Route exact={true} path={`${path}/`}  component={Loging} />
                                            <Route  exact={true} path={`${path}/Loging`} exact component={Loging} />
                                            <Route  exact={true} path={`${path}/LocationSettings`} component={LocationSettings} />
                                            <Route  exact={true} path={`${path}/Settings`} component={Settings} />
                                            {/* <Route  exact={true} path={`${path}/ManageWebpage`} component={ManageWebpage} />
                                            <Route   exact={true} path={`${path}/MyCredits`} component={MyCredits} />
                                            <Route exact={true} path={`${path}/MyCreditHistory`} component={MyCreditHistory} />
                                            <Route  exact={true} path={`${path}/Recharge`} component={Recharge} />
                                            <Route  exact={true} path={`${path}/MyRechargeHistory`} component={MyRechargeHistory} />
                                            <Route  exact={true} path={`${path}/CouponViewHistory`} component={CouponViewHistory} />
                                            <Route  exact={true} path={`${path}/Preview`} exact component={Preview} /> */}


                                        </Switch>
         </div>
         </div>
        
      </section>
      <Footer/>
     
   </body>

            // </div>
        )
    }
}
