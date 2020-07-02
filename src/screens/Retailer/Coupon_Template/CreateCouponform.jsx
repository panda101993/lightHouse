import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Carousel from 'react-multi-carousel'
import ImageDashboard from '../../../components/ImageDashboard'
import { Switch, Route, Link } from "react-router-dom";
import Header2 from '../../../components/Header2'
import CreateCoupon from '../../../components/CreateCoupon'
import CoupontempleteImage from '../../../components/CoupontempleteImage'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getTemplate } from '../../../utils/SVG'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRetailerCategory } from "../../../utils/API_Utils/apiUtils"

const ImageId = {
   Image1: require("../../../assets/images/greatcircle.png"),
   Image2: require("../../../assets/images/burger1.png")
}


export class CreateCouponform extends Component {
   constructor(props) {
      super(props)
      this.state = {
         modalStatus: false,
         modalStatusSucess: false,
         modalStatusLink: false,
         Category: false,
         SubCategory: false,
         ItemCategory: false,
         Brand: false,
         ItemName: false,
         OTC_STATE: false,
         OTC_STATE: false,
         INSIDE_MART:null,
         // INSIDE_MART_TARGET_ALL: false,
         // INSIDE_MART_WISH_BASED: false,
         // INSIDE_MART_NONE: false,
         OUTSIDE_MART_TARGET_ALL: false,
         OUTSIDE_MART_WISH_BASED: false,
         OUTSIDE_MART_NONE: false,
      }
   }
   toggleState = (stateName) => {
      stateName.map(item => {
         this.setState({ [`${item}`]: !this.state[`${item}`] }, () => console.log("as", this.state))
         if (item === "modalStatus") {
            let formData = {

            }
         }
      })
   }
   valueHandler = (type, e) => {
      e.preventDefault();
      if (type === "image") {
         this.setState({ [type]: URL.createObjectURL(e.target.files[0]) })
      }
      else {
         this.setState({ [type]: e.target.value }, () => console.log("state=>", this.state))
      }
   }
   handleRadio = (e) => {
      e.preventDefault();
      // console.log(">>>>>>",e.target)
      this.setState({ [e.target.name]: e.target.value }, () =>this.forceUpdate())
   }
   componentDidMount() {
      // getRetailerCategory()
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
                           <ul>
                              <li><Link to="/Coupon_template" class="active"  >Create Coupon</Link></li>
                              <li><Link to="/MyCoupanHistory" >Manage Coupons</Link></li>
                              <li><Link to='/ManageOnetime'   >Single Use Coupon</Link></li>
                              <li><Link to="/Setting_retailer">Settings</Link></li>
                           </ul>
                        </div>
                     </div>
                  </section>
                  <div class="container border-box">
                     <div class="name_c3">
                        <div class="offer-in-circle">
                           {getTemplate(Number(this.props.match.params.id), this.state)}
                           <input onChange={this.handleFileSelect} style={{ display: "none" }} type="file" accept="image/*" />
                           <div class="plus-circle">
                              <i class="fa fa-plus-circle" aria-hidden="true"></i>
                              <div>
                                 <input type="file" onChange={e => this.valueHandler("image", e)} />
                              </div>
                           </div>
                        </div>
                        <span class="name"><label>Title:</label>
                           <p><input type="text" class="form-control" placeholder="Great Deal" value={this.state.title} onChange={e => this.valueHandler("title", e)} /></p>
                        </span>
                        <span class="name"><label>Coupon Code :</label>
                           <p><input type="text" class="form-control" placeholder="Coupon Code" value={this.state.couponCode} onChange={e => this.valueHandler("couponCode", e)} /></p>
                        </span>
                        <span class="name"><label>Discount % :</label>
                           <p><input type="text" class="form-control" placeholder="Discount %" value={this.state.discount} onChange={e => this.valueHandler("discount", e)} /></p>
                        </span>
                        <span class="name">
                           <div class="about-usicon"><label class="label">Shop Phone Number :</label>
                           </div>
                           <div class="selil">
                              <div class="row">
                                 <div class="col-md-2">
                                    <ul class="select_s3">
                                       <li>
                                          <select class="form-control _exmple">
                                             <option value={"+91"}>+91</option>
                                             <option onChange={e => this.valueHandler("title", e)}>2</option>
                                          </select>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="col-md-10">
                                    <ul class="select_s34">
                                       <li><input type="tel" class="form-control" placeholder="9650225013" value={this.state.phoneNumber} onChange={e => this.valueHandler("phoneNumber", e)} />
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </span>
                        <span class="name"><label>Expiry Date :</label>
                           <p>
                              <div class="ins-cale">
                                 <input type="date" class="form-control" value={this.state.expiryDate} onChange={e => this.valueHandler("expiryDate", e)} />
                                 <i class="fa fa-calendar" aria-hidden="true"></i>
                              </div>
                           </p>
                        </span>
                        <span class="name"><label>Restrictions :</label>
                           <p><input type="text" class="form-control" placeholder="Restrictions :" value={this.state.restrictions} onChange={e => this.valueHandler("restrictions", e)} /></p>
                        </span>
                        <h3 class="enregbus coupon-apply">Coupon Apply on :</h3>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="Category" value="Category" checked={this.state.Category ? true : false}
                              onClick={this.handleRadio}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Catgeory :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("category", e)}>
                                    <option >Category Name</option>
                                    <option value={"Category 1"}>Category A</option>
                                    <option value={"Category 2"}>Category B</option>
                                    <option value={"Category 3"}>Category C</option>
                                    <option value={"Category 4"}>Category D</option>
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="SubCategory" value="SubCategory" checked={this.state.SubCategory ? true : false}
                              onClick={this.handleRadio}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Sub Category Name :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("subCategory", e)}>
                                    <option >Sub-Category Name</option>
                                    <option value={"Sub-Category 1"}>Sub-Category 1</option>
                                    <option value={"Sub-Category 2"}>Sub-Category 2</option>
                                    <option value={"Sub-Category 3"}>Sub-Category 3</option>
                                    <option value={"Sub-Category 4"}>Sub-Category 4</option>
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="ItemCategory" value="ItemCategory" checked={this.state.ItemCategory ? true : false}
                              onClick={this.handleRadio}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Item Type :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("itemType", e)}>
                                    <option >Item Type</option>
                                    <option value={"Item Type 1"}>Item Type 1</option>
                                    <option value={"Item Type 2"}>Item Type 2</option>
                                    <option value={"Item Type 3"}>Item Type 3</option>
                                    <option value={"Item Type 4"}>Item Type 4</option>
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="Brand" value="Brand" checked={this.state.Brand ? true : false}
                              onClick={this.handleRadio}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Brand :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("Brand", e)}>
                                    <option >Brand Name</option>
                                    <option value={"Brand Name 1"}>Brand Name 1</option>
                                    <option value={"Brand Name 2"}>Brand Name 2</option>
                                    <option value={"Brand Name 3"}>Brand Name 3</option>
                                    <option value={"Brand Name 4"}>Brand Name 4</option>
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="ItemName" value="ItemName" checked={this.state.ItemName ? true : false}
                              onClick={this.handleRadio}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Item Name :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("itemName", e)}>
                                    <option >Item Name</option>
                                    <option value={"Item Name 1"}>Item Name 1</option>
                                    <option value={"Item Name 2"}>Item Name 2</option>
                                    <option value={"Item Name 3"}>Item Name 3</option>
                                    <option value={"Item Name 4"}>Item Name 4</option>
                                 </select>
                              </p>
                           </div>
                           <div class="pl-4">
                              <p class="mt-3 mb-1">One Time Coupon :</p>
                              <div class="custom-radio">

                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OTC" id="OTC_TRUE" value="true" checked={this.state.OTC_STATE ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OTC_TRUE">
                                       Yes</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OTC" id="OTC_FALSE" value="false" checked={this.state.OTC_STATE ? true : true}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OTC_FALSE">
                                       No</label>
                                 </div>
                              </div>
                              <p class="mt-3 mb-1">Inside Mart Notifications:</p>
                              <div class="custom-radio">
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="INSIDE_MART" id="INSIDE_MART_TARGET_ALL" value="INSIDE_MART_TARGET_ALL" checked={this.state.INSIDE_MART==="INSIDE_MART_TARGET_ALL" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="INSIDE_MART">
                                       Target All</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="INSIDE_MART" id="INSIDE_MART_WISH_BASED" value="INSIDE_MART_WISH_BASED" checked={this.state.INSIDE_MART==="INSIDE_MART_WISH_BASED" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="INSIDE_MART">
                                       Only Based on Wishlist</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="INSIDE_MART" id="INSIDE_MART_NONE" value="INSIDE_MART_NONE" checked={this.state.INSIDE_MART==="INSIDE_MART_NONE" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="INSIDE_MART">
                                       None</label>
                                 </div>
                              </div>
                              <p class="mt-3 mb-1">Outside Mart Notifications:</p>
                              <div class="custom-radio">

                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OUTSIDE_MART_TARGET_ALL" id="OUTSIDE_MART_TARGET_ALL" value="OUTSIDE_MART_TARGET_ALL" checked={this.state.OUTSIDE_MART_TARGET_ALL ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OUTSIDE_MART_TARGET_ALL">
                                       Target All</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OUTSIDE_MART_WISH_BASED" id="OUTSIDE_MART_WISH_BASED" value="OUTSIDE_MART_WISH_BASED" checked={this.state.OUTSIDE_MART_WISH_BASED ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OUTSIDE_MART_WISH_BASED">
                                       Only Based on Wishlist</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OUTSIDE_MART_NONE" id="OUTSIDE_MART_NONE" value="OUTSIDE_MART_NONE" checked={this.state.OUTSIDE_MART_NONE ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OUTSIDE_MART_NONE">
                                       None</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="two-buttonsec mt-5">
                           <Link to="/Coupon_template" class="active"  >
                              <button type="button" class="btn btn-modal">Cancel</button>
                           </Link>
                           <button type="button" class="btn btn-modal active" data-toggle="modal"
                              data-target="#great-deal1" data-dismiss="modal" onClick={() => this.toggleState(["modalStatus"])} >Preview</button>
                        </div>
                     </div>
                  </div>
               </section>
               <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                  <ModalBody>
                     <div class="modal-content offer">
                        <div class="modal-body bumoffer">
                           <div class="mainoffer">
                              <img src={ImageId.Image2}
                                 class="bur-img" />
                              <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5>
                              <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6>
                           </div>
                           <div class="modal-body ny">
                              <Link to='/Coupon_template'  >   <button type="button" class="btn btn-modal" data-toggle="modal" data-target="#" onClick={() => this.toggleState(["modalStatus"])} >Cancel</button>  </Link>
                              <button type="button" class="btn btn-modal" data-dismiss="modal" data-toggle="modal" data-target="#coup-success" onClick={() => this.toggleState(["modalStatus", "modalStatusSucess"])} >Save</button>
                              <button type="button" class="btn btn-modal" data-dismiss="modal" data-toggle="modal" data-target="#prev"
                                 onClick={() => this.toggleState(["modalStatus", "modalStatusLink"])} >Submit</button>
                           </div>
                        </div>
                     </div>
                  </ModalBody>
               </Modal>

               <Modal isOpen={this.state.modalStatusSucess} toggle={this.toggle}
                  style={{ top: "190px", }}
               >
                  <ModalBody>
                     <div class="modal-header locationsethead">
                        <h5>Your Coupon has been saved successfully!</h5>
                     </div>
                     <div class="modal-body ok">
                        <Link to='/MyCoupanHistory' >
                           <button type="button" class="btn setloc-btn">OK</button>
                        </Link>
                     </div>
                  </ModalBody>
               </Modal>
               <Modal isOpen={this.state.modalStatusLink} toggle={this.toggle} style={{ top: "190px", }} >
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
                        <Link to='/Coupon_template' >
                           <button class="btn setloc-btn" type="submit" data-toggle="modal" data-target="#">OK</button>
                        </Link>
                     </div>

                  </ModalBody>
               </Modal>
               <Footer />
            </body>
         </div>
      )
   }
}

const mapStateToProps = state => {
   console.log("stateLogin-------", state)
   return {
      token: state.AuthReducer.userData.token
   }

}
const mapDispatchToProps = dispatch => {
   return {
      action: bindActionCreators({}, dispatch)
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateCouponform);
