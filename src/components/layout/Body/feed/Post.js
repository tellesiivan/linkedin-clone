import React from "react";
import Avatar from "../../../reusable/Avatar";

export default function Post() {
  return (
    <div className="px-4 pt-4 my-2 space-y-4 overflow-hidden rounded-lg bg-mainLight">
      <div className="flex items-center ">
        {/* Content goes here */}
        <Avatar />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-white">Ivan Telles</h3>
          <p className="text-xs text-gray-400">React developer</p>
        </div>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="">
        {/* Content goes here */}

        <p className="text-sm text-gray-400">
          I make sure I schedule interview feedback sessions if the candidate
          requests one. There is nothing like being rejected and not
          understanding why. When I was a candidate, I knew what that felt like.
          So I schedule the interview feedback sessions simply because it is
          morally wrong not to.
        </p>
      </div>
      <div className="py-4 border-t border-gray-700">
        {/* Content goes here */}
        <p className="text-xs text-gray-400">React developer</p>
      </div>
    </div>
  );
}
