import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Display from "../components/Display";


const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-4/5 pt-6 flex flex-col items-center h-full overflow-auto bg-white font-lexend justify-start">
        <h1 className="text-[#4488AC] font-semibold text-[40px] mds:w-4/5 mds:leading-10 text-center">DESIGN AND FABRICATION OF AN IOT (INTERNET OF THINGS) BASED AUTOMATIC DOOR LOCKING-DEVICE</h1>
        <div className="flex flex-col gap-10 h-full w-full pt-[10%] items-center">
          <Display />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
