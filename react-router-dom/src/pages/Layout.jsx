import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="content">
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
