import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {  Modal, ModalBody } from 'reactstrap';
import apiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';

export default function ImageDashboard(props) {
   // const [count, setCount] = useState(false)
   const [modalStatus, setModal] = useState(false)
   // const [modalStatus1, setModal1] = useState(false)
   const [heartStatusNOW, setheartStatusNOW] = useState(props.heartImage)
   const { ImageName, ImageA, LinkId, heartImage, MartId,Token,RetailerId,Id,UniqueId,typeData,typePage,blankHeart,redHeart,reloadApi} = props
   // console.log("hello imageAbc ", props)
   // console.log("typePage--",typePage)


   const  addToFavouriteAll = (UniqueId,Id,typeData) => {
      // console.log('Id------',Id);
      // console.log("UniqueId===",UniqueId)
       if(typeData == 'mart'){
         try {
            apiRequest({ uniqueId: UniqueId, martId: Id }, '/user/wishListMarts', 'POST', props.Token)
               .then((resp) => {
                  console.log('responsemartadded', resp);
                  switch (resp.status) {
                     case (200):
                         {
                         if (resp.data.responseCode == 200) {
                           ToasterFunction("success", resp.data.responseMessage);
                           setheartStatusNOW(!heartStatusNOW)
                           // props.reloadApi
            
                         }
                          else if (resp.data.responseCode == 404) {
                             ToasterFunction("info", resp.data.responseMessage);
         
                         }
                         else if (resp.data.responseCode == 500) {
                             ToasterFunction("error", resp.data.responseMessage);
         
                         }
                     }
                     break;
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
         setModal(false)
         // window.location.reload();

      }
      else if (typeData == 'retailer') {
         try {
            console.log("retailerid", Id)
            console.log("retailerid---", props.Token)

            apiRequest({ retailerId: Id }, '/user/wishListRetailers', 'POST', props.Token)
               .then((resp) => {
                  console.log('responseretaileradded', resp);
                  switch (resp.status) {
                     case (200):
                        {
                           if (resp.data.responseCode == 200) {
                              ToasterFunction("success", resp.data.responseMessage)
                              setheartStatusNOW(!heartStatusNOW)

                           }
                           else if (resp.data.responseCode == 404) {
                              ToasterFunction("info", resp.data.responseMessage);

                           }
                           else if (resp.data.responseCode == 500) {
                              ToasterFunction("error", resp.data.responseMessage);

                           }
                        }
                        break;

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
         setModal(false)
         // window.location.reload(false);
      }

         else if(typeData == 'category') {
            try {
               // console.log("categoryid",Id)
               // console.log("categoryiiiid",UniqueId)
               // console.log("categoryid---",props.Token)
               
               apiRequest({ uniqueId:UniqueId, categoryId:Id }, '/user/wishListCategories', 'POST', props.Token)
                  .then((resp) => {
                     console.log('responsrcategoryadded', resp);
                     switch (resp.status) {
                        case (200):
                            {
                            if (resp.data.responseCode == 200) {
                              ToasterFunction("success", resp.data.responseMessage);
                              setheartStatusNOW(!heartStatusNOW)
                             props.reloadApi()
                              // window.location.reload(false);
                           }
                           else if (resp.data.responseCode == 404) {
                              ToasterFunction("info", resp.data.responseMessage);

                           }
                           else if (resp.data.responseCode == 500) {
                              ToasterFunction("error", resp.data.responseMessage);

                           }
                        }
                        break;
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
         setModal(false)
         // window.location.reload(false);
      }
      else if (typeData == 'subCategory') {
         try {
            console.log("subCategory", Id)
            console.log("subCategory---", props.Token)

            apiRequest({ subCategoryId: Id }, '/user/wishListSubCategories', 'POST', props.Token)
               .then((resp) => {
                  console.log('responseSubcategoryadded', resp);
                  switch (resp.status) {
                     case (200):
                        {
                           if (resp.data.responseCode == 200) {
                              ToasterFunction("success", resp.data.responseMessage);
                              setheartStatusNOW(!heartStatusNOW)


                           }
                           else if (resp.data.responseCode == 404) {
                              ToasterFunction("info", resp.data.responseMessage);

                           }
                           else if (resp.data.responseCode == 500) {
                              ToasterFunction("error", resp.data.responseMessage);

                           }
                        }
                        break;
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
         setModal(false)
         // window.location.reload(false);
      }



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
                        data-toggle="modal" data-target="#wishlist" />
                  </Link>
                  {
                     typeData == 'mart'
                        ?
                        <Link to={`/WebsiteMart/${MartId}`}>
                           <div class="tcl00">
                              <p> {ImageName} </p>
                           </div>
                        </Link>
                        :
                        typeData == 'retailer'
                           ?
                           <Link to={`/WebsiteRetailer/${RetailerId}`}>
                              <div class="tcl00">
                                 <p> {ImageName} </p>
                              </div>
                           </Link>
                           :
                           <div class="tcl00">
                              <p> {ImageName} </p>
                           </div>
                  }

                  <div class="heart">
                     <a data-toggle="modal" data-target="#coup-rmv-success" >

                        <img
                           // src={heartStatusNOW==true?redHeart:blankHeart}
                           src={heartImage}
                           onClick={() => {
                              // console.log("heartImage==>",heartStatusNOW)
                             
                             
                              typePage
                                 ?
                                 setModal(true)
                                 :
                                 addToFavouriteAll(UniqueId, Id, typeData)
                           }

                           }
                        />
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
                        <h5>Are you sure you want to remove this from wishlist ?</h5>
                     </div>
                     <div class="modal-body ny">
                        <button type="button" class="btn setloc-" type="submit" data-dismiss="modal" onClick={() => setModal(false)}>No</button>
                        <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#rmvwish" onClick={() => addToFavouriteAll(UniqueId, Id, typeData)}>Yes</button>
                     </div>
                  </div>
               </ModalBody>
            </Modal>
         </body>
      </>



   )
}


