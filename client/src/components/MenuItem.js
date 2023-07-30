import React from 'react'
import MenuItemIcon from './MenuItemIcon'
export default function MenuItem(props) {
  return (
    <div className='menuItem' onClick={() => props.fun(props.link)}  tabIndex={props.index}>
      <MenuItemIcon  icon={props.icon} className="menuIcon"  />
      <p>{props.name}</p>
    </div>
  )
}
