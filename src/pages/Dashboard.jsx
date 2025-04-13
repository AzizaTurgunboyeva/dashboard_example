import React, { Fragment } from "react";

import { Link, Outlet } from "react-router";
import Navbar from "../layout/navbar";








function Dashboard() {
  return (
    <Fragment>
      <div className="h-[100vh] m-1.5  ">
        < Navbar/>
        <div className="flex">
          <div className="border-t-0 text-xl  w-[200px] text-[#24feee] bg-[#262d6d]">
            <ul className="p-4 ">
              <li className="p-1">
                <Link to={"/dashboard"}> Home</Link>{" "}
              </li>
              <li className="p-1">
                <Link to={"/dashboard/users"}> Users</Link>
              </li>
              <li className="p-1">
                <Link to={"/dashboard/products"}> Products</Link>
              </li>
              <li className="p-1">
                <Link to={"/dashboard/counter"}> Counter</Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-1">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Dashboard