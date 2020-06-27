import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';

export default class Categories_Expand extends Component {
    render() {
        return (
            <div>
                <body>
                    <Header />
                    <section class="second">
         <div class="container-fluid">
            <div class="slidertop">
               <section class="center slider ">
                  <div>
                     <div class="slicent activa">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
                  <div>
                     <div class="slicent">
                        Category Name
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </section>
      <section class="third">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-3">
                  <div class="accor-bord">
                     <ul class="button_cs sve-can button-shift all-clr">
                        <li><button type="button" class="save0 s-1"data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
                     </ul>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                          <span class="mart-mar-left">Mart Name </span> 
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseOn" aria-expanded="false" aria-controls="collapseOne">
                                       <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseOn" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapseOn" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseO" aria-expanded="false" aria-controls="collapseOne">
                                       <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseO" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapseO" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapse" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collap" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collap" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collap" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#colla" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#colla" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="colla" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#coll" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#coll" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="coll" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check ">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-9">
                  <section class="second">
                        <div class="top-slider">
                           <div class="slider-item">
                              <div class="main-coverslider">
                                 <div class="cover-images">
                                    <img src="images/image1.png"/>
                                 </div>
                                 <div class="tcl spa-salon">
                                    <h3>Bounce Salon & Spa</h3>
                                 </div>
                                 <div class="heart">
                                    <img src="images/heart.png"/>
                                 </div>
                              </div>
                           </div>
                           <div class="slider-item">
                              <div class="main-coverslider">
                                 <div class="cover-images">
                                    <img src="images/image2.png"/>
                                 </div>
                                 <div class="tcl spa-salon">
                                    <h3>Hair Cutting</h3>
                                 </div>
                                 <div class="heart">
                                    <img src="images/heart.png"/>
                                 </div>
                              </div>
                           </div>
                           <div class="slider-item">
                              <div class="main-coverslider">
                                 <div class="cover-images">
                                    <img src="images/image3.png"/>
                                 </div>
                                 <div class="tcl spa-salon">
                                    <h3>Food Not Fine Dining</h3>
                                 </div>
                                 <div class="heart">
                                    <img src="images/heart.png"/>
                                 </div>
                              </div>
                           </div>
                           <div class="slider-item">
                              <div class="main-coverslider">
                                 <div class="cover-images">
                                    <img src="images/image4.png"/>
                                 </div>
                                 <div class="tcl spa-salon">
                                    <h3>Food Not Fine Dining</h3>
                                 </div>
                                 <div class="heart">
                                    <img src="images/heart.png"/>
                                 </div>
                              </div>
                           </div>
                           <div class="slider-item">
                              <div class="main-coverslider">
                                 <div class="cover-images">
                                    <img src="images/image1.png"/>
                                 </div>
                                 <div class="tcl spa-salon">
                                    <h3>Food Not Fine Dining</h3>
                                 </div>
                                 <div class="heart">
                                    <img src="images/heart.png"/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="left-contant">
                           <h3>Coupons</h3>
                        </div>
                       <div class="landing-slider">
               <div class="cover-slidersection">
                  <div class="slider-second">
                     <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                  </div>
                 <div class="second-slidcont">
                     <ul>
                        <li>Title :</li>
                        <li>Great Deal</li>
                        <li>Coupon Code :</li>
                        <li>C12345678op</li>
                        <li>Discount % :</li>
                        <li>45% </li>
                        <li>Item Name :</li>
                        <li>Item Name</li>
                     </ul>
                  </div> 
               </div>
               <div class="cover-slidersection">
                  <div class="slider-second">
                     <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                  </div>
                  <div class="second-slidcont">
                     <ul>
                        <li>Title :</li>
                        <li>Great Deal</li>
                        <li>Coupon Code :</li>
                        <li>C12345678op</li>
                        <li>Discount % :</li>
                        <li>45% </li>
                        <li>Item Name :</li>
                        <li>Item Name</li>
                     </ul>
                  </div>
               </div>
               <div class="cover-slidersection">
                  <div class="slider-second">
                     <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                  </div>
                 <div class="second-slidcont">
                     <ul>
                        <li>Title :</li>
                        <li>Great Deal</li>
                        <li>Coupon Code :</li>
                        <li>C12345678op</li>
                        <li>Discount % :</li>
                        <li>45% </li>
                        <li>Item Name :</li>
                        <li>Item Name</li>
                     </ul>
                  </div> 
               </div>
               <div class="cover-slidersection">
                  <div class="slider-second">
                     <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                  </div>
                <div class="second-slidcont">
                     <ul>
                        <li>Title :</li>
                        <li>Great Deal</li>
                        <li>Coupon Code :</li>
                        <li>C12345678op</li>
                        <li>Discount % :</li>
                        <li>45% </li>
                        <li>Item Name :</li>
                        <li>Item Name</li>
                     </ul>
                  </div> 
               </div>
               <div class="cover-slidersection">
                  <div class="slider-second">
                     <a data-toggle="modal" data-target="#great-deal" > <img src="images/pizza great deal.png"/></a>
                  </div>
                 <div class="second-slidcont">
                     <ul>
                        <li>Title :</li>
                        <li>Great Deal</li>
                        <li>Coupon Code :</li>
                        <li>C12345678op</li>
                        <li>Discount % :</li>
                        <li>45% </li>
                        <li>Item Name :</li>
                        <li>Item Name</li>
                     </ul>
                  </div> 
               </div>
            </div>
                  </section>
               </div>
            </div>
         </div>
      </section>
                    <Footer />
                </body>
            </div>
        )
    }
}
