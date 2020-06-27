import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
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
                     <div class="tab-pane fade show active" id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h3 class="info_c3">Register Your Business</h3>
                        <div class="name_c3">
                           <div class="totgst">
                              <ul class="gst">
                                 <li class="ta">Sign up free :</li>
                                 <li class="ta">GST Amount :</li>
                                 <li class="ta bl">Total Amount :</li>
                              </ul>
                              <ul class="gst">
                                 <li class="rs">Rs 300.00 </li>
                                 <li class="rs">18% of sign up free</li>
                                 <li class="rs bl">RS 800.00 </li>
                              </ul>
                           </div>
                           <div class="pas">
                              <ul class="button_cs">
                                 <li><button class="save paddi" data-toggle="modal" data-target="#icon">Pay and Submit</button></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="v-pills-referral" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h3 class="info_c3">My Referral Code</h3>
                        <div class="name_c301">
                            <div class="light">
                                Lighthouse
                            </div>
                            <div class="maincred ref">
                                <div class="mycredit ref">
                                    <p class="li"> LI3G4T</p>
                                    <img src="images/qrreader.png"/>
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
                    </div>
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
                    </div>
                    <div class="tab-pane fade" id="v-pills-webpage" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <section>
                            <div class="bg"><img src="images/Layer-40.png"/></div>
                            <div class="container">
                                <div class="basic ">
                                    <span><button class="view-but">View Coupons</button></span>
                                    <h5>Basic Information</h5>
                                    <div class="information">
                                        <ul class="shop">
                                            <li>Shop Name : &nbsp &nbsp </li>
                                            <li>Shop Number : &nbsp &nbsp </li>
                                            <li>Floor Number : &nbsp &nbsp </li>
                                            <li>Mart Name &nbsp : &nbsp &nbsp </li>
                                            <li>Mart Address: &nbsp &nbsp </li>
                                        </ul>
                                        <ul class="mart">
                                            <li>Shop Name</li>
                                            <li>123456789</li>
                                            <li>2</li>
                                            <li>Mart Name</li>
                                            <li>Okhla Phase 1 , D -115, New Delhi</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="about-us">
                                    <h4>About Us ( Limit 500 words )</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                                    </p>
                                    <p style="margin: 0px">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                                    </p>
                                </div>
                                <div class="time">
                                    <h2>Shop Timings  </h2>
                                    <div class="shop-timing">
                                        <ul class="sunday">
                                            <li>Sunday</li>
                                            <li>Monday</li>
                                            <li>Tuesday</li>
                                            <li>Wednesday</li>
                                            <li>Thursday</li>
                                            <li>Friday</li>
                                            <li>Saturday</li>
                                        </ul>
                                        <ul class="timeing">
                                            <li>9:30 AM - 5 PM</li>
                                            <li>9:30 AM - 5 PM</li>
                                            <li>9:30 AM - 5 PM</li>
                                            <li>9:30 AM - 5 PM</li>
                                            <li>9:30 AM - 5 PM</li>
                                            <li>9:30 AM - 5 PM</li>
                                            <li><a href="#">Close</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product">
                                    <h1>Product Service Details</h1>
                                    <div class="category_c3">
                                        <h3>Category Name</h3>
                                        <span>Sub Category Name</span>
                                        <p>Item Type, Brand Name, Item Name, Rs.123.00</p>
                                    </div>
                                    <div class="category_c3">
                                        <h3>Category Name</h3>
                                        <span>Sub Category Name</span>
                                        <p>Item Type, Brand Name, Item Name, Rs.123.00</p>
                                    </div>
                                    <div class="category_c3">
                                        <h3>Category Name</h3>
                                        <span>Sub Category Name</span>
                                        <p>Item Type, Brand Name, Item Name, Rs.123.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="back-button">
                                <button type="button" class="save">Back</button>
                            </div>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="v-pills-credits" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h3 class="info_c3">My Credits</h3>
                        <div class="name_c301">
                            <div class="maincred">
                                <div class="mycredit">
                                    5000 credits
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-earned" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h3 class="info_c3">My Credit History</h3>
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
                            <div class="main-upi creit">
                                <div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span>CR</span>
                                </div>
                            </div>
                            <div class="main-upi creit">
                                <div class="upi-elements">
                                    <h5 class="heding-five">22 Jan, 2020</h5>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span>CR</span>
                                </div>
                            </div>
                            <div class="main-upi creit">
                                <div class="upi-elements">
                                    <h5 class="heding-five">18 Jan, 2020</h5>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span>CR</span>
                                </div>
                            </div>
                            <div class="main-upi creit">
                                <div class="upi-elements">
                                    <h5 class="heding-five">28 Jan, 2020</h5>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span>CR</span>
                                </div>
                            </div>
                            <div class="main-upi creit">
                                <div class="upi-elements">
                                    <h5 class="heding-five">22 Jan, 2020</h5>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span>CR</span>
                                </div>
                            </div>
                            <div class="back-button">
                                <button type="button" class="save">Back</button>
                            </div>
                        </div>
                    </div>
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
                                <li>Recharge Rs 1000.00 You will receive 100 credits</li>
                                <li>Recharge Rs 1500.00 You will receive 100 credits</li>
                                <li>Recharge Rs 2000.00 You will receive 100 credits</li>
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
<div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p><div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span class="colr-change">DR</span>
                                </div>
                            </div>
                            <div class="main-upi">
                                <div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span class="colr-change">DR</span>
                                </div>
                            </div>
                            <div class="main-upi">
                                <div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span class="colr-change">DR</span>
                                </div>
                            </div>
                            <div class="main-upi">
                                <div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span class="colr-change">DR</span>
                                </div>
                            </div>
                            <div class="main-upi">
                                <div class="upi-elements">
                                    <h5 class="heding-five">29 Jan, 2020</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                </div>
                                <div class="main-upii">
                                    <span>1000.00</span>
                                    <span class="colr-change">DR</span>
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
                                <img src="images/graphhh.png"/>
                            </div>
                        </div>
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
