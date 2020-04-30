import React, { Component } from 'react'

export class ManageOnetime extends Component {
    render() {
        return (
            <div>
                 <section>
         <section>
            <div class="container-fluid">
               <div class="coupn-setting my-5">
                  <ul>
                  <li><a href="101-coupon-template.html">Create Coupon</a></li>
                  <li ><a href="my-coupons-history.html">Manage Coupons</a></li>
                  <li><a class="active" href="109-Manage-one-time%20coupon.html">Single Use Coupon</a></li>
                  <li><a href="77-settings-retailer.html">Settings</a></li>
                  </ul>
               </div>
            </div>
         </section>
         <div class="container border-box">
            <div class="name_c3">
               <form>
                  {/* <!-- <div class="form-group chang-sec">
                     <label for="exampleInputEmail1" class="old-pass">Retailer Id :</label>
                     <input type="email" class="form-control pass-word" aria-describedby="emailHelp" placeholder="123456789900">
                  </div> --> */}
                  <div class="form-group chang-sec">
                     <label for="exampleInputPassword1" class="old-pass">Coupon Code :</label>
                     <input type="password" class="form-control" placeholder="Coupon Code" />
                  </div>
                  <span class="name">
                     <label for="exampleInputPassword1" class="old-pass">Customer Phone Number :</label>
                     <div class="selil">
                        <div class="row">
                           <div class="col-md-2">
                              <ul class="select_s3">
                                 <li>
                                    <select class="form-control _exmple">
                                       <option>+91</option>
                                       <option>2</option>
                                    </select>
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-10">
                              <ul class="select_s34">
                                 <li><input type="text" class="form-control" placeholder="9650225013" /></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </span>
                  <ul class="button_cs sve-can">
                     <li class="cancel_c300"><button type="button" class="save" data-toggle="modal" data-target="#no-redeem">Cancel</button></li>
                     <li><button type="button" class="save0"data-toggle="modal" data-target="#this-coupon">Verify</button></li>
                  </ul>
               </form>
            </div>
         </div>
      </section>
            </div>
        )
    }
}

export default ManageOnetime
