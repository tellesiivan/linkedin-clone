import { useEffect, useState } from "react";
import CreatePost from "./feed/CreatePost";
import Post from "./feed/Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { dbRef } from "../../../firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(dbRef, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      const arr = [];
      snapshot.forEach((postSnapshot) => {
        arr.push({
          ...postSnapshot.data(),
          id: postSnapshot.id,
        });
      });
      setPosts(arr);
    });
  }, []);

  return (
    <div className="flex-1">
      <CreatePost />

      {/* Posts  */}

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
