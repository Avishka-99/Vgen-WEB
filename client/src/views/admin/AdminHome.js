import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import "../../styles/Admin/Home.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function AdminHome() {
  return (
    <div className="Home-Container">
      <div className="Home-Top">
        <div className="Home-TopLeft">
          <div className="Home-TopLine">
            <div className="Home-HeadingText">VGen Dashboard</div>
            <div className="Home-NotificationButton"></div>
          </div>
          <div>
            <div className="Home-DateText">Sunday 22 October 2023</div>
          </div>
          <div className="Home-SubContainer">
		    <div className="Home-CardContainer">
              <div className="Home-FirstDivider">
                <div className="Home-CardIconContainer"></div>
                <div className="Home-CountText">Rs.150,000</div>
              </div>
              <div className="Home-SecondDivider">
                <br />
                <span className="Home-CountGoesUp"> +11.15% </span>
                <br />
                Total Sales
              </div>
            </div>
            <div className="Home-CardContainer">
              <div className="Home-FirstDivider">
                <div className="Home-CardIconContainer2"></div>
                <div className="Home-CountText">Rs.250,000</div>
              </div>
              <div className="Home-SecondDivider">
                <br />
                <span className="Home-CountGoesUp"> +11.15% </span>
                <br />
                Total Revenue
              </div>
            </div>
            <div className="Home-CardContainer">
              <div className="Home-FirstDivider">
                <div className="Home-CardIconContainer3"></div>
                <div className="Home-CountText">Rs.45,000</div>
              </div>
              <div className="Home-SecondDivider">
                <br />
                <span className="Home-CountGoesDown"> -1.15% </span>
                <br />
                Total Expenses
              </div>
            </div>
          </div>
          <div className="Home-SubContainer">
          </div>
          <div className="Home-Bottom">
            <div className="Home-BottomLeft">
              <div className="Home-MidLine"></div>
              <div>
                <div className="Home-SubHeadingText">Recent Orders</div>
              </div>
              <div className="Home-SubContainer">
                <div className="Home-BottomLeftContainer">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Home-Right">
          <div className="Home-SubHeadingText">
            Most Ordered
          </div>
          <div>
            <div className="Home-rightContainer">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
