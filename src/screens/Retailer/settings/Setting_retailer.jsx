import React, { Component } from 'react'
import Header2 from "../../../components/Header2"
import Footer from "../../../components/Footer";
import CreateWebpage from "../../../components/CreateWebpage";

export default class Setting_retailer extends Component {
    render() {
        return (
            <div>
   <body>
       <Header2/>
      <section>
        <div class="container-fluid">
          <div class="coupn-setting my-5">
            <ul>
              <li><a href="101-coupon-template.html">Create Coupon</a></li>
              <li ><a  href="my-coupons-history.html">Manage Coupons</a></li>
              <li><a href="109-Manage-one-time%20coupon.html">Single Use Coupon</a></li>
              <li><a class="active" href="77-settings-retailer.html">Settings</a></li>
            </ul>
          </div>
        </div>
      </section> 
      <section>
         <div class="container-fluid">
            <div class="row save-coupon">
               <div class="col-lg-3 col-sm-12 mb-3">
                  <div class="manage">
                     <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-manage" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</a>
                        <a class="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-referral" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Referral Code</a>
                        <a class="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-webpage" role="tab" aria-controls="v-pills-settings" aria-selected="false">Manage Webpage</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-credits" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Credits</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-earned" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Credit History</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-recharge" role="tab" aria-controls="v-pills-settings" aria-selected="false">Recharge</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-history" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Recharge  History</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-coupon" role="tab" aria-controls="v-pills-settings" aria-selected="false">Coupon View History</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-sm-12">
                  <div class="tab-content manage_genral" id="v-pills-tabContent">

                     {/* <div class="tab-pane fade show active" id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h3 class="info_c3">Manage General Info</h3>
                        <div class="name_c3">
                           <span class="name">
                              <label>Shop Name*</label>
                              <p><input type="text" class="form-control" placeholder="Shop name"/></p>
                           </span>
                           <span class="name">
                              <div class="shopfloor">
                                 <div class="shop">
                                    <label>Shop Number*</label>
                                    <ul class="select">
                                       <li>
                                          <input type="text" class="form-control" placeholder="Shop number"/>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="floor">
                                    <label>Floor Number*</label>
                                    <ul class="select">
                                       <li><input type="text" class="form-control" placeholder="9"/></li>
                                    </ul>
                                 </div>
                              </div>
                           </span>
                           <span class="name">
                              <label>Mart Name* </label>
                              <select class="form-control">
                                 <option>Mart Name</option>
                                 <option>ab</option>
                              </select>
                           </span>
                              <span class="name">
                                 <label> Mobile Phone Number for Managing Coupons and Getting
                                 Communications From  LH *</label>
                                 <div class="cover-phoneno no-minht">
                                    <div class="code">
                                       <select class="form-control">
                                          <option selected>+91</option>
                                          <option>+92</option>
                                          <option>+92</option>
                                       </select>
                                    </div>
                                    <div class="code-no pos-rel">
                                       <input type="text" class="form-control" placeholder="9999999999"/>
                                       <div class="green-verify">
                                          <button type="button" class="btn" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal">verify</button>
                                       </div>
                                    </div>
                                 </div>
                              </span>
                                <span class="name">
                                   <label>Shop Phone Number to be Displayed on Coupons *</label>
                                   <div class="cover-phoneno no-minht">
                                      <div class="code">
                                         <select class="form-control">
                                            <option selected>+91</option>
                                            <option>+92</option>
                                            <option>+92</option>
                                         </select>
                                      </div>
                                      <div class="code-no pos-rel">
                                         <input type="text" class="form-control" placeholder="9999999999"/>
                                         <div class="green-verify">
                                            <button type="button" class="btn"  data-dismiss="modal" data-toggle="modal" data-target="#exampleModal">verify</button>
                                         </div>
                                      </div>
                                   </div>
                                </span>
                           <span class="name">
                              <label> Email id for Managing Coupons and Getting Communications From LH</label>
                              <p><input type="text" class="form-control" placeholder="bhaswti2526@gmail.com"/></p>
                           </span>
                           <span class="name">
                              <label>Registered Business Name *</label>
                              <p><input type="text" class="form-control" placeholder="Business Name "/></p>
                           </span>
                           <span class="name">
                              <label> Registered Business Address*</label>
                              <p><input type="text" class="form-control" placeholder="New Delhi  "/></p>
                           </span>
                           <div class="address">
                              <h3 class="enregbus">Enter Registered Business Address:</h3>
                              <span class="name">
                              <label>Pin Code*</label>
                              <input type="text" class="form-control" placeholder="110025"/>
                              </span>
                              <span class="name">
                                 <label>State*</label>
                                 <select class="form-control">
                                    <option>UP</option>
                                 </select>
                              </span>
                              <span class="name">
                                 <label>City*</label>
                                 <select class="form-control">
                                    <option>Noida</option>
                                 </select>
                              </span>
                              <span class="name">
                              <label>Address*</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                              </span>
                              <span class="name">
                              <label>GSTIN *</label>
                              <input type="text" class="form-control" placeholder="123456789"/>
                              </span>
                              <span class="name">
                                 <div class="downproof">
                                    <label>Download Proof *</label>
                                    <div class="dow">
                                       <img src={require("../../../assets/images/download.png")}/>
                                    </div>
                                 </div>
                              </span>
                              <ul class="button_cs">
                                 <li class="cancel_c3"><button class="save">Cancel</button></li>
                              <a href="101-coupon-template.html">   <li><button class="save">Save</button></li></a>
                              </ul>
                           </div>
                        </div>
                     
                     </div> */}


                     {/* <div class="tab-pane fade" id="v-pills-referral" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h3 class="info_c3">My Referral Code</h3>
                        <div class="name_c301">
                            <div class="light">
                                Brand Name
                            </div>
                            <div class="maincred ref">
                                <div class="mycredit ref">
                                    <p class="li"> LI3G4T</p>
                                    <img src={require("../../../assets/images/qrreader.png")}/>
                                </div>
                            </div>
                            <div class="pas print">
                                <ul class="button_cs">
                                    <li>
                                        <button class="save paddi ppp" data-toggle="modal" data-target="#icon">Print</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

{/* 
                    <div class="tab-pane fade" id="v-pills-password" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <h3 class="info_c3">Change Password</h3>
                        <div class="name_c301">
                            <form>
                                <div class="form-group chang-sec">
                                    <label for="exampleInputEmail1" class="old-pass">Old Password*</label>
                                    <input type="email" class="form-control pass-word" aria-describedby="emailHelp" placeholder="XXXXXXXXXXXXXXX"/>
                                </div>
                                <div class="form-group chang-sec">
                                    <label for="exampleInputPassword1" class="old-pass">New Password*</label>
                                    <input type="password" class="form-control pass-word" placeholder="XXXXXXXXXXXXXXX"/>
                                </div>
                                <div class="form-group chang-sec">
                                    <label for="exampleInputPassword1" class="old-pass">Confirm Password*</label>
                                    <input type="password" class="form-control pass-words" placeholder="XXXXXXXXXXXXXXX"/>
                                </div>
                                <ul class="button_cs">
                                    <li class="cancel_c300">
                                        <button class="save">Cancel</button>
                                    </li>
                                    <li>
                                        <button type="button" class="save0" data-toggle="modal" data-target="#changed">Save</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div> */}

                    <CreateWebpage/>
      


                    {/* <div class="tab-pane fade" id="v-pills-credits" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h3 class="info_c3">My Credits</h3>
                        <div class="name_c301">
                            <div class="maincred">
                                <div class="mycredit">
                                    5000 credits
                                </div>
                            </div>
                        </div>
                  //   </div> */}

                  {/* <div class="tab-pane fade" id="v-pills-earned" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  //       <h3 class="info_c3">My Credit History</h3>
                  //       <div class="name_c301 inc">
                  //           <div class="main-end">
                  //               <div class="frm-end">
                  //                   <label>From Date</label>
                  //                   <div class="ins-cale">
                  //                       <input type="date" class="birth-end"/>
                  //                       <div>
                  //                           <i class="fa fa-calendar" aria-hidden="true"></i>
                  //                       </div>
                  //                   </div>
                  //               </div>
                  //               <div class="frm-end">
                  //                   <label>End Date</label>
                  //                   <div class="ins-cale">
                  //                       <input type="date" class="birth-end"/>
                  //                       <div>
                  //                           <i class="fa fa-calendar" aria-hidden="true"></i>
                  //                       </div>
                  //                   </div>
                  //               </div>
                  //               <div class="sub-recharge">
                  //                   <button type="button" class="save">Submit</button>
                  //               </div>
                  //           </div>
                  //           <ul class="pdf-down">
                  //               <li>
                  //                   <button type="button" class="save csv">Download PDF</button>
                  //               </li>
                  //               <li>
                  //                   <button type="button" class="save csv rite">Download CSV</button>
                  //               </li>
                  //           </ul>
                  //           <div class="main-upi creit">
                  //               <div class="upi-elements">
                  //                   <h5 class="heding-five">29 Jan, 2020</h5>
                  //               </div>
                  //               <div class="main-upii">
                  //                   <div class="labelsin">
                  //                      <label>10 Credits</label>
                  //                      <label>Sign Up Credits</label>
                  //                   </div>
                  //                   <span>CR</span>
                  //               </div>
                  //           </div>
                  //           <div class="main-upi creit">
                  //               <div class="upi-elements">
                  //                   <h5 class="heding-five">22 Jan, 2020</h5>
                  //               </div>
                  //               <div class="main-upii">
                  //                   <div class="labelsin">
                  //                      <label>10 Credits</label>
                  //                      <label>Sign Up Credits</label>
                  //                   </div>
                  //                   <span>CR</span>
                  //               </div>
                  //           </div>
                  //           <div class="main-upi creit">
                  //               <div class="upi-elements">
                  //                   <h5 class="heding-five">18 Jan, 2020</h5>
                  //               </div>
                  //               <div class="main-upii">
                  //                   <div class="labelsin">
                  //                      <label>10 Credits</label>
                  //                      <label>Sign Up Credits</label>
                  //                   </div>
                  //                   <span>CR</span>
                  //               </div>
                  //           </div>
                  //           <div class="main-upi creit">
                  //               <div class="upi-elements">
                  //                   <h5 class="heding-five">28 Jan, 2020</h5>
                  //               </div>
                  //               <div class="main-upii">
                  //                   <div class="labelsin">
                  //                      <label>10 Credits</label>
                  //                      <label>Sign Up Credits</label>
                  //                   </div>
                  //                   <span>CR</span>
                  //               </div>
                  //           </div>
                  //           <div class="main-upi creit">
                  //               <div class="upi-elements">
                  //                   <h5 class="heding-five">22 Jan, 2020</h5>
                  //               </div>
                  //               <div class="main-upii">
                  //                   <div class="labelsin">
                  //                      <label>10 Credits</label>
                  //                      <label>Sign Up Credits</label>
                  //                   </div>
                  //                   <span>CR</span>
                  //               </div>
                  //           </div>
                  //           <div class="back-button">
                  //               <button type="button" class="save">Back</button>
                  //           </div>
                  //       </div>
                  //   </div>



                    <div class="tab-pane fade" id="v-pills-recharge" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h3 class="info_c3">Recharge</h3>
                        <div class="name_c301">
                            <div class="five-pay-flex">
                                <div class="fivehundred">
                                    <p class="five-color"> 500</p>
                                    <p class="mi-rec">Minimum Recharge RS 500 in Multiples of Ten</p>
                                </div>
                                <div class="pay-recharge">
                                    <button type="button" class="save" data-toggle="modal" data-target="#paypal">Pay</button>
                                </div>
                            </div>
                            <ul class="rdflex">
                                <li>
                                    <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                    <label class="form-check-label exrad" for="exampleRadios1">
                                        RS 500
                                    </label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="exampleRadios" value="option1"/>
                                    <label class="form-check-label exrad" for="exampleRadios1">
                                        RS 1000
                                    </label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="exampleRadios" value="option1"/>
                                    <label class="form-check-label exrad" for="exampleRadios1">
                                        RS 1500
                                    </label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="exampleRadios" value="option1"/>
                                    <label class="form-check-label exrad" for="exampleRadios1">
                                        RS 2000
                                    </label>
                                </li>
                            </ul>
                            <ul class="rec-credit">
                                <li>Recharge Rs 500.00 You will receive 100 credits</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                     <h3 class="info_c3">My Recharge History</h3>
                     <div class="name_c301 inc">
                         <div class="main-end">
                             <div class="frm-end">
                                 <label>From Date</label>
                                 <div class="ins-cale">
                                     <input type="date" class="birth-end"/>
                                     <div>
                                         <i class="fa fa-calendar" aria-hidden="true"></i>
                                     </div>
                                 </div>
                             </div>
                             <div class="frm-end">
                                 <label>End Date</label>
                                 <div class="ins-cale">
                                     <input type="date" class="birth-end"/>
                                     <div>
                                         <i class="fa fa-calendar" aria-hidden="true"></i>
                                     </div>
                                 </div>
                             </div>
                             <div class="sub-recharge">
                                 <button type="button" class="save">Submit</button>
                             </div>
                         </div>
                         <ul class="pdf-down">
                             <li>
                                 <button type="button" class="save csv">Download PDF</button>
                             </li>
                             <li>
                                 <button type="button" class="save csv rite">Download CSV</button>
                             </li>
                         </ul>
                         <div class="main-upi">
                             <div class="upi-elements">
                                 <h5 class="heding-five">29 Jan, 2020</h5>
                                 <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                 <p class="upi-num">Receive 200 credits .</p>
                             </div>
                             <div class="main-upii">
                                 <span>&#8377 1000.00</span>
                             </div>
                         </div>
                         <div class="main-upi">
                             <div class="upi-elements">
                                 <h5 class="heding-five">29 Jan, 2020</h5>
                                 <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                 <p class="upi-num">Receive 200 credits .</p>
                             </div>
                             <div class="main-upii">
                                 <span>&#8377 1000.00</span>
                             </div>
                         </div>
                         <div class="main-upi">
                             <div class="upi-elements">
                                 <h5 class="heding-five">29 Jan, 2020</h5>
                                 <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                 <p class="upi-num">Receive 200 credits .</p>
                             </div>
                             <div class="main-upii">
                                 <span>&#8377 1000.00</span>
                             </div>
                         </div>
                         <div class="main-upi">
                             <div class="upi-elements">
                                 <h5 class="heding-five">29 Jan, 2020</h5>
                                 <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                 <p class="upi-num">Receive 200 credits .</p>
                             </div>
                             <div class="main-upii">
                                 <span>&#8377 1000.00</span>
                             </div>
                         </div>
                         <div class="main-upi">
                             <div class="upi-elements">
                                 <h5 class="heding-five">29 Jan, 2020</h5>
                                 <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                 <p class="upi-num">Receive 200 credits .</p>
                             </div>
                             <div class="main-upii">
                                 <span>&#8377 1000.00</span>
                             </div>
                         </div>
                         <div class="back-button">
                             <button type="button" class="save">Back</button>
                         </div>
                     </div>
                 </div>
                    <div class="tab-pane fade" id="v-pills-coupon" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h3 class="info_c3">Coupon View History</h3>
                        <div class="name_c301 inc too-inc">
                            <div class="main-end">
                                <select class="form-control first-el">
                                    <option>Select Coupon Code</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div class="frm-end">
                                    <label>From Date</label>
                                    <div class="ins-cale">
                                        <input type="date" class="form-control"/>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="frm-end">
                                    <label>End Date</label>
                                    <div class="ins-cale">
                                        <input type="date" class="form-control"/>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="sub-recharge pad">
                                    <button type="button" class="save sub-can">Submit</button>
                                    <button type="button" class="save sub-can">Cancel</button>
                                </div>
                            </div>
                            <div class="main-coup">
                                <ul class="coupion-choice">
                                    <li>
                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                        <label class="form-check-label exrad" for="exampleRadios1">
                                            By Gender
                                        </label>
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                        <label class="form-check-label exrad" for="exampleRadios1">
                                            By Age Range
                                        </label>
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                        <label class="form-check-label exrad" for="exampleRadios1">
                                            By Address
                                        </label>
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                        <label class="form-check-label exrad" for="exampleRadios1">
                                            By Income Range
                                        </label>
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                        <label class="form-check-label exrad" for="exampleRadios1">
                                            By Homeownership
                                        </label>
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked/>
                                        <label class="form-check-label exrad" for="exampleRadios1">
                                            By Education Level
                                        </label>
                                    </li>
                                    <li>
                                        <button type="button" class="save sub-can">Cancel</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="graph">
                                <h5>Progress chart 12/09/2019 -19/09/2019</h5>
                                <img src={require("../../../assets/images/graphhh.png")}/>
                            </div>
                        </div>
                    </div>*/}
                  </div>
               </div>
            </div>
               </div> 
      </section>
      <Footer/>
     {/* <footer class="footer">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="footer-logosec">
                     <img class="dammy-logo" src="images/logo-copy.png">
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="main-infosec">
                     <div class="info-left mr-15">
                        <h2>Information</h2>
                        <ul class="foter">
                           <li><a href="about.html">About Us </a></li>
                           <li><a href="terms-condition.html">Terms&Conditions </a></li>
                           <li><a href="privacypolicy.html">Privacy Policy </a></li>
                        </ul>
                     </div>
                     <div class="info-left">
                        <h2>CONTACT</h2>
                        <ul class="foter">
                           <li><a href="how-it-work.html">How it Works </a></li>
                           <li><a href="contact-us.html">Contact Us </a></li>
                           <li><a href="FAQS.html">FAQs </a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="right-footer">
                     <h2>Follow Us</h2>
                     <ul class="social-icon">
                        <li><a href="#"><img class="social-pic" src="images/fb.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/linkdn.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/googlepluse.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/twitr.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/insta.png"></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer> */}
      {/* <p class="copyright text-center">@All rights reserved 2020</p> */}


      {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-body verfy_cs3">
                  <h1>OTP verification</h1>
                  <p class="text_c3">Please enter the 4 digits OTP sent on your registered phone number </p>
                  <h2>Enter 4-digits code</h2>
                  <ul class="enter_code"  >
                     <li><input type="text" class="form-control txt_c3"/></li>
                     <li><input type="text" class="form-control txt_c3"/></li>
                     <li><input type="text" class="form-control txt_c3"/></li>
                     <li><input type="text" class="form-control txt_c3"/></li>
                  </ul>
                  <span class="re_cs3"><a href="#"  data-toggle="modal" data-target="#otpmodal" data-dismiss="modal">Resend</a></span>
               </div>
               <div class="modal-footer botton_modal">
                  <button type="button" class="save" data-dismiss="modal">SUBMIT</button>
               </div>
            </div>
         </div>
      </div> */}


      {/* <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog"  aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>OTP resent successfully.</h5>
               </div>
               <div class="modal-body">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
               </div>
            </div>
         </div>
      </div> */}

      {/* <div class="modal fade" id="logout" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content coup-code">
              <div class="modal-header locationsethead adminis">
                 <h5>Are you sure you want to Logout?</h5>
              </div>
              <div class="modal-body ok n-yes">
                 <button class="btn setloc-btn" type="submit" data-dismiss="modal">No</button>
                 <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit">Yes</button></a>
              </div>
           </div>
        </div>
     </div> */}

     {/* <div class="modal fade" id="thanks-for" tabindex="-1" role="dialog"  aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
            <div class="modal-header locationsethead adminis">
               <h5>Thanks for create the website,our administrator will verify it  and will update you soon!</h5>
            </div>
            <div class="modal-body ok">
               <button class="btn setloc-btn" type="submit" data-dismiss="modal" >OK</button>
            </div>
         </div>
      </div>
   </div> */}


      {/* <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/app.js"></script> */}

      {/* <script>
         $('.top-slider').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         
         ]
         });
      </script> */}
      {/* <div class="modal fade" id="locationsetmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Please Set Your Location!</h5>
               </div>
               <div class="modal-body">
                  <button class="btn setloc-btn" type="submit">OK</button>
               </div>
            </div>
         </div>
      </div> */}
   </body>
            </div>
        )
    }
}
