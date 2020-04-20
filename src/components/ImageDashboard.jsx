import React , { useState }from 'react' 
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 

export default function ImageDashboard ( props )  {  
    const [count ,setCount] = useState(false)
    const [modalStatus,setModal] =useState(false)
     const { ImageName } = props 
    console.log( "hello image ",props) 

    return ( 
           <> 
          <body> 
          {/* <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        <a href="64-all-retailers.html" > 
                        <img src= {  require( "../../src/assets/images/image1.png") } />  
                        </a>
                     
                     </div>
                     <div class="tcl">
                        <p> {ImageName}</p>
                     </div>
                     <div class="heart">
                       
                        <a data-toggle="modal" data-target="#coup-rmv-success" > 
                       
                     <img src = { { count } ? require( "../../src/assets/images/redheart.png" ) : 
                      require( "../../src/assets/images/heart.png" ) }   onClick ={ () => setCount (true) }  /> </a> 
                     </div>
                  </div>
               </div> */} 
               <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                   <Link to="/AllRetailers" >       <img  
                                          // src="images/image1.png"  
                                          src={require('../assets/images/image1.png')}
                                            data-toggle="modal" data-target="#wishlist" /> </Link>  
                                       </div>
                                       <div class="tcl00">
                                          <p>TCL E-Mart</p>
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


