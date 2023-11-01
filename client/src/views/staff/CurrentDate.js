import React, { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second

    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const weekday = daysOfWeek[currentDate.getDay()];

  const formattedDate = `${weekday} ${day.toString().padStart(2, '0')} ${month} ${year}`;

  return <div className="datetext">{formattedDate}</div>;
}
