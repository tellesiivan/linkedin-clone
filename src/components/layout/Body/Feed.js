import CreatePost from "./feed/CreatePost";
import Post from "./feed/Post";

export default function Feed() {
  return (
    <div className="flex-1">
      <CreatePost />

      {/* Posts  */}
      <Post />
    </div>
  );
}
