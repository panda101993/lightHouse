import React, { Component } from 'react'
import CouponImageSetting from './CouponImageSetting'

export class MySavedCouponEndUser extends Component {
    render() {
        return (
            <div>
              
                        <h3 class="info_c3">My favourite Coupons</h3>
                        <div class="name_c301">
                           <form class="search-box">
                              <input type="text" class="form-control pass-word" placeholder="Search by Title, Product/Service name etc" name="search"  />
                              <i class="fa fa-search sear-btn"></i>
                           </form>
                        </div>
                        <div class="row sale-coupon">
                           {/* <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizz-expired.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png"  />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizz-expired.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizz-expired.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div>
                           <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    <img src="images/pizza great deal.png" />
                                 </figure>
                              </div>
                              <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup">Delete</button>
                           </div> */}
                           <CouponImageSetting />
                           {/* <CouponImageSetting />
                           <CouponImageSetting />
                           <CouponImageSetting />
                           <CouponImageSetting />
                           <CouponImageSetting /> */}
                           
                        </div>
                        
                    
            </div>
        )
    }
}

export default MySavedCouponEndUser
