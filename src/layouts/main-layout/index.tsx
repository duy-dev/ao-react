import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

const MainLayout: React.FC = () => {
  return (
    <section id="ao-main-layout">
      <div className="test">
        <h1>Main Layout</h1>
      </div>
      <Outlet />
    </section>
  );
};

export default MainLayout;
