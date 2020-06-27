

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import Apirequest from '../api/Apirequest';
import ToasterFunction from '../../src/components/ToasterFunc';

class SavedCoupansRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
            couponId :'',
            fromDate:'',
            toDate:'',
            couponStatus:"saved coupon", 
            

        }
    } 

    componentDidMount(){
        this.submitHandler()
    }

    resetHandler=() =>{
        this.setState({fromDate:'',
        toDate:''

        })
    }
  
    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
       
     }
     submitHandler = e => {
       // e.preventDefault()
        console.log(this.state) 
        console.log("token====>",this.props.applicationData.token)
        var requestData= {
           "token":this.props.applicationData.token ,
             "fromDate": this.state.fromDate,
           "toDate":this.state.toDate,
           "couponStatus":this.state.couponStatus,
        } 
        console.log("gggggg=>",requestData)

        Apirequest(requestData,"/retailer/couponHistory", "POST",this.props.applicationData.token) 
        .then((resp) => {
           console.log("wxyz==>", resp);
            // ToasterFunction("info", resp.data.responseMessage);
        
           switch (resp.status) {
            case (200):
                {
                if (resp.data.responseCode == 200) { 
                    ToasterFunction("success", resp.data.responseMessage);
                    // ToasterFunction("info", resp.data.responseMessage);
                    this.setState({
                        allData: resp.data.result[0].details
                     });
                     ToasterFunction("info", resp.data.responseMessage);

                }
                 else if (resp.data.responseCode == 404) {
                    ToasterFunction("info", resp.data.responseMessage);

                }
                else if (resp.data.responseCode == 500) {
                    ToasterFunction("error", resp.data.responseMessage);

                }
            }
            case (900): {
                if (resp.status == 900) {
                    ToasterFunction("error", "Please check your internet connection")
                }
            }
        }
        })
     
        .catch(e => { console.log(e) }) 
 }
 

    render() {

        const{toDate ,fromDate} =this.state
        return (
            <div>



  <div class="tab-pane fade show active " id="Saved" role="tabpanel" aria-labelledby="Saved-tab">
  <div class="">
      <div class="cover-clander-btn mt-5">
          <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-12">
                  <div class="form-group pos-rel">
                      <label for="">From</label>
                      <input type="date" 
                      class="form-control" 
                      id="" aria-describedby="" 
                      placeholder="dd/mm/yy"
                      value={fromDate}
                      name="fromDate"
                       onChange={this.changeHandler}
                      />
                      {/* <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i> */}
                  </div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-12">
                  <div class="form-group pos-rel">
                      <label for="">To</label>
                      <input type="date" 
                      class="form-control" 
                      id="" aria-describedby="" 
                      placeholder="dd/mm/yy" 
                      name="toDate"
                      value={toDate}
                      onChange={this.changeHandler}

                      />
                      {/* <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i> */}
                  </div>
              </div>


              <div class="col-lg-8 col-md-6 col-sm-12">
                  <div class="copn-btnsec">
                      <button class="btn btn-theme" onClick={this.submitHandler}>Submit</button>
                      <button class="btn btn-theme" onClick={this.resetHandler}>Reset</button>
                  </div>
              </div>

          </div>
      </div>

      <div class="main-covercoupn my-4">
          <ul>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>   <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>   <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>   <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>   <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>   <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                    <Link to="/CreateCouponform" > <button class="btn btn-three active">Edit</button></Link>
                  </div>
              </li>
          </ul>
      </div>
  </div>

</div>

</div>
        )
    }
}

const mapStateToProps = state => {
    console.log("stateLogin-------", state)
    return {
       applicationData: state.AuthReducer.userData
         
    }
          
 }
 export default connect(mapStateToProps)(SavedCoupansRetailer);

