import React from "react";
import "../../styles/Admin/Analytics.css";

export default function Analytics() {
  return (
    <div className="Analytics-Container">
      <div className="anl-top">
        <div className="anl-topLeft">
          <div className="anl-topLine">
            <div className="anl-headingText">VGen Analytics</div>
            <div className="anl-notificationButton"></div>
          </div>
          <div>
            <div className="anl-dateText">Tuesday 07 July 2023</div>
            <div className="anl-filterButton1">Filter</div>
          </div>
          <div className="anl-subContainer">
            <div className="anl-topLeftContainer">
              <div className="anl-bodyText">Overview of Latest Month</div>
              <div className="anl-summaryButton">Last Month Summary</div>
            </div>
          </div>
          <div className="anl-subContainer">
            <div className="anl-cardContainer">
              <div className="anl-firstDivider">
                <div className="anl-cardIconContainer"></div>
                <div className="anl-countText">Rs.150,000</div>
              </div>
              <div className="anl-secondDivider">
                <br />
                <font className="anl-countGoesUp"> +11.15% </font>
                <br />
                Total Sales
              </div>
            </div>
            <div className="anl-cardContainer">
              <div className="anl-firstDivider">
                <div className="anl-cardIconContainer2"></div>
                <div className="anl-countText">Rs.250,000</div>
              </div>
              <div className="anl-secondDivider">
                <br />
                <font className="anl-countGoesUp"> +11.15% </font>
                <br />
                Total Revenue
              </div>
            </div>
            <div className="anl-cardContainer">
              <div className="anl-firstDivider">
                <div className="anl-cardIconContainer3"></div>
                <div className="anl-countText">Rs.45,000</div>
              </div>
              <div className="anl-secondDivider">
                <br />
                <font className="anl-countGoesDown"> -1.15% </font>
                <br />
                Total Expenses
              </div>
            </div>
          </div>
          <div class="anl-bottom">
            <div class="anl-bottomLeft">
              <div class="anl-midLine"></div>
              <div>
                <div className="anl-subHeadingText">Recent Activities</div>
                <div class="anl-searchBar"></div>
                <div className="anl-filterButton1">Filter</div>
              </div>
              <div className="anl-subContainer">
                <div className="anl-bottomLeftContainer">
                  <div className="anl-activities">
                    <div className="anl-activityIconContainer"></div>
                    <div className="anl-bodyText">Overview of Latest Month</div>
                  </div>
                  <div className="anl-activities">
                    <div className="anl-activityIconContainer"></div>
                    <div className="anl-bodyText">Overview of Latest Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="anl-right">
        <div class="anl-subHeadingText">
            Web Surfers
            <div className="anl-summaryButton">Last Month Summary</div>
          </div>
          <div>
          <div className="anl-topRightContainer">
             <div className="anl-filterButton2">Filter</div>
          </div>
          
          </div>
          <div class="anl-subHeadingText">
            Expenses
            <div className="anl-summaryButton">Last Month Summary</div>
          </div>
          <div>
            <div className="anl-bottomRightContainer">
              <div className="anl-filterButton2">Filter</div>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
}
