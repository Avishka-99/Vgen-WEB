import React from "react";
import MenuItemIcon from "./MenuItemIcon";

const MenuItem = (props) => {
  return (
    <div
      className={`menuItem ${props.active === props.index ? 'active' : ''}`}
      onClick={() => props.fun(props.link, props.index)}
      tabIndex={props.index}
      style={props.style}
    >
      <MenuItemIcon
        icon={props.icon}
        color={props.active === props.index ? "#03C988" : "#6F767F"}
        className="menuIcon"
      />
      {props.label && <span className="menuLabel" style={props.labelMargin}>{props.label}</span>}
    </div>
  );
};

export default MenuItem;

