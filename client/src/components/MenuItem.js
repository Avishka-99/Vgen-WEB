import React from "react";
import MenuItemIcon from "./MenuItemIcon";
export default function MenuItem(props) {
  return (
    <div className="menuItem" onClick={() => props.fun(props.link, props.index)} tabIndex={props.index}>
      <MenuItemIcon icon={props.icon} color={props.active == props.index ? "#FB9300" : "#6F767F"} className="menuIcon" />
    </div>
  );
}
