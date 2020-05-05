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
const responsive = {
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 4,
     slidesToSlide: 1, // optional, default to 1.
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2,
     slidesToSlide: 2, // optional, default to 1.
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
 };

const Imageid={
   Image1:require("../../../assets/images/Template-1.png"),
 }
 
 
const CreateCoupon1 = () => 
<div>
    <CreateCoupon />
</div>; 
const Coupontemplete =() =>
<div>
<CoupontempleteImage />
</div>;

export class CreateCouponform extends Component {
    render() {
        return (
            <div> 
                <Header2 /> 
                <section>
                        <div class="container-fluid">
                            <div class="coupn-setting my-5">
                                <ul>
                                    <li> 
                                    
                                        <Link to="/Coupon_template" > Create Coupon</Link> </li>
                                           
                                    <li ><Link to="/MyCoupanHistory" >Manage Coupons</Link></li>
                                    <li><Link to='/ManageOnetime'>Single Use Coupon</Link></li>
                                    <li><Link to='/ManageGeneralInfo' class="active" href="77-settings-retailer.html">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                <CreateCoupon />
                <Footer />
            </div>
        )
    }
}

export default CreateCouponform
