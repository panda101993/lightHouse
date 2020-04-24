import React , { useState }from 'react' 
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
//import ImageName from '../assets/ImageIcon';
import ImageIcon from '../assets/ImageIcon';
export default function ImageDashboard ( props )  {  
    const [count ,setCount] = useState(false)
    const [modalStatus,setModal] =useState(false)
     const { ImageName,ImageA} = props 
    console.log( "hello imageAbc ",props) 
  // console.log("hello AbcData",ImageA.src)
    return ( 
           <> 
          <body>  
                  
               <div class="slider-item">
                                    <div class="main-coverslider">
                                       {/* <div class="cover-images00"> */}
                                   <Link to="/AllRetailers" >       <img  
                                          style={{width:"90%",height:"70%" }} 
                                          src={ImageIcon.Image1} 
                                          // src={require('../assets/images/image1.png')} 
                                       // src={ImageA}
                                            data-toggle="modal" data-target="#wishlist" /> </Link>  
                                       {/* </div> */}
                                       <div class="tcl00">
                                          <p> {ImageName} </p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" > 
                                          
                                          <img src={require('../assets/images/redheart.png')} onClick={() =>setModal(!modalStatus)} /></a>
                                        
                                        </div>
                                    </div>
                </div>   
                <Modal isOpen={modalStatus} 
                // toggle={this.toggle}
                 style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                  <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Item removed from the wishlist !</h5>
               </div>
               <div class="modal-body ok">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => setModal(!modalStatus) } > OK </button>
               </div>
            </div>

                  </ModalBody>
               </Modal>   
            </body>
             </>
            

      
    )
}


