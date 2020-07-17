import React, { Component } from 'react'
import CouponImageSetting from './CouponImageSetting'

export class MySavedCouponEndUser extends Component {
    render() {
        return (
            <div>             
                        <h3 class="info_c3">My favourite Coupons</h3>
                        {/* <div class="name_c301">
                           <form class="search-box">
                              <input type="text" class="form-control pass-word" placeholder="Search by Title, Product/Service name etc" name="search"  />
                              <i class="fa fa-search sear-btn"></i>
                           </form>
                        </div> */}
                        <div class="row sale-coupon">                          
                           <CouponImageSetting />                          
                        </div>                   
            </div>
        )
    }
}

export default MySavedCouponEndUser
