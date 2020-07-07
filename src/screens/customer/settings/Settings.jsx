import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
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
                        <a class="nav-link active _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</a>
                        <a class="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#Change-Password" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Password</a>
                        <a class="nav-link  _settings" id="v-pills-messages-tab" data-toggle="pill" href="#My-Wishlist" role="tab" aria-controls="v-pills-messages" aria-selected="false">My Wishlist</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#My-Saved-Coupons" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Saved Coupons</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-sm-12">
                  <div class="tab-content manage_genral" id="v-pills-tabContent">
                     <div class="tab-pane fadeshow active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h3 class="info_c3">Manage General Info</h3>
                        <div class="name_c3">
                           <span class="name">
                              <label>Name</label>
                              <p><input type="text" class="form-control" placeholder="Sushree"/></p>
                           </span>
                           <span class="name">
                              <label>Mobile Number</label>
                              <ul class="select_s3">
                                 <li>
                                    <select class="form-control _exmple">
                                       <option>+91</option>
                                       <option>2</option>
                                    </select>
                                 </li>
                                 <li><input type="text" class="form-control _number" placeholder="9650225013"/></li>
                              </ul>
                           </span>
                           <span class="name">
                              <label>Email <img src="images/about-icon.png"/><a href="#">(Verify)</a></label>
                              <ul class="verify_c3">
                                 <li><input type="text" class="form-control bhaswati_c3" placeholder="bhaswati@gmail.com"/></li>
                                 <li class="verify_button_c3"><a href="#">Verify</a></li>
                              </ul>
                           </span>
                           <span class="name">
                              <label>Referral Code</label>
                              <p><input type="text" class="form-control" placeholder="#$%^&*1234ert$$$$"/></p>
                           </span>
                           <div class="age-range">
                              <span class="name">
                                 <label>Age Range</label>
                                 <select class="form-control _range_s3">
                                    <option>20-29</option>
                                    <option>30-39</option>
                                    <option>40-49</option>
                                 </select>
                              </span>
                              <span class="name">
                                 <label>Gender</label>
                                 <select class="form-control _range_s3">
                                    <option>Male</option>
                                    <option>Female</option>
                                 </select>
                              </span>
                           </div>
                           <label>Please Enter Date and Month of  your Birth</label>
                           <div class="your_birth">
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Date</li>
                                    <li>
                                       <select class="form-control month_c3">
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Month</li>
                                    <li>
                                       <select class="form-control month_c3">
                                          <option>Jan</option>
                                          <option>Feb</option>
                                          <option>Mar</option>
                                          <option>Apr</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <label>Please Enter Date and Month of your Anniversary</label>
                           <div class="your_birth">
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Date</li>
                                    <li>
                                       <select class="form-control month_c3">
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Month</li>
                                    <li>
                                       <select class="form-control month_c3">
                                          <option>Jan</option>
                                          <option>Feb</option>
                                          <option>Mar</option>
                                          <option>Apr</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <span class="name">
                           <label>Occupation</label>
                           <input type="text" class="form-control" placeholder="Occupation"/>
                           </span>
                           <span class="name">
                              <label>Income Range</label>
                              <select class="form-control">
                                 <option>Les then 10.000</option>
                              </select>
                           </span>
                           <span class="name">
                              <label>Homeownership</label>
                              <select class="form-control">
                                 <option>Rent</option>
                              </select>
                           </span>
                           <span class="name">
                              <label>Educational Level</label>
                              <select class="form-control">
                                 <option>Master’s Degree or Above</option>
                              </select>
                           </span>
                           <div class="address">
                              <h3>Address Details</h3>
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
                              <input type="text" class="form-control" placeholder="Noida"/>
                              </span>
                              <span class="name">
                              <label>Address*</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Virgo Aluminum, Block D, Okhla Industrial Estate Phase 1"></textarea>
                              </span>
                              <ul class="button_cs">
                                 <a href="62-dashboard-landing-screen.html">  <li class="cancel_c3"><button class="save">Cancel</button></li></a>
                                <a href="62-dashboard-landing-screen.html"> <li><button class="save">Save</button></li></a>
                              </ul>
                           </div>
                        </div>
                     </div>
                   <div class="tab-pane fade" id="Change-Password" role="tabpanel" aria-labelledby="Change-Password-tab">
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
                                 <li class="cancel_c300"><button class="save">Cancel</button></li>
                                 <li><button type="button" class="save0"data-toggle="modal" data-target="#otpmodal">Save</button></li>
                              </ul>
                           </form>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="My-Wishlist" role="tabpanel" aria-labelledby="My-Wishlist-tab">
                        <h3 class="info_c3">My Wishlist</h3>
                        <div class="name_c3">
                        </div>
                        <section class="second">
                           <div class="container-fluid">
                              <div class="left-contant00">
                                 <h3>Marts</h3>
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image1.png"  data-toggle="modal" data-target="#wishlist"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>TCL E-Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image2.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Hotel Treebo Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image3.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Nebraska Furniture Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image4.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>SGBL Mega Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image1.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>TCL E-Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="left-contant00">
                                 <h3>Retailers</h3>
                                 <h5>Product</h5> 
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer1.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>TCL E-Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer2.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>Hotel Treebo Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer3.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>Nebraska Furniture Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer4.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>SGBL Mega Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>Nebraska Furniture Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="left-contant00">
                                 <h3>Categories</h3>
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image6.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Boddy Massage</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image7.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Hair Cutting</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Food Not Fine Dining</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png"/>
                                       </div>
                                       <div class="tcl00">
                                         <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="left-contant00">
                                 <h3>Sub categories</h3>
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image6.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                        <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image7.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png"/>
                                       </div>
                                       <div class="tcl00">
                                          <h3>Sub Category Name</h3>
                                          <h3>Category Name</h3>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"/></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>
                     </div>
                     <div class="tab-pane fade" id="My-Saved-Coupons" role="tabpanel" aria-labelledby="My-Saved-Coupons-tab">
                        <h3 class="info_c3">My Saved Coupons</h3>
                        <div class="name_c301">
                           <form class="search-box">
                              <input type="text" class="form-control pass-word" placeholder="Search by Coupan Name" name="search"/>
                              <i class="fa fa-search sear-btn"></i>
                           </form>
                        </div>
                        <div class="row sale-coupon">
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizz-expired.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizz-expired.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizz-expired.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"/>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
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
