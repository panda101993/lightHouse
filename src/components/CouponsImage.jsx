import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class CouponsImage extends Component { 
    constructor(props) {
        super(props)
  
        this.state = {
         
           modalStatus: false,
           modalStatusImage:false
        }
     }
    render() {
        return (
            <div>
                {/* <div class="col-lg-4 col-md-4 col-sm-12"> */}
                              <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
                                 <figure class="coupon-sec">
                                    {/* <img src="images/pizza great deal.png" /> */} 
                                    <img src={require("../assets/images/pizza great deal.png")} onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage })} />
                                 </figure>
                              </div>
                              {/* <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup"   onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Delete</button> */}
                           {/* </div>   */}

                           <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                
                 {/* <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Are you sure you want to remove this
                     from wishlist ?
                  </h5>
               </div>
               <div class="modal-body ny">
                  <button type="button" class="btn setloc-" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>No</button>
                  <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#rmvwish" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Yes</button>
               </div>
            </div>
            */} 
            
                  </ModalBody>
               </Modal>  
               
               <Modal isOpen={this.state.modalStatusImage} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                  <div class="modal-content offer">
               <div class="modal-body bumoffer">
                  <div class="mainoffer">
                     {/* <img src="images/burger1.png" class="bur-img" /> */} 
                     <img src={require("../assets/images/burger1.png")} class="bur-img" />
                     <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5>
                     <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6>

                     <div class="cover-share">
                        <a data-toggle="modal" data-target="#icon" data-dismiss="modal">
                             {/* <img src="images/arrow back.png" class="ba" />  */}
                             <img src={require("../assets/images/arrow back.png")} class="ba" /> 
                             </a>
                     </div>
                  </div>
                  <div class="modal-body ny">
                     <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-svd-success" onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage })} >Delete</button>
                     <button type="button" class="btn setloc-ap cl" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-wish-success" onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage }) }>Don't Show Again</button>
                     <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal"  data-toggle="modal" data-target="#coup-rmv-success"onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage }) } >Call Shop</button>
                     <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage }) }>Navigate to Shop</button>
                  </div>
               </div>
            </div>
              
           
                  </ModalBody>
               </Modal>  


            </div>
        )
    }
}

export default CouponsImage
