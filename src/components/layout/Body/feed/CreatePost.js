import Avatar from "../../../reusable/Avatar";
import InputOption from "../../../reusable/InputOption";
import {
  RiImageFill,
  RiVidiconFill,
  RiCalendarEventFill,
  RiNewspaperFill,
} from "react-icons/ri";

export default function CreatePost() {
  return (
    <div className="p-4 rounded-lg bg-mainLight">
      <div className="flex items-center py-2.5 px-3 rounded-full bg-main">
        <Avatar size={"8"} />
        <form className="flex w-full">
          <input
            type="text"
            className="flex-1 ml-3 text-sm text-gray-300 bg-transparent border-none outline-none"
            placeholder="Start a post..."
          />
          <button type="submit" className="hidden">
            Post
          </button>
        </form>
      </div>
      <div className="flex flex-row p-2 mt-2 space-x-2">
        <InputOption icon={<RiImageFill color="#70b5f9" />} value="Photo" />
        <InputOption icon={<RiVidiconFill color="#e7a33e" />} value="Video" />
        <InputOption
          icon={<RiCalendarEventFill color="#c0cbcd" />}
          value="Event"
        />
        <InputOption
          icon={<RiNewspaperFill color="#7fc15e" />}
          value="Write article"
        />
      </div>
    </div>
  );
}
