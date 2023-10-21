import React from 'react'
import "../../styles/staff/staffhome.css";
import "../../styles/staff/staffpayments.css";
import "../../styles/staff/staffcomplaints.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Import the necessary components
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Rating Data
const data = [
  { name: '✩', value: 100 },
  { name: '✩✩', value: 150 },
  { name: '✩✩✩', value: 200 },
  { name: '✩✩✩✩', value: 250 },
  { name: '✩✩✩✩✩', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function Complaints() {
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
            <div class="subheadingtext">Overall System Rating</div>
            <div class="filter-btn">Last Week</div>
          </div>

          <div class="com-top-right-container">
            <div className="pie-chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={50}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="pie-chart-legend-container">
            <div className="legend">
              {data.map((entry, index) => (
                <div key={`legend-${index}`} className="legend-item">
                  <div className="legend-square" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  {entry.name}
                </div>
              ))}
            </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-right">
              <div class="midline">
                <div class="subheadingtext">FAQs</div>
                <div class="faq-ctl-btn">
                  {/* 
                  icon1
                  icon2
                  icon3 
                  */}
                </div>
                <div class="seeall-btn">See All FAQs</div>
              </div>
              <div class="bottom-right-container">
                <table class="faq-tbl">
                  <tr>
                    <td class="faq-tbl-tdL"><div class="faq-QHead"> Q : </div></td>
                    <td class="faq-tbl-tdR">
                      <div class="faq-Q">
                        How can I find vegan raw products using this system?
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="faq-tbl-tdL"><div class="faq-AHead"> A : </div></td>
                    <td class="faq-tbl-tdR">
                    <div class="faq-A">
                      You can search for vegan raw products by product name or manufacturer.
                    </div>
                    </td>
                  </tr>
                </table>
                <br />
                <table class="faq-tbl">
                  <tr>
                    <td class="faq-tbl-tdL"><div class="faq-QHead"> Q : </div></td>
                    <td class="faq-tbl-tdR">
                      <div class="faq-Q">
                        How can I request to promote my farm business through the system?
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="faq-tbl-tdL"><div class="faq-AHead"> A : </div></td>
                    <td class="faq-tbl-tdR">
                    <div class="faq-A">
                    To promote your farm business, log in, provide details in the "Request to Promote Business" section, and our system staff will review and advise on promotions.
                    </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}