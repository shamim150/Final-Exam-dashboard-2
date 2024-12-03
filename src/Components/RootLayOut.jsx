import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const RootLayOut = () => {
  return (
    <div className=" h-screen py-16 ">
      <div className=" shape relative flex w-[1153px] mx-auto h-full rounded-3xl overflow-hidden">
        <Sidebar />
        <main className="h-full w-full pr-8 grid grid-rows-7">
          <h2 className="py-8  border-b text-center font-bold text-2xl ">Heading Text</h2>
          <div className="  row-span-6 pl-9 pt-4  pb-7 flex flex-col justify-between">
            <div className="top h-full w-full">
              <Outlet />
            </div>
            <div className="bottom w-full h-8 rounded-3xl bg-red-50 mt-5">
                
            </div>
          </div>
          {/* <Outlet /> */}
        </main>
      </div>
    </div>
  );
};

export default RootLayOut;
