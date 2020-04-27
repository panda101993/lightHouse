import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SavedCoupansRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
    }

    render() {
        return (
            <div>



  <div class="tab-pane fade show active " id="Saved" role="tabpanel" aria-labelledby="Saved-tab">
  <div class="">
      <div class="cover-clander-btn mt-5">
          <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-12">
                  <div class="form-group pos-rel">
                      <label for="">From</label>
                      <input type="text" class="form-control" id="" aria-describedby="" placeholder="dd/mm/yy" />
                      <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i>
                  </div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-12">
                  <div class="form-group pos-rel">
                      <label for="">To</label>
                      <input type="text" class="form-control" id="" aria-describedby="" placeholder="dd/mm/yy" />
                      <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i>
                  </div>
              </div>


              <div class="col-lg-8 col-md-6 col-sm-12">
                  <div class="copn-btnsec">
                      <button class="btn btn-theme">Submit</button>
                      <button class="btn btn-theme">Reset</button>
                  </div>
              </div>

          </div>
      </div>

      <div class="main-covercoupn my-4">
          <ul>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                      <a href="103-add-coupon.html"><button class="btn btn-three active">Edit</button></a>
                  </div>
              </li>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                      <a href="103-add-coupon.html"><button class="btn btn-three active">Edit</button></a>
                  </div>
              </li>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                      <a href="103-add-coupon.html"><button class="btn btn-three active">Edit</button></a>
                  </div>
              </li>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                      <a href="103-add-coupon.html"><button class="btn btn-three active">Edit</button></a>
                  </div>
              </li>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                      <a href="103-add-coupon.html"><button class="btn btn-three active">Edit</button></a>
                  </div>
              </li>
              <li>
                  <div class="coupon-cover">
                      <img src={require("../assets/images/coupon-1.png")} alt="" />
                  </div>
                  <div class="preview-section pre-center">
                      <a href="103-add-coupon.html"><button class="btn btn-three active">Edit</button></a>
                  </div>
              </li>
          </ul>
      </div>
  </div>

</div>

</div>
        )
    }
}
