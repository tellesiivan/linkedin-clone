import React from "react";

export default function BottomSidebar() {
  const recentItem = (topic) => (
    <div className="flex items-start w-full text-sm text-gray-500 cursor-pointer hover:text-gray-300">
      <span className="mr-2">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="px-2 py-3 rounded-lg bg-mainLight">
      <h2 className="mb-2 font-medium text-white">Trending</h2>
      <div className="space-y-1.5">
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("vuejs")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
