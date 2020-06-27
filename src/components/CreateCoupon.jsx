import React, { Component } from 'react'

export class CreateCoupon extends Component {
    render() { 
        return (
            <div>
                  <div class="container border-box">
            <div class="name_c3">
               <div class="offer-in-circle">
                  <img src="images/greatcircle.png"  class="circle-plus" />
                  <div class="plus-circle">
                     <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  </div>
               </div>
               <span class="name">
                  <label>Title:</label>
                  <p><input type="text" class="form-control" placeholder="Great Deal " /></p>
               </span>
               <span class="name">
                  <label>Coupon Code :</label>
                  <p><input type="text" class="form-control" placeholder="Coupon Code" /></p>
               </span>
               <span class="name">
                  <label>Discount % :</label>
                  <p><input type="text" class="form-control" placeholder="Discount %" /></p>
               </span>
               <span class="name">
                  <div class="about-usicon">
                     <label class="label">Shop Phone Number :</label>
                     <img src="images/about-us-icon-png-12.png" />
                  </div>
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
               <span class="name">
                  <label>Expiry Date :</label>
                  <p>
                  <div class="ins-cale">
                     <input type="date" class="form-control" />
                     <i class="fa fa-calendar" aria-hidden="true"></i>
                  </div>
                  </p>
               </span>
               <span class="name">
                  <label>Restrictions :</label>
                  <p><input type="text" class="form-control" placeholder="Restrictions :" /></p>
               </span>
               <h3 class="enregbus coupon-apply">Coupon Apply on :</h3>
               <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked />
                  <div class="bullet-padding">
                     <span class="name">
                     <label class="form-check-label mar" for="exampleRadios1">
                     Catgeory :
                     </label>
                     </span>
                     <p>
                        <select class="form-control">
                           <option>Category Name</option>
                        </select>
                     </p>
                  </div>
               </div>
               <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked />
                  <div class="bullet-padding">
                     <span class="name">
                     <label class="form-check-label mar" for="exampleRadios1">
                     Sub-Category :
                     </label>
                     </span>
                     <p>
                        <select class="form-control">
                           <option>Sub-Category Name</option>
                        </select>
                     </p>
                  </div>
               </div>
               <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked />
                  <div class="bullet-padding">
                     <span class="name">
                     <label class="form-check-label mar" for="exampleRadios1">
                     Item Type :
                     </label>
                     </span>
                     <p>
                        <select class="form-control">
                           <option>Item Type</option>
                        </select>
                     </p>
                  </div>
               </div>
               <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked />
                  <div class="bullet-padding">
                     <span class="name">
                     <label class="form-check-label mar" for="exampleRadios1">
                     Brand :
                     </label>
                     </span>
                     <p>
                        <select class="form-control">
                           <option>Brand Name</option>
                        </select>
                     </p>
                  </div>
               </div>
               <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked />
                  <div class="bullet-padding">
                     <span class="name">
                     <label class="form-check-label mar" for="exampleRadios1">
                     Item Name :
                     </label>
                     </span>
                     <p>
                        <select class="form-control">
                           <option>Item Name</option>
                        </select>
                     </p>
                  </div>
                  <div class="pl-4">
                     <p class="mt-3 mb-1">One Time Coupon :</p>
                     <div class="custom-radio">
                     
                     <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                      Yes
                      </label>
                       </div>
                       <div class="form-check">
                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                       <label class="form-check-label" for="exampleRadios1">
                        No
                       </label>
                     </div>
                     </div>
                     <p class="mt-3 mb-1">Inside Mart Notifications:</p>
                     <div class="custom-radio">
                     <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                      Target All 
                      </label>
                       </div>
                       <div class="form-check">
                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                       <label class="form-check-label" for="exampleRadios1">
                        Only Based on Wishlist
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                       <label class="form-check-label" for="exampleRadios1">
                        None
                       </label>
                     </div>
                     </div>
                     <p class="mt-3 mb-1">Outside Mart Notifications:</p>
                     <div class="custom-radio">
                     
                     <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label class="form-check-label" for="exampleRadios1">
                      Target All 
                      </label>
                       </div>
                       <div class="form-check">
                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                       <label class="form-check-label" for="exampleRadios1">
                        Only Based on Wishlist
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                       <label class="form-check-label" for="exampleRadios1">
                        None
                       </label>
                     </div>
                     </div>
                  </div>
               </div>
               <div class="two-buttonsec mt-5">
                 <a href="101-coupon-template.html"><button type="button" class="btn btn-modal">Cancel</button></a>
                 <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
               </div>
            </div>
         </div>
            </div>
        )
    }
}

export default CreateCoupon
