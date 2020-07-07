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
import { getRetailerCategory, getRetailerSubCategory } from "../../../utils/API_Utils/apiUtils"
import { validateForm, validateMobileNo } from '../../../utils/validation/Validation'

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
         categoryState: false,
         subCategoryState: false,
         itemTypeState: false,
         brandState: false,
         itemNameState: false,
         OTC: "OTC_TRUE",
         INSIDE_MART: "INSIDE_MART_TARGET_ALL",
         OUTSIDE_MART: "OUTSIDE_MART_TARGET_ALL",
         categoryList: []
      }
   }
   toggleState = (stateName) => {
      stateName.map(item => {
         this.setState({ [`${item}`]: !this.state[`${item}`] }, () => console.log("as", this.state))
         if (item === "modalStatus") {
            let formData = {
               INSIDE_MART: this.state.INSIDE_MART,
               OTC: this.state.OTC,
               OUTSIDE_MART: this.state.OUTSIDE_MART,
               brandName: this.state.brand,
               categoryId: this.state.category,
               couponCode: this.state.couponCode,
               discount: this.state.discount,
               ExpiryDate: this.state.expiryDate,
               itemName: this.state.itemName,
               itemType: this.state.itemType,
               shopPhoneNumber: this.state.phoneNumber,
               restrictions: this.state.restrictions,
               image: this.state.image,
               title: this.state.title,
               couponAppliedOn: "",
               shopName: "",
               floorNumber: "",
            }
            console.log("form", formData)
         }
      })
   }
   getNextDropdownData =async (e,type) => {
      console.log("type, e",e)
      switch (type) {
         case ("category"): {
            let formData={
                  "categoryId":e,
                  "retailerId":this.props.userId
            }
            let  data= await getRetailerSubCategory(this.props.token,formData)
            console.log("??????",data)

         }
      }
   }
   valueHandler = (type, e) => {
      e.preventDefault();
      if (type === "image") {
         this.setState({ [type]: URL.createObjectURL(e.target.files[0]) })
      }
      else {
         this.handleValidation(e.target.value, type)
         this.setState({ [type]: e.target.value }, () => this.getNextDropdownData(this.state[`${type}`],type))
      }
   }
   handleRadio = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }

   handleApplyFilters = (e) => {
      let val = e.target.name.split("State")[0]
      this.setState({ [e.target.name]: !this.state[e.target.name] }, () => this.state[val] ? this.setState({ [`${val}`]: null }) : null)
   }

   handleValidation = (value, type) => {
      // console.log("type", type, value)
      switch (type) {
         case ("phoneNumber"):
            var data = validateMobileNo(value)
            this.setState({ [`${type}Error`]: data.error, [`${type}Status`]: data.status })
            break
         case ("discount"):
            if (value > 0 && value < 100) {
               this.setState({ [`${type}Error`]: true, [`${type}Status`]: "" })
            }
            else {
               this.setState({ [`${type}Error`]: false, [`${type}Status`]: "Please enter a valid discount!" })
            }
            break
         default: {
            var data = validateForm(value)
            this.setState({ [`${type}Error`]: data.error, [`${type}Status`]: data.status })
         }
      }
   }

   getActive() {
      if (this.state.couponCodeStatus === false, this.state.discountStatus === false, this.state.expiryDateStatus === false, this.state.phoneNumberStatus === false,
         this.state.restrictionsStatus === false, this.state.subCategoryState === false, this.state.titleStatus === false) {
         return true
      }
      else {
         return false
      }
   }
   componentDidMount = async () => {
      let categoryList = await getRetailerCategory(this.props.token)
      this.setState({ categoryList: categoryList })
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
                           <p><input type="text" class="form-control" name="title" placeholder="Great Deal" value={this.state.title} onChange={e => this.valueHandler("title", e)} /></p>
                        </span>
                        <span class="name"><label>Coupon Code :</label>
                           <p><input type="text" class="form-control" name="couponCode" placeholder="Coupon Code" value={this.state.couponCode} onChange={e => this.valueHandler("couponCode", e)} /></p>
                        </span>
                        <span class="name"><label>Discount % :</label>
                           <p><input type="text" class="form-control" name="discount" placeholder="Discount %" value={this.state.discount} onChange={e => this.valueHandler("discount", e)} /></p>
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
                           <input class="form-check-input" type="radio" name="categoryState"
                              value="categoryState"
                              checked={!this.state.categoryState ? true : false}
                              onClick={this.handleApplyFilters}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Catgeory :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("category", e)}>
                                    <option >Category Name</option>
                                    {!this.state.categoryState ?
                                       <>
                                          {this.state.categoryList.map(item =>
                                             <option value={item.categoryId._id} disabled={this.state.categoryState}>{item.categoryId.categoryName}</option>
                                          )}
                                       </>
                                       : <></>
                                    }
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="subCategoryState"
                              value="subCategoryState"
                              checked={!this.state.subCategoryState ? true : false}
                              onClick={this.handleApplyFilters}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Sub Category Name :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("subCategory", e)}>
                                    <option >Sub-Category Name</option>
                                    {!this.state.subCategoryState ?
                                       <>
                                          <option value={"Sub-Category 1"} disabled={this.state.subCategoryState}>Sub-Category 1</option>
                                          <option value={"Sub-Category 2"} disabled={this.state.subCategoryState}>Sub-Category 2</option>
                                          <option value={"Sub-Category 3"} disabled={this.state.subCategoryState}>Sub-Category 3</option>
                                          <option value={"Sub-Category 4"} disabled={this.state.subCategoryState}>Sub-Category 4</option>
                                       </>
                                       : <></>
                                    }
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="itemTypeState"
                              value="itemTypeState"
                              checked={!this.state.itemTypeState ? true : false}
                              onClick={this.handleApplyFilters}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Item Type :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("itemType", e)}>
                                    <option >Item Type</option>
                                    {!this.state.itemTypeState ?
                                       <>
                                          <option value={"Item Type 1"} disabled={this.state.itemTypeState}>Item Type 1</option>
                                          <option value={"Item Type 2"} disabled={this.state.itemTypeState}>Item Type 2</option>
                                          <option value={"Item Type 3"} disabled={this.state.itemTypeState}>Item Type 3</option>
                                          <option value={"Item Type 4"} disabled={this.state.itemTypeState}>Item Type 4</option>
                                       </>
                                       : <></>
                                    }
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="brandState"
                              value="brandState"
                              checked={!this.state.brandState ? true : false}
                              onClick={this.handleApplyFilters}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Brand :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("brand", e)}>
                                    <option >Brand Name</option>
                                    {!this.state.brandState ?
                                       <>
                                          <option value={"Brand Name 1"} disabled={this.state.brandState}>Brand Name 1</option>
                                          <option value={"Brand Name 2"} disabled={this.state.brandState}>Brand Name 2</option>
                                          <option value={"Brand Name 3"} disabled={this.state.brandState}>Brand Name 3</option>
                                          <option value={"Brand Name 4"} disabled={this.state.brandState}>Brand Name 4</option>
                                       </>
                                       : <></>
                                    }
                                 </select>
                              </p>
                           </div>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="itemNameState"
                              value="itemNameState"
                              checked={!this.state.itemNameState ? true : false}
                              onClick={this.handleApplyFilters}
                           />
                           <div class="bullet-padding">
                              <span class="name">
                                 <label class="form-check-label mar" for="exampleRadios1">
                                    Item Name :</label>
                              </span>
                              <p>
                                 <select class="form-control" onChange={e => this.valueHandler("itemName", e)}>
                                    <option >Item Name</option>
                                    {!this.state.brandState ?
                                       <>
                                          <option value={"Item Name 1"} disabled={this.state.itemNameState}>Item Name 1</option>
                                          <option value={"Item Name 2"} disabled={this.state.itemNameState}>Item Name 2</option>
                                          <option value={"Item Name 3"} disabled={this.state.itemNameState}>Item Name 3</option>
                                          <option value={"Item Name 4"} disabled={this.state.itemNameState}>Item Name 4</option>
                                       </>
                                       : <></>
                                    }
                                 </select>
                              </p>
                           </div>
                           <div class="pl-4">
                              <p class="mt-3 mb-1">One Time Coupon :</p>
                              <div class="custom-radio">

                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OTC" id="OTC_TRUE"
                                       value="OTC_TRUE"
                                       checked={this.state.OTC === "OTC_TRUE" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OTC_TRUE">
                                       Yes</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OTC" id="OTC_FALSE"
                                       value="OTC_FALSE"
                                       checked={this.state.OTC === "OTC_FALSE" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OTC_FALSE">
                                       No</label>
                                 </div>
                              </div>
                              <p class="mt-3 mb-1">Inside Mart Notifications:</p>
                              <div class="custom-radio">
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="INSIDE_MART" id="INSIDE_MART_TARGET_ALL"
                                       value="INSIDE_MART_TARGET_ALL"
                                       checked={this.state.INSIDE_MART === "INSIDE_MART_TARGET_ALL" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="INSIDE_MART">
                                       Target All</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="INSIDE_MART" id="INSIDE_MART_WISH_BASED"
                                       value="INSIDE_MART_WISH_BASED"
                                       checked={this.state.INSIDE_MART === "INSIDE_MART_WISH_BASED" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="INSIDE_MART">
                                       Only Based on Wishlist</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="INSIDE_MART" id="INSIDE_MART_NONE"
                                       value="INSIDE_MART_NONE"
                                       checked={this.state.INSIDE_MART === "INSIDE_MART_NONE" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="INSIDE_MART">
                                       None</label>
                                 </div>
                              </div>
                              <p class="mt-3 mb-1">Outside Mart Notifications:</p>
                              <div class="custom-radio">

                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OUTSIDE_MART" id="OUTSIDE_MART_TARGET_ALL"
                                       value="OUTSIDE_MART_TARGET_ALL"
                                       checked={this.state.OUTSIDE_MART === "OUTSIDE_MART_TARGET_ALL" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OUTSIDE_MART_TARGET_ALL">
                                       Target All</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OUTSIDE_MART" id="OUTSIDE_MART_WISH_BASED"
                                       value="OUTSIDE_MART_WISH_BASED"
                                       checked={this.state.OUTSIDE_MART === "OUTSIDE_MART_WISH_BASED" ? true : false}
                                       onClick={this.handleRadio}
                                    />
                                    <label class="form-check-label" for="OUTSIDE_MART_WISH_BASED">
                                       Only Based on Wishlist</label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="OUTSIDE_MART" id="OUTSIDE_MART_NONE"
                                       value="OUTSIDE_MART_NONE"
                                       checked={this.state.OUTSIDE_MART === "OUTSIDE_MART_NONE" ? true : false}
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
                              {getTemplate(Number(this.props.match.params.id), this.state)}
                           </div>
                           <div class="modal-body ny">
                              <button type="button" class="btn btn-modal" data-toggle="modal" data-target="#" onClick={() => this.toggleState(["modalStatus"])} >Cancel</button>
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
   return {
      token: state.AuthReducer.userData.token,
      userId: state.AuthReducer.userData.userId
   }

}
const mapDispatchToProps = dispatch => {
   return {
      action: bindActionCreators({}, dispatch)
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateCouponform);
