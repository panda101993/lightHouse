import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Header2 from '../../../components/Header2';
export class ManageOnetime extends Component {
    render() {
        return (
            <div> 
                  <body>
            <Header2 />
                 <section>
         <section> 
            <div class="container-fluid">
               <div class="coupn-setting my-5">
             
                             <ul>
                                    <li>
                                       {/* <a href="101-coupon-template.html">Create Coupon</a>  */}
                                        <Link to="/Coupon_template" >Create Coupon</Link>
                                        </li>
                                    
                                    <li ><Link to="/MyCoupanHistory" >Manage Coupons</Link></li>
                                       
                                    <li><Link to='/ManageOnetime'  class="active"   >Single Use Coupon</Link></li>
                                    <li><Link to="/Setting_retailer">Settings</Link></li>
                                </ul>
               </div>
            </div>
         </section>
         <div class="container border-box">
            <div class="name_c3">
               <form>
               
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
      <Footer /> 
      </body>
            </div>
        )
    }
}

export default ManageOnetime
