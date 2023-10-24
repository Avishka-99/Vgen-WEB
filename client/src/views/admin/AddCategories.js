import React from 'react';
import "../../styles/Admin/Categories.css";

export default function Riders() {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const currentDate = new Date();
	const dayOfWeek = daysOfWeek[currentDate.getDay()];
	const dayOfMonth = currentDate.getDate();
	const month = months[currentDate.getMonth()];
	const year = currentDate.getFullYear();
	const formattedDate = `${dayOfWeek} ${dayOfMonth.toString().padStart(2, '0')},  ${month} ${year}`;

	return (
	  <div className="Cat-Container">
		<div className="Cat-Top">
		  <div className="Cat-TopLeft">
			<div className="Cat-TopLine">
			  <div className="Cat-HeadingText">VGen Categories</div>
			  <div className="Cat-NotificationButton"></div>
			</div>
			<div>
			  <div className="Cat-DateText">{formattedDate}</div>
			</div>
			<div className="Cat-SubContainer">
			  <div className="Cat-TopLeftContainer">
				<div className="Cat-BodyText">Contact</div>
			  </div>
			</div>
			<div className="Cat-SubContainer">
			</div>
			<div className="Cat-Bottom">
			  <div className="Cat-BottomLeft">
				<div className="Cat-MidLine"></div>
				<div>
				  <div className="Cat-SubHeadingText">Recent Activities</div>
				</div>
				<div className="Cat-SubContainer">
				  <div className="Cat-BottomLeftContainer">
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="Cat-Right">
			<div className="Cat-SubHeadingText">
			  Web Surfers
			</div>
			<div>
			  <div className="Cat-RightContainer">
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
}
