import React from "react";
import BottomSidebar from "./Sidebar/BottomSidebar";
import TopSidebar from "./Sidebar/TopSidebar";

export default function Sidebar() {
  return (
    <div className="w-1/5 space-y-2 ">
      <TopSidebar />
      <BottomSidebar />
    </div>
  );
}
