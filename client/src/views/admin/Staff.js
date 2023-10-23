import React, {useEffect, useState} from 'react';
import StaffRegistrationForm from './staffregisterform';
import '../../styles/Admin/Staff.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import Axios from '../../api/Axios';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function Staff() {
	const [showFilterMenu, setShowFilterMenu] = useState(false);
	
	const toggleFilterMenu = () => {
		setShowFilterMenu(!showFilterMenu);
	};

	const [showFilterMenu2, setShowFilterMenu2] = useState(false);
	
	const toggleFilterMenu2 = () => {
		setShowFilterMenu2(!showFilterMenu2);
	};
	
    return (
        <div className="Staff-Container">
          <div className="Staff-Top">
             <div className="Staff-TopLeft">
                <div className="Staff-TopLine">
                    <div className="Staff-HeadingText">VGen Staff</div>    
				    <div className="Staff-NotificationButton"></div>
                </div>
                <div>
                  <div className="Staff-DateText">Monday 23 October 2023</div>
				  <div className="Staff-AddButton">Add Member</div>
                </div>
                <div className="Staff-SubContainer">
				  <div class="Home-tableArea">
			        <table class="Home-dbTable">
                      <thead>
                        <tr>
                          <th>Staff ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>NIC</th>
                          <th>Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
                        <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
                        <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
                        <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
                        <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
					    <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
					    <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
					    <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
					    <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
                        <tr>
						  <td>101</td>
                          <td>Daweendri</td>
                          <td>Himasha</td>
                          <td>123456789v</td>
                          <td>071-1234567</td>
                        </tr>
                      </tbody>
                    </table>
			      </div>
                </div>
            <div className="Staff-Bottom">
            <div className="Staff-BottomLeft">
              <div>
                <div className="Staff-SubHeadingText">Staff Growth Over Time</div>
                <div className="Staff-FilterButton1" onClick={toggleFilterMenu}>
                  Filter
                  {showFilterMenu && (
                    <div className="Staff-Filter-menu">
                      <div className="Staff-Filter-container">Monthly</div>
                      <div className="Staff-Filter-container">Yearly</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="Staff-SubContainer">
                <div className="Staff-BottomLeftContainer">
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="Staff-Right">
                <div className="Staff-SubHeadingText">
                    Active Status
				<div className="Staff-FilterButton2" onClick={toggleFilterMenu2}>
                  Filter
                  {showFilterMenu2 && (
                    <div className="Staff-Filter-menu2">
                      <div className="Staff-Filter-container">Active Now</div>
                      <div className="Staff-Filter-container">Active 5 mins Ago</div>
					  <div className="Staff-Filter-container">Mont</div>
                      <div className="Staff-Filter-container">Yearly</div>
                    </div>
                  )}
                </div>
                </div>
                <div>
                  <div className="Staff-RightContainer">
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
}
