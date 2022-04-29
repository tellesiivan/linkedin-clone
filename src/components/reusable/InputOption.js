import React from "react";

export default function InputOption({ icon, value }) {
  return (
    <div className="flex items-center px-3.5 py-2 space-x-2 rounded-full cursor-pointer hover:bg-main group">
      {icon}
      <span className="text-sm text-gray-400 group-hover:text-gray-200">
        {value}
      </span>
    </div>
  );
}
