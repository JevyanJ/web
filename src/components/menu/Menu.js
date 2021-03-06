import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const items = [
  {
    name: "LinkTree",
    address: "/",
    icon: "link"
  },
  {
    name: "Setup",
    address: "/setup",
    icon: "computer"
  }
];

export default function Menu(version) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  console.log(version);
  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <div className="menu">
      {isNavExpanded &&
        items.map(element => (
          <Link id="link" onClick={handleNavExpanded} to={element.address}>
            <div id="element">
              <i class="material-icons">{element.icon}</i>
              <div>{element.name}</div>
            </div>
          </Link>
        ))}
      {isNavExpanded && <div id="menu-footer">Ver: {version["version"]}</div>}
      <button className="menu-button" onClick={handleNavExpanded}>
        <i class="material-icons">menu</i>
      </button>
    </div>
  );
}
