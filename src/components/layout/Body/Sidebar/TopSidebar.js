import React from "react";
import Avatar from "../../../reusable/Avatar";

export default function TopSidebar() {
  return (
    <div className="overflow-hidden rounded-lg bg-mainLight">
      <div className="text-center ">
        <div className="w-full h-20 -mb-6 bg-[url('https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center	" />
        <Avatar />
        <div className="pt-1 pb-4">
          <h3 className="text-sm font-medium text-white">Ivan Telles</h3>
          <p className="text-xs text-gray-400">React developer</p>
        </div>
      </div>
      <div className="px-2 py-4 space-y-3 text-xs text-gray-400 border-t border-gray-700">
        <div className="flex justify-between ">
          <p>Who viewed your profile</p>
          <span className="font-medium text-green-300">2,454</span>
        </div>
        <div className="flex justify-between">
          <p>Impressions of your posts</p>
          <span className="font-medium text-green-300">54</span>
        </div>
      </div>
    </div>
  );
}
