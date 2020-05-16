import React , { useState }from 'react' 
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 

//import ImageIcon from '../assets/ImageIcon';
export default function ImageDashboard ( props )  {  
    const [count ,setCount] = useState(false)
    const [modalStatus,setModal] =useState(false)
     const { ImageName,ImageA ,LinkId, heartImage} = props 
    console.log( "hello imageAbc ",props) 
  // console.log("hello AbcData",ImageA.src)
    return ( 
           <> 
          <body>  
                  
               <div class="slider-item">
                                    <div class="main-coverslider">
                                       {/* <div class="cover-images00"> */}
                                   {/* <Link to="/AllRetailers" >    */} 
                                   <Link to={LinkId} >
                                       <img  
                                          style={{width:"100%",height:"100%" }} 
                                       //   src={ImageId.image1} 
                                         // src={require('../assets/images/image1.png')} 
                                        src={ImageA}
                                            data-toggle="modal" data-target="#wishlist" /> </Link>  
                                       {/* </div> */}
                                       <div class="tcl00">
                                          <p> {ImageName} </p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" > 
                                          
                                          <img  
                                          //src={require('../assets/images/redheart.png')}  
                                          src={heartImage}
                                          onClick={() =>setModal(!modalStatus)} /></a>
                                        
                                        </div>
                                    </div>
                </div>   
                <Modal isOpen={modalStatus} 
                // toggle={this.toggle}
                style={{ top: "190px", }}
                >
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


