import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComp = () => {
  return (
    <header className="dashboard-header">
      <div className="">
        <nav className="navbar container-fluid">
          <NavLink to="/" className="nav-brand">
            <img src="/logo.svg" alt="" />
          </NavLink>
          {/* <ul className="nav">
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Profile
              </NavLink>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
