import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import WishlistImageComponent from './WishlistImageComponent';

export class MyWishlistEndUser extends Component {  
   constructor(props) {
      super(props)

      this.state = {
       
         modalStatus: false,
        
      }
   }

    render() {
        return (
            <div>
              <h3 class="info_c3">My Wishlist</h3>
                        <div class="name_c3">
                        </div>
                        <section class="second">
                           <div class="container-fluid">
                              <div class="left-contant00">
                                 <h3>Marts</h3>
                              </div>
                              <div class="wish-slider"> 
                             <WishlistImageComponent  />
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img 
                                          // src="images/image1.png"  
                                          src={require('../assets/images/image1.png')}
                                            data-toggle="modal" data-target="#wishlist" />
                                       </div>
                                       <div class="tcl00">
                                          <p>TCL E-Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" > 
                                          
                                          <img src={require('../assets/images/redheart.png')} onClick={() => this.setState({ modalStatus: !this.state.modalStatus })} /></a>
                                        
                                        </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image2.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Hotel Treebo Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image3.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Nebraska Furniture Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image4.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>SGBL Mega Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image1.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>TCL E-Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="left-contant00">
                                 <h3>Retailers</h3>
                               
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer1.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>TCL E-Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer2.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>Hotel Treebo Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer3.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>Nebraska Furniture Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/retailer4.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>SGBL Mega Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Retailer Name</p>
                                          <p>Nebraska Furniture Mart</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="left-contant00">
                                 <h3>Categories</h3>
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image6.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Boddy Massage</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image7.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Hair Cutting</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Food Not Fine Dining</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                         <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"  /></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="left-contant00">
                                 <h3>Sub categories</h3>
                              </div>
                              <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /> </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image6.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                        <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image7.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <h3>Sub Category Name</h3>
                                          <h3>Category Name</h3>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>  
                        <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                  <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Item removed from the wishlist !</h5>
               </div>
               <div class="modal-body ok">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })} >OK</button>
               </div>
            </div>

                  </ModalBody>
               </Modal>   
            </div>
        )
    }
}

export default MyWishlistEndUser
