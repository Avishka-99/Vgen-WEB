import React from 'react'
import "../../styles/staff/staffhome.css";
import "../../styles/staff/staffpayments.css";
import "../../styles/staff/staffcomplaints.css";

export default function Complains() {
  return (
    <div className="AdminContainer">
      <div class="top">
        <div class="top-left">
          <div class="topline">
            <div class="headingtext">VGen User Complaints</div>
            <div class="notification-btn"></div>
          </div>

          <div class="datetext">Tuesday 07 July 2023</div>

          <div class="QAtitle">Quick Access</div>

          <div class="complaintssubcontainer">
            <div class="complaintcardrow">
              <div class="complaintscardcontainer">
                <div class="complaintscardLeft com-icon1">
                </div>
                <div class="complaintscardRight">
                  <div class="complaintscardRightTop">
                    <div class="comcard-name">
                      Customer <br/> Complaints
                      <div class="comcard-new">
                        07 New Complaints
                      </div>
                    </div>
                    <div class="comcard-arrowlink">
                      {/* <FontAwesomeIcon icon={solid("circle-arrow-right")} /> */}
                    </div>
                  </div>
                  <div class="comcard-pending">
                    <div class="comcard-pendinghead"> Pending to Response </div>
                    <div class="comcard-pendingcount"> 11 </div>
                  </div>
                </div>
              </div>
              <div class="complaintscardcontainer">
                <div class="complaintscardLeft com-icon2">
                </div>
                <div class="complaintscardRight">
                  <div class="complaintscardRightTop">
                    <div class="comcard-name">
                      Delivery <br/> Complaints
                      <div class="comcard-new">
                      <span style={{ color: '#8b7e74', fontStyle: 'italic' }}>No New Complaints</span>
                      </div>
                    </div>
                    <div class="comcard-arrowlink">
                      {/* <FontAwesomeIcon icon={solid("circle-arrow-right")} /> */}
                    </div>
                  </div>
                  <div class="comcard-pending">
                    <div class="comcard-pendinghead"> Pending to Response </div>
                    <div class="comcard-pendingcount"> 07 </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="com-card-seperate"></div>
            <div class="complaintcardrow">
            <div class="complaintscardcontainer">
                <div class="complaintscardLeft com-icon3">
                </div>
                <div class="complaintscardRight">
                  <div class="complaintscardRightTop">
                    <div class="comcard-name">
                      Restaurant <br/> Complaints
                      <div class="comcard-new">
                        14 New Complaints
                      </div>
                    </div>
                    <div class="comcard-arrowlink">
                      {/* <FontAwesomeIcon icon={solid("circle-arrow-right")} /> */}
                    </div>
                  </div>
                  <div class="comcard-pending">
                    <div class="comcard-pendinghead"> Pending to Response </div>
                    <div class="comcard-pendingcount"> 21 </div>
                  </div>
                </div>
              </div>
              <div class="complaintscardcontainer">
                <div class="complaintscardLeft com-icon4">
                </div>
                <div class="complaintscardRight">
                  <div class="complaintscardRightTop">
                    <div class="comcard-name">
                      Manufacturer <br/> Complaints
                      <div class="comcard-new">
                        20 New Complaints
                      </div>
                    </div>
                    <div class="comcard-arrowlink">
                      {/* <FontAwesomeIcon icon={solid("circle-arrow-right")} /> */}
                    </div>
                  </div>
                  <div class="comcard-pending">
                    <div class="comcard-pendinghead"> Pending to Response </div>
                    <div class="comcard-pendingcount"> 25 </div>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>

        <div class="top-right">
          <div class="topline">
            <div class="subheadingtext">[Title Here]</div>
            <div class="filter-btn">Today</div>
          </div>

          <div class="top-right-container">[Content Here]</div>
        </div>
      </div>

      <div class="bottom">
        
        {/* <div class="bottom-right">
          <div class="midline">
            <div class="subheadingtext">[Title Here]</div>
            <div class="filter-btn">Today</div>
          </div>

          <div class="bottom-right-container">[Content Here]</div>
        </div> */}
      </div>
    </div>
  )
}