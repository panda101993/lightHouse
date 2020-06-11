import React, { Component } from 'react'
import Header from "../../components/Header" 
import Footer from "../../components/Footer" 
import ViewCouponRetailer from "../../components/ViewCouponRetailer"
import Header2 from '../../components/Header2'
import { Link } from 'react-router-dom'
import apiRequest from '../../api/Apirequest';

export default class WebsiteRetailer extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         allData: [] 
      }
   }
   getShopByMartList = (Id) => {
      try {     
         console.log('martt----',Id);        
         apiRequest({martId:Id},'/user/getShopByMart','POST')
         .then((resp) =>{
            console.log('response=>',resp);
            console.log('response===>',resp.data.userData);
            this.setState({
               allData: resp.data.userData
            });
         });
         
      } catch (error) {
         console.log('erroresponse==>',error)
         
      }

   }
   async componentDidMount() { 
      console.log('martt',window.location.pathname);
      let splitUrl = window.location.pathname.split('/')
      console.log('martt',splitUrl);
      console.log('martt',splitUrl[2]);
     this.getShopByMartList(splitUrl[2]);
   }
   
    render() {
        return (
            <div>
               {this.state.allData.map((allData,index)=>(

               
            <body> 
           <Header2 /> 
           <section>
         <div class="bg"> 
         <img src={require("../../assets/images/Layer-40.png")} />
        </div>  
        <div class="container">
        <div class="basic mt-3 ">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="john-json">
                  <h5>Shop Name : {allData.shopName}</h5>
                     <h6>Shop Number : {allData.shopNumber}</h6>
                     <h6>Floor Number : {allData.floorNumber}</h6>
                     <h6>Mart Name : {allData.martId.martName}</h6>
               <h6>Mart Address : {allData.martId.address} {allData.martId.city}</h6>
                  </div>
                  <div> <Link to ="/AllCouponsRetailers"  > <button class="btn btn-theme">View Coupons</button> </Link></div>
               </div>
            </div>
            <div class="about-us">
               <h4>About Us ( Limit 500 words )</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                     tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget. 
                      </p>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                   Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, 
                   nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
               </p>
                <span><a href="#">Read More</a></span> 
            </div>
            <div class="time">
               <h2>Shop Timings  </h2>
               <div class="shop-timing">
                  <ul class="sunday">
                     <li>Sunday</li>
                     <li>Monday</li>
                     <li>Tuesday</li>
                     <li>Wednesday</li>
                     <li>Thursday</li>
                     <li>Friday</li>
                     <li>Saturday</li>
                  </ul>
                  <ul class="timeing">
                     <li>9:30 AM - 5 PM</li>
                     <li>9:30 AM - 5 PM</li>
                     <li>9:30 AM - 5 PM</li>
                     <li>9:30 AM - 5 PM</li>
                     <li>9:30 AM - 5 PM</li>
                     <li>9:30 AM - 5 PM</li>
                     <li><a href="#">Close</a></li>
                  </ul>
               </div>
            </div> 
            <div class="product">
               <h1>Product Service Details</h1>
               <div class="accordion frequently" id="accordionExample">
                  <div class="card">
                     {/* <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                           Category 1 </button>
                        </h2>
                     </div> */}
                     <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                           <div class="sub-catgy">
                              <h6>Sub Category 1</h6>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <div class="accordion frequently" id="accordionExample1">
                                 <div class="card">
                                    <div class="card-header chl-head" id="headingsub1">
                                       <h2 class="mb-0">
                                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesub1" aria-expanded="false" aria-controls="collapsesub1">
                                          Sub Category 2 </button>
                                       </h2>
                                    </div>
                                    <div id="collapsesub1" class="collapse" aria-labelledby="headingsub1" data-parent="#accordionExample1">
                                       <div class="card-body">
                                          <div class="sub-catgy">
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="card">
                                    <div class="card-header chl-head" id="heading2">
                                       <h2 class="mb-0">
                                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesub2" aria-expanded="false" aria-controls="collapseOne">
                                          Sub Category 3 </button>
                                       </h2>
                                    </div>
                                    <div id="collapsesub2" class="collapse" aria-labelledby="headingsub2" data-parent="#accordionExample1">
                                       <div class="card-body">
                                          <div class="sub-catgy">
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="heading2">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseOne">
                           Category 2 </button>
                        </h2>
                     </div>
                     <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                        <div class="card-body">
                           <div class="sub-catgy">
                              <h6>Sub Category 1</h6>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


         </div>
            
                    
           </section>
            <Footer /> 
            </body>
            ))}
            </div>
        )
    }
}


