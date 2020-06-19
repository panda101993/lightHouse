import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';

export default function ImageDashboard(props) {
   const [count, setCount] = useState(false)
   const [modalStatus, setModal] = useState(false)
   const [modalStatus1, setModal1] = useState(false)
   const { ImageName, ImageA, LinkId, heartImage, MartId,Token } = props
   console.log("hello imageAbc ", props)

   const  addToFavouriteMarts = (MartId) => {
      try {
         console.log("MartId--",MartId)
         console.log("MartId----",props.Token)
         
         apiRequest({ martId:MartId }, '/user/wishListMarts', 'POST', props.Token)
            .then((resp) => {
               console.log('responsemartadded', resp);
               switch (resp.status) {
                  case (200):
                      {
                      if (resp.data.responseCode == 200) {
                        ToasterFunction("success", resp.data.responseMessage);
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
      } catch (error) {
         console.log('errorresponse', error)
         ToasterFunction("error", "Network error, please contact the administrator");
  
      }
      setModal1(false)
   }

   return (
      <>
         <body>

            <div class="slider-item">
               <div class="main-coverslider">
                  <Link to={LinkId} >
                     <img
                        style={{ width: "100%", height: "100%" }}
                        src={ImageA}
                        data-toggle="modal" data-target="#wishlist" /> </Link>
                  <Link to={`/WebsiteRetailer/${MartId}`}>
                     <div class="tcl00">
                        <p> {ImageName} </p>
                     </div> </Link>
                  <div class="heart">
                     <a data-toggle="modal" data-target="#coup-rmv-success" >

                        <img
                           src={heartImage}
                           onClick={() => setModal1(!modalStatus1)} />
                           </a>
                  </div>
               </div>
            </div>
            <Modal isOpen={modalStatus}
               style={{ top: "190px", }}
            >
               <ModalBody>
                  <div class="modal-content">
                     <div class="modal-header locationsethead">
                        <h5>Mart removed from the wishlist !</h5>
                     </div>
                     <div class="modal-body ok">
                        <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => setModal(!modalStatus)} > OK </button>
                     </div>
                  </div>
               </ModalBody>
            </Modal>

            <Modal isOpen={modalStatus1}
               style={{ top: "190px", }}
            >
               <ModalBody>
                  <div class="modal-content">
                     <div class="modal-header locationsethead">
                        <h5>Mart mark as a favourite !</h5>
                     </div>
                     <div class="modal-body ok">
                        <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => addToFavouriteMarts(MartId)}  > OK </button>
                     </div>
                  </div>
               </ModalBody>
            </Modal>
         </body>
      </>



   )
}


