import { forwardRef } from "react";
import Avatar from "../../../reusable/Avatar";
import InputOption from "../../../reusable/InputOption";
import {
  RiThumbUpLine,
  RiMessage2Line,
  RiShareFill,
  RiSendPlaneLine,
} from "react-icons/ri";

export default forwardRef(function Post({ post }, ref) {
  return (
    <div
      className="px-4 pt-4 my-2 space-y-4 overflow-hidden rounded-lg bg-mainLight"
      ref={ref}
    >
      <div className="flex items-center ">
        {/* Content goes here */}
        <Avatar srcURL={post.photoUrl !== "" && post.photoUrl} />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-white">{post.user.name}</h3>
          <p className="text-xs text-gray-400">{post.user.title}</p>
        </div>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="">
        {/* Content goes here */}

        <p className="text-sm text-justify text-gray-400">{post.postMessage}</p>
      </div>
      <div className="flex py-4 border-t border-gray-700 ">
        {/* Content goes here */}
        <InputOption
          icon={<RiThumbUpLine className="text-gray-400" />}
          value="Like"
        />
        <InputOption
          icon={<RiMessage2Line className="text-gray-400" />}
          value="Comment"
        />
        <InputOption
          icon={<RiShareFill className="text-gray-400" />}
          value="Share"
        />
        <InputOption
          icon={<RiSendPlaneLine className="text-gray-400" />}
          value="Send"
        />
      </div>
    </div>
  );
});
