import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ManageInfostep3 extends Component {
    render() {
        return (
            <div>
                <div class="tab-pane fade show active" id="Manage-General-Info" role="tabpanel" aria-labelledby="Manage-General-Info-tab">
                        <h3 class="info_c3">Please Provide Information For Personalised  Experience</h3>
                        <div class="name_c301">
                           <div class="age-range">
                              <span class="name">
                                 <label>Age Range</label>
                                 <select class="form-control _range_s3">
                                    <option>20-29</option>
                                    <option>30-39</option>
                                    <option>40-49</option>
                                 </select>
                              </span>
                              <span class="name">
                                 <label>Gender</label>
                                 <select class="form-control _range_s3">
                                    <option>Male</option>
                                    <option>Female</option>
                                 </select>
                              </span>
                           </div>
                           <label>Please Enter Date and Month of  your Birth</label>
                           <div class="your_birth">
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Date</li>
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Month</li>
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
                                          <option>Jan</option>
                                          <option>Feb</option>
                                          <option>Mar</option>
                                          <option>Apr</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <label>Please Enter Date and Month of your Anniversary</label>
                           <div class="your_birth">
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Date</li>
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                              <div class="please_enter">
                                 <ul>
                                    <li class="date">Month</li>
                                    <li class="no">
                                       <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                       <select class="form-control month_c3no">
                                          <option>Jan</option>
                                          <option>Feb</option>
                                          <option>Mar</option>
                                          <option>Apr</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <span class="name">
                           <label>Occupation</label>
                           <input type="text" class="form-control income-stp" placeholder="Occupation" />
                           </span>
                           <span class="name">
                              <label>Income Range</label>
                              <select class="form-control income-stp">
                                 <option>Les then 10.000</option>
                              </select>
                           </span>
                           <span class="name">
                              <label>Homeownership</label>
                              <select class="form-control income-stp">
                                 <option>Rent</option>
                              </select>
                           </span>
                           <span class="name">
                              <label>Educational Level</label>
                              <select class="form-control income-stp">
                                 <option>Master’s Degree or Above</option>
                              </select>
                           </span>
                           <div class="address">
                              <ul class="button_cs">
                                <a href="index.html"><li class="cancel_c300"><button type="button" class="save">Skip</button></li></a>
                              <li> <Link to="/LandingScreen"><button type="button" class="save0">Submit</button></Link> </li>
                              </ul>
                           </div>
                        </div>
                     </div> 
            </div>
        )
    }
}

export default ManageInfostep3
