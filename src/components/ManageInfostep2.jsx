import React, { Component } from 'react'

export class ManageInfostep2 extends Component {
    render() {
        return (
            <div>
                     <h3 class="info_c3">Information Required For Weekly Email Sign Up</h3>
                        <div class="name_c3">
                           <label>Email <img src="images/about-icon.png" style="max-width: 20%"/></label>
                           <span><input type="text" class="form-control email_c3" placeholder=""/></span>
                           <label class="home_c3">Home Address</label>
                           <ul class="current_c3">
                              <li><img src="images/location-512.png" /></li>
                              <li><button class="use_my"><img src="images/Asset_12-512.png" />Use my current location</button></li>
                           </ul>
                           <h5 class="enter_cs3">Enetr your location details</h5>
                           <label>Pin Code*</label>
                           <span><input type="text" class="form-control" placeholder="Pin Code"/></span>
                           <label>State*</label>
                           <select class="form-control">
                              <option>UP</option>
                              <option>Bihar</option>
                           </select>
                           <label>City*</label>
                           <span><input type="text" class="form-control" placeholder="City" /></span>
                           <label>
                           Address*
                           </label>
                           <span> <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea></span>
                           <ul class="button_cs">
                              <li class="cancel_c3"><button class="save">Skip</button></li>
                              <li><button class="save">Submit</button></li>
                           </ul>
                        </div>  
            </div>
        )
    }
}

export default ManageInfostep2
