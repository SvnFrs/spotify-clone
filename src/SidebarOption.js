import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, Icon }) {
  const clicked = () => {
    console.log('clicked');
  }
  return (
    <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? <h4>{title}</h4> : <p onClick={clicked} >{title} </p>}
    </div>
  );
}

export default SidebarOption;
