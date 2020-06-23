import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  
import ImageDashboard from '../../components/ImageDashboard';
import apiRequest from '../../api/Apirequest';


const responsive = {
   desktop: {
     breakpoint: { max: 2000, min: 1024 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
 }; 
 
 const responsive1 = {
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
   Image1:require("../../assets/images/image1.png"),
   Image5:require('../../assets/images/image5.png'),
   heartImage:require('../../assets//images/heart.png'),
   RedHeart:require('../../assets/images/redheart.png'),
   Image9:require("../../assets/images/image9.png"),
    Image10:require("../../assets/images/image10.png"),
    Image11:require("../../assets/images/image11.png"),
    Image12:require("../../assets/images/image12.png"),
   
          
 }

export class WebsiteMart extends Component {
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

   shopData(){
      if(this.state.allData.length > 0)
      return this.state.allData.map((xyz, index)=>{
         const {shopName,shopNumber,floorNumber,email,martId,pinCode,otpTime,parkingAvailability,martName} = xyz
         // console.log('abcd==',martId.images[0])
         console.log('abcd==>>',xyz)
         return(
        
               // <div class="col-lg-4 col-md-4 col-sm-12">
               //                   <div class="body-spa">
               //                   <img src={martId.images[0]} />
               //                   <div class="inner-spa">
               //                      <h6> <Link to="/WebsiteRetailer">{shopName}</Link>
               //                      </h6> 
               //                   <ul>
               //                      <li>Shop Number :</li>
               //                      <li>{shopNumber}</li>
               //                      <li>Floor Number:</li>
               //                      <li>{floorNumber}</li>
               //                      <li>Contact Number : </li>
               //                      <li>{otpTime}</li>
                                    
               //                   </ul>
                                 
               //                   </div>                                
               //                   </div>
                               
               //                  </div> 

               <div class="container">
            <div class="basic mt-3 ">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="john-json">
                     <h6>{martName}</h6>
                     <p class="mb-3">{martId.address}</p>
                     <label>Parking Availability :</label>
                     <span>{martId.parkingAvailability}</span>
                  </div>
                  <div> <Link to ="/AllRetailers"  > <button class="btn btn-theme">View Coupons</button> </Link></div>
               </div>
            </div>
            <div class="left-contant00">
                                 <h3>Categories</h3>
                              </div> 
                              
         
         

                            
                              <div class="cover-bodyspa">
                                 <div class="row">
                                  <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 <img src={martId.images[0]} />
                                  <div class="inner-spa">
                                     <h6> <Link to="/WebsiteRetailer">{shopName}</Link>
                                     </h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>{shopNumber}</li>
                                    <li>Floor Number:</li>
                                    <li>{floorNumber}</li>
                                    <li>Contact Number : </li>
                                    <li>{otpTime}</li>
                                    
                                  </ul>
                                 
                                 </div>                                
                                 </div>
                               
                                </div> 
                             </div>
                              <div class="row mt-4">
                              <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 <img src={martId.images[0]} />
                                  <div class="inner-spa">
                                     <h6> <Link to="/WebsiteRetailer">{shopName}</Link>
                                     </h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>{shopNumber}</li>
                                    <li>Floor Number:</li>
                                    <li>{floorNumber}</li>
                                    <li>Contact Number : </li>
                                    <li>{otpTime}</li>
                                    
                                  </ul>
                                 
                                 </div>                                
                                 </div>
                               
                                </div> 
                             </div>
                              </div>
                             



         </div>
               

               
                               
         )
      })
   }
   
    render() {
        return (
            <div> 
                <body> 
                    <Header2 />
                    <section>
         <div class="bg">
           
               <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={5000000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>                
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div> 
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div>
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div> 
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div>
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div>
             
            </Carousel>       
               
              
             </div> 
        
         {/* <div class="container"> */}
            <div>
            {/* <div class="basic mt-3 ">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="john-json">
                     <h6>V-MART</h6>
                     <p class="mb-3">OKhala Phase 1,D-115, New Delhi, 110020</p>
                     <label>Parking Availability :</label>
                     <span>Yes</span>
                  </div>
                  <div> <Link to ="/AllRetailers"  > <button class="btn btn-theme">View Coupons</button> </Link></div>
               </div>
            </div>
            <div class="left-contant00">
                                 <h3>Categories</h3>
                              </div>  */}
                              
         
         {/* <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} 
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={5000000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
   <div> 
       
       
       <ImageDashboard 
      ImageName="Bounce Salon & Spa" 
      
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
    
      
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="Hair Cutting" 
     
      
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart" 
      
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
    
      
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Hair Cutting" 
      
      
       ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart" 
    
      
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div> */}
  

{/* </Carousel>  */}

{/*                             
                              <div class="cover-bodyspa">
                                 <div class="row">
                                {this.shopData()}
                             </div>
                              <div class="row mt-4">
                                {this.shopData()}
                             </div>
                              </div> */}
                             

                              {this.shopData()}

         </div>
               
               
      </section>
                
                <Footer />
               </body>
            </div>
        )
    }
}


export default WebsiteMart
