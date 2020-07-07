import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';

export default class Savedcoupon extends Component {
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
                        <a class="nav-link _settings" id="Manage-General-Info-tab" data-toggle="pill" href="#Manage-General-Info" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</a>
                        <a class="nav-link _settings" id="Change-Password-tab" data-toggle="pill" href="#Change-Password" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Password</a>
                        <a class="nav-link _settings" id="My-Wishlist-tab" data-toggle="pill" href="#My-Wishlist" role="tab" aria-controls="v-pills-messages" aria-selected="false">My Wishlist</a>
                        <a class="nav-link active _settings" id="My-Saved-Coupons-tab" data-toggle="pill" href="#My-Saved-Coupons" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Saved Coupons</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-sm-12">
                  <div class="tab-content manage_genral" id="v-pills-tabContent">
                     <div class="tab-pane fade" id="Manage-General-Info" role="tabpanel" aria-labelledby="Manage-General-Info-tab">
                        <h3 class="info_c3">Please Provide Information For Personalised  Experience</h3>
                        <div class="name_c301">
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
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
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
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
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
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
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
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
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
                           <input type="text" class="form-control income-stp" placeholder="Occupation"/>
                           </span>
                           <span class="name">
                              <label>Income Range</label>
                              <select class="form-control income-stp">
                                 <option>Les then 10.000</option>
                              </select>
                           </span>
                           <span class="name">
                              <label>Homeownership</label>
                              <select class="form-control income-stp">
                                 <option>Rent</option>
                              </select>
                           </span>
                           <span class="name">
                              <label>Educational Level</label>
                              <select class="form-control income-stp">
                                 <option>Master’s Degree or Above</option>
                              </select>
                           </span>
                           <div class="address">
                              <ul class="button_cs">
                                 <li class="cancel_c300"><button class="save">Skip</button></li>
                                 <li><button class="save0">Submit</button></li>
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
                     <div class="tab-pane fade show active" id="My-Saved-Coupons" role="tabpanel" aria-labelledby="My-Saved-Coupons-tab">
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
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                   <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
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
