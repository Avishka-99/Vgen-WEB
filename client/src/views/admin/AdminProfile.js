import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Profile.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function Riders() {
  return (
    <div className="Prof-Container">
      <div className="Prof-Top">
        <div className="Prof-TopLeft">
          <div className="Prof-TopLine">
            <div className="Prof-HeadingText">VGen Profile</div>
            <div className="Prof-NotificationButton"></div>
          </div>
          <div>
            <div className="Prof-DateText">Friday 20 October 2023</div>
            <div className="Prof-EditButton">Edit Profile</div>
          </div>
          <div className="Prof-SubContainer">
            <div className="Prof-TopLeftContainer">
              <div className="Prof-BodyText">Contact</div>
            </div>
          </div>
          <div className="Prof-SubContainer">
          </div>
          <div className="Prof-Bottom">
            <div className="Prof-BottomLeft">
              <div>
                <div className="Prof-SubHeadingText">Recent Activities</div>
              </div>
              <div className="Prof-SubContainer">
                <div className="Prof-BottomLeftContainer">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Prof-Right">
          <div className="Prof-SubHeadingText">
            Your Activities
          </div>
          <div className="Prof-FilterButton">Filter by Date</div>
          <div>
            <div className="Prof-RightContainer">
             <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
              <div className="Prof-Divider"></div>
              <div className="Prof-Detail">
                <div className="Prof-DetailLeft">
                  <span>Some Information</span>
                </div>
                <div className="Prof-DetailRight">
                  <div>
                     <time className="DetailDate">2023.10.20</time>
                  </div>
                  <div>
                     <time className="DetailTime">10:30 AM</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}