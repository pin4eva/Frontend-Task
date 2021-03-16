import HeaderComp from "components/HeaderComp";
import SidebarComp from "components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <HeaderComp />
      <div className="wrapper mt-2">
        <SidebarComp />
        <div className="dashboard-main">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
