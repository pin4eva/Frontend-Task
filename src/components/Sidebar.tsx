import React from "react";
import { NavLink } from "react-router-dom";

const SidebarComp = () => {
  return (
    <aside className="dashboard-aside">
      <ul className="nav flex flex-column container">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Dashoard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/trl" className="nav-link">
            TRL
          </NavLink>
        </li>
        {/* <li className="nav-item"><a href="/" className="nav-link">Pro</a></li> */}
      </ul>
    </aside>
  );
};

export default SidebarComp;
