import React, { Component } from 'react'
//import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Carousel from  'react-multi-carousel'
import ImageDashboard from '../../../components/ImageDashboard'
import { Switch, Route, Link } from "react-router-dom";
import Header2 from '../../../components/Header2'
import CreateCoupon from '../../../components/CreateCoupon'
import CoupontempleteImage from '../../../components/CoupontempleteImage'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ImageId ={
    Image1:require("../../../assets/images/greatcircle.png") ,
    Image2:require("../../../assets/images/burger1.png")
}
 

export class CreateCouponform extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
        modalStatus: false,
        modalStatusSucess:false,
        modalStatusLink:false

      }
    }
    
    render() {
        return (
            <div>  
                <body>
                <Header2 /> 
                <section>
         <section>
            <div class="container-fluid">
               <div class="coupn-setting my-5">
                  {/* <ul>
               <li><a class="active" href="101-coupon-template.html">Create Coupon</a></li>
               <li ><a href="my-coupons-history.html">Manage Coupons</a></li>
               <li><a href="#">Single Use Coupon</a></li>
               <li><a href="#">Settings</a></li>
                  </ul> */} 
                   <ul>
                                    <li>
                                       {/* <a href="101-coupon-template.html">Create Coupon</a>  */}
                                        <Link to="/Coupon_template"  class="active"  >Create Coupon</Link>
                                        </li>
                                    
                                    <li ><Link to="/MyCoupanHistory" >Manage Coupons</Link></li>
                                       
                                    <li><Link to='/ManageOnetime'   >Single Use Coupon</Link></li>
                                    <li><Link to="/Setting_retailer">Settings</Link></li>
                                </ul>
               </div>
            </div>
         </section>
         <div class="container border-box">
            <div class="name_c3">
               <div class="offer-in-circle">
                  <img  src={ImageId.Image1}
                  // src="images/greatcircle.png" 
                  class="circle-plus" />
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
                 {/* <a href="101-coupon-template.html"> */} 
                 <Link to="/Coupon_template"  class="active"  >
                     <button type="button" class="btn btn-modal">Cancel</button> 
                     </Link>
                     {/* </a> */}
                 <button type="button" class="btn btn-modal active" data-toggle="modal"
                  data-target="#great-deal1" data-dismiss="modal"   onClick={() => this.setState({ modalStatus: !this.state.modalStatus })} >Preview</button>
               </div>
            </div>
         </div>
      </section>
      <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                  <ModalBody>
                
               
             <div class="modal-content offer">
               <div class="modal-body bumoffer">
                  <div class="mainoffer">
                     <img  src={ImageId.Image2}
                     //src="images/burger1.png"  
                     class="bur-img" />
                     <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5>
                     <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6>

                     {/* <!-- <div class="cover-share">
                        <a data-toggle="modal" data-target="#icon" data-dismiss="modal"> <img src="images/arrow back.png" class="ba"></a>
                     </div> --> */}
                  </div>
                  <div class="modal-body ny">
                     {/* <a href="101-coupon-template.html">  */}
                <Link to='/Coupon_template'  >   <button type="button" class="btn btn-modal" data-toggle="modal" data-target="#"   onClick={() => this.setState({ modalStatus: !this.state.modalStatus })} >Cancel</button>  </Link>  
                     {/* </a> */}
                     <button type="button" class="btn btn-modal" data-dismiss="modal" data-toggle="modal" data-target="#coup-success"  onClick={() => this.setState({ modalStatus: !this.state.modalStatus ,modalStatusSucess:!this.state.modalStatusSucess })} >Save</button>
                     <button type="button" class="btn btn-modal" data-dismiss="modal"  data-toggle="modal" data-target="#prev" 
                      onClick={() => this.setState({ modalStatus: !this.state.modalStatus ,modalStatusLink:!this.state.modalStatusLink})} >Submit</button>
                  </div>
               </div>
            </div>
           
                  </ModalBody>
               </Modal>   
              
               <Modal isOpen={this.state.modalStatusSucess} toggle={this.toggle} 
              // style={{ top: "110px", left: "100px" }} 
              style={{ top: "190px", }}
               >
                  <ModalBody>
                 
               <div class="modal-header locationsethead">
                  <h5>Your Coupon has been saved successfully!</h5>
               </div>
               <div class="modal-body ok">
                 {/* <a href="my-coupons-history.html"> */} 
                  <Link to='/MyCoupanHistory' >
                     <button type="button" class="btn setloc-btn">OK</button> 
                     </Link>  
                    {/* </a>  */}
               </div>
                 </ModalBody>
               </Modal>  

               <Modal isOpen={this.state.modalStatusLink} toggle={this.toggle}   style={{ top: "190px", }} >
                  <ModalBody>
                  <div class="modal-header locationsethead adminis">
                  <h5>Thanks for  submiting the coupon. Administrator will
                     verify and will update you soon !
                  </h5>
               </div>
               <div class="coupon-url">
                  <h6>Here is your link of the coupon :-<a href="https://couponhu78.com">https://couponhu78.com</a></h6>
               </div>
               <div class="modal-body ok">
                 {/* <a href="101-coupon-template.html"> */} 
                 <Link to='/Coupon_template' >
                     <button class="btn setloc-btn" type="submit" data-toggle="modal" data-target="#">OK</button> 
                     </Link>
                     {/* </a>  */}
               </div>
 
                  </ModalBody>
               </Modal>  
                <Footer /> 
                </body>
            </div>
        )
    }
}

export default CreateCouponform
