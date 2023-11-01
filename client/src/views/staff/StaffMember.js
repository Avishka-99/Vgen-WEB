import React from "react";

const StaffMember = ({ imageUrl, name }) => {
  return (
    <div className="staff-user-info">
      <div className="staff-user-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="staff-user-name">{name}</div>
    </div>
  );
};

export default StaffMember;