import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

export default function BodyContainer() {
  return (
    <div className="flex flex-row w-full p-3 space-x-3">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}
