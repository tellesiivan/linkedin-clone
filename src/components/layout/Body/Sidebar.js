import React from "react";
import BottomSidebar from "./sidebar/BottomSidebar";
import TopSidebar from "./sidebar/TopSidebar";

export default function Sidebar() {
  return (
    <div className="w-1/5 space-y-2 ">
      <TopSidebar />
      <BottomSidebar />
    </div>
  );
}
